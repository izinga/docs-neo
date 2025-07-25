Continuous Integration
======================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

Continuous Integration (CI) is a crucial practice in modern software development that ensures code quality and reliability through automated testing. RobusTest provides robust CI/CD integration capabilities that seamlessly fit into your existing development workflow.

**Benefits of CI Integration with RobusTest:**

* **Automated Quality Gates**: Automatically validate app quality with every code change
* **Early Issue Detection**: Catch bugs and performance issues before they reach production
* **Faster Feedback Loops**: Get immediate feedback on code changes across multiple devices
* **Consistent Testing**: Ensure all changes are tested uniformly across your device matrix
* **Reduced Manual Effort**: Automate repetitive testing tasks and focus on exploratory testing

CI/CD Integration Workflow
--------------------------

RobusTest supports a comprehensive CI/CD workflow that includes four key stages:

1. **Remote Build Upload** - Automatically upload new builds to RobusTest
2. **Test Run Triggering** - Initiate automated test execution
3. **Test Run Monitoring** - Track test progress and status
4. **Results Access** - Retrieve and analyze test results

Remote Build Upload
-------------------

Integrate build uploads directly into your CI/CD pipeline to ensure the latest builds are always available for testing.

**Implementation Methods:**

* **API Integration**: Use RobusTest's REST API to upload builds programmatically
* **CI/CD Plugins**: Leverage existing plugins for popular CI/CD tools
* **Custom Scripts**: Develop custom automation scripts for your specific workflow

**Key Features:**

* **Automated Upload**: Trigger uploads automatically after successful builds
* **Build Validation**: Verify build integrity before testing
* **Version Management**: Maintain organized build history with metadata
* **Parallel Processing**: Upload multiple builds simultaneously

**Sample Integration:**

.. code-block:: bash

    # Example CI/CD script integration
    # Upload build after successful compilation
    curl -X PUT '<RobusTest URL>/v3/project/<PROJECT_ID>/build?accesskey=<ACCESS_KEY>' \
         -H 'Content-Type: multipart/form-data' \
         -F 'build=@path/to/your/app.apk' \
         -F 'buildInfo={"desc":"CI Build #'${BUILD_NUMBER}'","label":"v'${VERSION}'"}'

Test Run Triggering
-------------------

Automatically initiate test execution as part of your CI/CD pipeline to ensure consistent quality validation.

**Triggering Methods:**

* **Scheduled Execution**: Run tests at predetermined intervals
* **Event-Based Triggers**: Execute tests based on specific events (code commits, PR creation)
* **API Calls**: Programmatically trigger test runs through REST API
* **Webhook Integration**: Respond to repository events automatically

**Configuration Options:**

* **Test Suite Selection**: Choose specific test suites for different scenarios
* **Device Matrix**: Define device combinations for comprehensive testing
* **Parallel Execution**: Run tests across multiple devices simultaneously
* **Conditional Execution**: Trigger tests based on specific conditions

**Example Trigger Configuration:**

.. code-block:: bash

    # Trigger test run via API
    curl -X POST '<RobusTest URL>/api/1/run/<RUN_ID>?updateFromTestSuite=true&build=latest' \
         -H 'Authorization: Bearer <ACCESS_TOKEN>'

Test Run Monitoring
------------------

Track test execution progress and receive real-time updates on test status during CI/CD pipeline execution.

**Monitoring Capabilities:**

* **Real-time Status Updates**: Get immediate feedback on test progress
* **Execution Tracking**: Monitor individual test case execution
* **Performance Metrics**: Track test execution performance and duration
* **Error Notifications**: Receive immediate alerts for test failures

**Integration Points:**

* **Status APIs**: Query test run status programmatically
* **Webhook Notifications**: Receive status updates via webhooks
* **Dashboard Integration**: View progress in CI/CD dashboards
* **Logging Integration**: Stream test logs to CI/CD logging systems

**Status Monitoring Example:**

.. code-block:: bash

    # Check test run status
    curl -X GET '<RobusTest URL>/api/1/run/<RUN_ID>/status' \
         -H 'Authorization: Bearer <ACCESS_TOKEN>'

Results Access and Analysis
---------------------------

Retrieve comprehensive test results and integrate them into your CI/CD reporting and decision-making process.

**Result Retrieval Methods:**

* **API Access**: Programmatically retrieve test results and reports
* **Automated Reporting**: Generate custom reports for stakeholders
* **Artifact Storage**: Store test artifacts in your CI/CD system
* **Quality Gates**: Make deployment decisions based on test results

**Available Result Data:**

* **Test Execution Summary**: Pass/fail statistics and overall results
* **Detailed Reports**: Step-by-step test execution details
* **Performance Metrics**: CPU, memory, and network usage data
* **Screenshots and Videos**: Visual evidence of test execution
* **Error Analysis**: Detailed error messages and stack traces

**Integration Benefits:**

* **Automated Decision Making**: Block deployments based on test results
* **Trend Analysis**: Track quality trends over time
* **Stakeholder Reporting**: Generate executive summaries automatically
* **Documentation**: Maintain test evidence for compliance

**Sample Result Processing:**

.. code-block:: bash

    # Retrieve test results
    curl -X GET '<RobusTest URL>/api/1/run/<RUN_ID>/results' \
         -H 'Authorization: Bearer <ACCESS_TOKEN>' \
         -o test_results.json

    # Process results for CI/CD decisions
    if [ "$(jq -r '.status' test_results.json)" = "PASSED" ]; then
        echo "Tests passed - proceeding with deployment"
        exit 0
    else
        echo "Tests failed - blocking deployment"
        exit 1
    fi

Best Practices for CI Integration
---------------------------------

**Pipeline Design:**

* **Staged Testing**: Implement progressive testing stages (smoke, regression, full suite)
* **Parallel Execution**: Maximize device utilization with parallel test execution
* **Fail-Fast Strategy**: Stop pipeline execution on critical test failures
* **Resource Management**: Optimize device allocation for efficient testing

**Test Organization:**

* **Modular Test Suites**: Create focused test suites for different pipeline stages
* **Priority-Based Execution**: Run critical tests first for faster feedback
* **Data Management**: Maintain test data consistency across environments
* **Environment Isolation**: Ensure tests don't interfere with each other

**Monitoring and Alerting:**

* **Real-time Notifications**: Set up alerts for test failures and system issues
* **Performance Monitoring**: Track test execution times and resource usage
* **Historical Analysis**: Monitor trends and identify improvement opportunities
* **Capacity Planning**: Ensure adequate device resources for peak usage

.. tip::
   **Start Small**: Begin with a simple CI integration and gradually expand functionality as your team becomes comfortable with the workflow.

.. seealso::
   
   **Related Topics:**
   
   * :doc:`scheduling` - Advanced test scheduling strategies
   * :doc:`automationreports` - Understanding test reports and metrics
   * :doc:`robustesthub` - Running tests on RobusTest Hub infrastructure