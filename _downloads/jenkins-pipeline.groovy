// RobusTest Jenkins Pipeline Template
// This pipeline demonstrates best practices for integrating RobusTest with Jenkins
// Customize the variables at the top to match your environment

pipeline {
    agent any
    
    // Environment variables - customize these for your setup
    environment {
        ROBUSTEST_URL = 'https://devicefarm.yourcompany.com'
        ROBUSTEST_ACCESS_KEY = credentials('robustest-access-key')
        PROJECT_ID = '5ddfa2d34c4f3d2e3a8003b9'
        BUILD_ARTIFACT_PATH = 'app/build/outputs/apk/debug/'
        SLACK_CHANNEL = '#testing-alerts'
    }
    
    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['smoke', 'regression', 'full'],
            description: 'Which test suite to run'
        )
        choice(
            name: 'DEVICE_GROUP',
            choices: ['latest-android', 'legacy-support', 'ios-devices', 'all-devices'],
            description: 'Target device group'
        )
        booleanParam(
            name: 'PARALLEL_EXECUTION',
            defaultValue: true,
            description: 'Run tests in parallel across devices'
        )
        booleanParam(
            name: 'GENERATE_REPORTS',
            defaultValue: true,
            description: 'Generate detailed test reports'
        )
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Building from branch: ${env.GIT_BRANCH}"
                echo "Commit: ${env.GIT_COMMIT}"
            }
        }
        
        stage('Build Application') {
            steps {
                script {
                    try {
                        // Android build example - adjust for your platform
                        sh """
                            ./gradlew clean assembleDebug assembleDebugAndroidTest
                            ls -la ${BUILD_ARTIFACT_PATH}
                        """
                        
                        // Archive build artifacts
                        archiveArtifacts artifacts: "${BUILD_ARTIFACT_PATH}*.apk", fingerprint: true
                        
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Build failed: ${e.getMessage()}")
                    }
                }
            }
        }
        
        stage('Upload to RobusTest') {
            steps {
                script {
                    try {
                        def buildResponse = sh(
                            script: """
                                curl -X POST \\
                                  '${ROBUSTEST_URL}/v3/project/${PROJECT_ID}/build?accesskey=${ROBUSTEST_ACCESS_KEY}' \\
                                  -H 'Content-Type: multipart/form-data' \\
                                  -F 'file=@${BUILD_ARTIFACT_PATH}app-debug.apk' \\
                                  -F 'buildName=Jenkins-${BUILD_NUMBER}' \\
                                  -F 'buildDesc=Automated build from Jenkins pipeline'
                            """,
                            returnStdout: true
                        ).trim()
                        
                        def buildData = readJSON text: buildResponse
                        env.ROBUSTEST_BUILD_ID = buildData.buildId
                        
                        echo "Build uploaded successfully. Build ID: ${env.ROBUSTEST_BUILD_ID}"
                        
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Failed to upload build: ${e.getMessage()}")
                    }
                }
            }
        }
        
        stage('Configure Test Job') {
            steps {
                script {
                    // Create job payload based on parameters
                    def jobPayload = [
                        project: [
                            id: PROJECT_ID
                        ],
                        build: [
                            id: env.ROBUSTEST_BUILD_ID
                        ],
                        runMode: params.PARALLEL_EXECUTION ? "PARALLEL" : "SEQUENTIAL",
                        testSuite: params.TEST_SUITE,
                        deviceGroup: params.DEVICE_GROUP,
                        settings: [
                            captureScreenshots: true,
                            captureVideo: true,
                            capturePerformance: true,
                            generateReports: params.GENERATE_REPORTS,
                            maxExecutionTime: 30,
                            retryFailedTests: true
                        ],
                        notifications: [
                            email: [
                                enabled: true,
                                recipients: ["${env.CHANGE_AUTHOR_EMAIL}", "qa-team@yourcompany.com"]
                            ],
                            slack: [
                                enabled: true,
                                channel: SLACK_CHANNEL,
                                onSuccess: true,
                                onFailure: true
                            ]
                        ]
                    ]
                    
                    writeJSON file: 'job-payload.json', json: jobPayload
                    echo "Job configuration created"
                }
            }
        }
        
        stage('Execute Tests') {
            steps {
                script {
                    try {
                        // Submit test job
                        def jobResponse = sh(
                            script: """
                                curl -X POST \\
                                  '${ROBUSTEST_URL}/v3/job/new?accesskey=${ROBUSTEST_ACCESS_KEY}' \\
                                  -H 'Content-Type: application/json' \\
                                  -d @job-payload.json
                            """,
                            returnStdout: true
                        ).trim()
                        
                        def jobData = readJSON text: jobResponse
                        env.ROBUSTEST_JOB_ID = jobData.jobId
                        
                        echo "Test job submitted. Job ID: ${env.ROBUSTEST_JOB_ID}"
                        echo "Monitoring job progress..."
                        
                        // Monitor job progress
                        timeout(time: 45, unit: 'MINUTES') {
                            waitUntil {
                                def statusResponse = sh(
                                    script: """
                                        curl -X GET \\
                                          '${ROBUSTEST_URL}/v3/job/${env.ROBUSTEST_JOB_ID}/status?accesskey=${ROBUSTEST_ACCESS_KEY}'
                                    """,
                                    returnStdout: true
                                ).trim()
                                
                                def statusData = readJSON text: statusResponse
                                echo "Job status: ${statusData.status} - Progress: ${statusData.progress}%"
                                
                                return statusData.status in ['COMPLETED', 'FAILED', 'CANCELLED']
                            }
                        }
                        
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Test execution failed: ${e.getMessage()}")
                    }
                }
            }
        }
        
        stage('Collect Results') {
            steps {
                script {
                    try {
                        // Get final job results
                        def resultsResponse = sh(
                            script: """
                                curl -X GET \\
                                  '${ROBUSTEST_URL}/v3/job/${env.ROBUSTEST_JOB_ID}/results?accesskey=${ROBUSTEST_ACCESS_KEY}'
                            """,
                            returnStdout: true
                        ).trim()
                        
                        def results = readJSON text: resultsResponse
                        
                        // Download test reports
                        if (params.GENERATE_REPORTS) {
                            sh """
                                mkdir -p test-reports
                                curl -X GET \\
                                  '${ROBUSTEST_URL}/v3/job/${env.ROBUSTEST_JOB_ID}/report/html?accesskey=${ROBUSTEST_ACCESS_KEY}' \\
                                  -o test-reports/robustest-report.html
                                  
                                curl -X GET \\
                                  '${ROBUSTEST_URL}/v3/job/${env.ROBUSTEST_JOB_ID}/report/junit?accesskey=${ROBUSTEST_ACCESS_KEY}' \\
                                  -o test-reports/junit-results.xml
                            """
                            
                            publishHTML([
                                allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: true,
                                reportDir: 'test-reports',
                                reportFiles: 'robustest-report.html',
                                reportName: 'RobusTest Report',
                                reportTitles: 'Test Execution Report'
                            ])
                            
                            publishTestResults testResultsPattern: 'test-reports/junit-results.xml'
                        }
                        
                        // Set build result based on test results
                        if (results.testResults.failed > 0) {
                            currentBuild.result = 'UNSTABLE'
                            echo "Tests completed with failures: ${results.testResults.failed} failed, ${results.testResults.passed} passed"
                        } else {
                            echo "All tests passed: ${results.testResults.passed} total"
                        }
                        
                        // Store test metrics
                        env.TESTS_TOTAL = results.testResults.total
                        env.TESTS_PASSED = results.testResults.passed
                        env.TESTS_FAILED = results.testResults.failed
                        env.EXECUTION_TIME = results.executionTime
                        
                    } catch (Exception e) {
                        echo "Warning: Failed to collect some results: ${e.getMessage()}"
                    }
                }
            }
        }
    }
    
    post {
        always {
            script {
                // Clean up temporary files
                sh "rm -f job-payload.json"
                
                // Archive logs
                archiveArtifacts artifacts: 'test-reports/**/*', allowEmptyArchive: true
            }
        }
        
        success {
            script {
                def message = """
✅ *RobusTest Pipeline Successful*
*Project:* ${env.JOB_NAME}
*Build:* #${env.BUILD_NUMBER}
*Branch:* ${env.GIT_BRANCH}
*Test Suite:* ${params.TEST_SUITE}
*Results:* ${env.TESTS_PASSED}/${env.TESTS_TOTAL} tests passed
*Duration:* ${env.EXECUTION_TIME}
*Report:* ${env.BUILD_URL}RobusTest_Report/
                """
                
                // Send Slack notification (if configured)
                slackSend(
                    channel: SLACK_CHANNEL,
                    color: 'good',
                    message: message
                )
            }
        }
        
        failure {
            script {
                def message = """
❌ *RobusTest Pipeline Failed*
*Project:* ${env.JOB_NAME}
*Build:* #${env.BUILD_NUMBER}
*Branch:* ${env.GIT_BRANCH}
*Stage:* ${env.STAGE_NAME}
*Build Log:* ${env.BUILD_URL}console
                """
                
                // Send Slack notification (if configured)
                slackSend(
                    channel: SLACK_CHANNEL,
                    color: 'danger',
                    message: message
                )
            }
        }
        
        unstable {
            script {
                def message = """
⚠️ *RobusTest Pipeline Unstable*
*Project:* ${env.JOB_NAME}
*Build:* #${env.BUILD_NUMBER}
*Results:* ${env.TESTS_FAILED} tests failed, ${env.TESTS_PASSED} passed
*Report:* ${env.BUILD_URL}RobusTest_Report/
                """
                
                // Send Slack notification (if configured)
                slackSend(
                    channel: SLACK_CHANNEL,
                    color: 'warning',
                    message: message
                )
            }
        }
    }
}

// Helper functions
def downloadArtifact(url, filename) {
    sh "curl -L -o ${filename} '${url}'"
}

def uploadToRobusTest(filePath, buildName) {
    return sh(
        script: """
            curl -X POST \\
              '${ROBUSTEST_URL}/v3/project/${PROJECT_ID}/build?accesskey=${ROBUSTEST_ACCESS_KEY}' \\
              -H 'Content-Type: multipart/form-data' \\
              -F 'file=@${filePath}' \\
              -F 'buildName=${buildName}'
        """,
        returnStdout: true
    ).trim()
}