/**
 * RobusTest Documentation - Interactive Elements
 * Enhances user experience with dynamic functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =================================================================
    // Copy-to-Clipboard functionality for code blocks
    // =================================================================
    
    function initializeCopyToClipboard() {
        // Find all code blocks
        const codeBlocks = document.querySelectorAll('.highlight pre, code');
        
        codeBlocks.forEach(function(codeBlock, index) {
            // Skip if already processed or too short
            if (codeBlock.classList.contains('copy-enabled') || 
                codeBlock.textContent.trim().length < 10) {
                return;
            }
            
            // Create copy button
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H16M8 5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5M8 5C8 5.53043 8.21071 6.03914 8.58579 6.41421C8.96086 6.78929 9.46957 7 10 7H14C14.5304 7 15.0391 6.78929 15.4142 6.41421C15.7893 6.03914 16 5.53043 16 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Copy</span>
            `;
            copyButton.setAttribute('aria-label', 'Copy code to clipboard');
            copyButton.setAttribute('title', 'Copy to clipboard');
            
            // Position copy button
            const wrapper = codeBlock.parentElement;
            if (wrapper && wrapper.classList.contains('highlight')) {
                wrapper.style.position = 'relative';
                wrapper.appendChild(copyButton);
            } else {
                codeBlock.style.position = 'relative';
                codeBlock.parentElement.insertBefore(copyButton, codeBlock.nextSibling);
            }
            
            // Add click event
            copyButton.addEventListener('click', function() {
                const text = codeBlock.textContent;
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(function() {
                        showCopySuccess(copyButton);
                    }).catch(function() {
                        fallbackCopyToClipboard(text, copyButton);
                    });
                } else {
                    fallbackCopyToClipboard(text, copyButton);
                }
            });
            
            codeBlock.classList.add('copy-enabled');
        });
    }
    
    function fallbackCopyToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showCopySuccess(button);
        } catch (err) {
            console.error('Copy failed:', err);
            showCopyError(button);
        }
        
        document.body.removeChild(textArea);
    }
    
    function showCopySuccess(button) {
        const originalContent = button.innerHTML;
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Copied!</span>
        `;
        button.classList.add('copy-success');
        
        setTimeout(function() {
            button.innerHTML = originalContent;
            button.classList.remove('copy-success');
        }, 2000);
    }
    
    function showCopyError(button) {
        const originalContent = button.innerHTML;
        button.innerHTML = `<span>Copy failed</span>`;
        button.classList.add('copy-error');
        
        setTimeout(function() {
            button.innerHTML = originalContent;
            button.classList.remove('copy-error');
        }, 2000);
    }

    // =================================================================
    // Interactive Configuration Generator
    // =================================================================
    
    function initializeConfigurationGenerator() {
        // Create configuration generators for settings pages
        const configContainers = document.querySelectorAll('.config-generator-placeholder');
        
        configContainers.forEach(function(container) {
            const type = container.dataset.type;
            
            switch (type) {
                case 'server-settings':
                    createServerSettingsGenerator(container);
                    break;
                case 'api-payload':
                    createApiPayloadGenerator(container);
                    break;
                case 'installation-checklist':
                    createInstallationChecklist(container);
                    break;
            }
        });
    }
    
    function createServerSettingsGenerator(container) {
        const generator = document.createElement('div');
        generator.className = 'interactive-config-generator';
        generator.innerHTML = `
            <div class="config-form">
                <h4>🔧 RobusTest Server Configuration</h4>
                <div class="form-group">
                    <label for="hostname">Hostname:</label>
                    <input type="text" id="hostname" placeholder="e.g., devicefarm.yourcompany.com" value="">
                </div>
                <div class="form-group">
                    <label for="port">Port:</label>
                    <input type="number" id="port" placeholder="8080" value="8080" min="1" max="65535">
                </div>
                <div class="form-group">
                    <label for="protocol">Protocol:</label>
                    <select id="protocol">
                        <option value="https">HTTPS (Recommended)</option>
                        <option value="http">HTTP</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="context-path">Context Path (Optional):</label>
                    <input type="text" id="context-path" placeholder="e.g., /robustest" value="">
                </div>
            </div>
            <div class="config-output">
                <h5>Generated Configuration:</h5>
                <div class="config-preview">
                    <code id="generated-url">Please fill in the hostname</code>
                    <button type="button" class="copy-config-btn">Copy URL</button>
                </div>
                <div class="config-validation">
                    <span class="validation-status" id="url-validation">⚠️ Enter hostname to validate</span>
                </div>
            </div>
        `;
        
        container.appendChild(generator);
        
        // Add event listeners
        const inputs = generator.querySelectorAll('input, select');
        inputs.forEach(function(input) {
            input.addEventListener('input', updateServerConfiguration);
        });
        
        const copyBtn = generator.querySelector('.copy-config-btn');
        copyBtn.addEventListener('click', function() {
            const url = document.getElementById('generated-url').textContent;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url);
            }
            copyBtn.textContent = 'Copied!';
            setTimeout(function() {
                copyBtn.textContent = 'Copy URL';
            }, 2000);
        });
        
        function updateServerConfiguration() {
            const hostname = document.getElementById('hostname').value.trim();
            const port = document.getElementById('port').value.trim();
            const protocol = document.getElementById('protocol').value;
            const contextPath = document.getElementById('context-path').value.trim();
            
            let url = '';
            let validation = '';
            
            if (hostname) {
                url = protocol + '://' + hostname;
                if (port && port !== '80' && port !== '443') {
                    url += ':' + port;
                }
                if (contextPath) {
                    url += contextPath.startsWith('/') ? contextPath : '/' + contextPath;
                }
                
                // Simple validation
                try {
                    new URL(url);
                    validation = '✅ Valid URL format';
                } catch (e) {
                    validation = '❌ Invalid URL format';
                }
            } else {
                url = 'Please fill in the hostname';
                validation = '⚠️ Enter hostname to validate';
            }
            
            document.getElementById('generated-url').textContent = url;
            document.getElementById('url-validation').textContent = validation;
        }
    }
    
    function createApiPayloadGenerator(container) {
        const generator = document.createElement('div');
        generator.className = 'interactive-api-generator';
        generator.innerHTML = `
            <div class="api-form">
                <h4>🚀 Job Payload Builder</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="project-type">Project Type:</label>
                        <select id="project-type">
                            <option value="">Select project type</option>
                            <option value="ANDROID">Android App</option>
                            <option value="IOS">iOS App</option>
                            <option value="MOBILE_WEB">Mobile Web</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="run-mode">Run Mode:</label>
                        <select id="run-mode">
                            <option value="PARALLEL">Parallel</option>
                            <option value="SEQUENTIAL">Sequential</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="project-id">Project ID:</label>
                    <input type="text" id="project-id" placeholder="Enter your project ID">
                </div>
                <div class="form-group">
                    <label for="build-id">Build ID (Optional):</label>
                    <input type="text" id="build-id" placeholder="Latest build if empty">
                </div>
            </div>
            <div class="api-output">
                <h5>Generated JSON Payload:</h5>
                <pre class="json-preview"><code id="generated-payload">{
  "project": {
    "id": "PROJECT_ID_REQUIRED"
  }
}</code></pre>
                <button type="button" class="copy-payload-btn">Copy JSON</button>
            </div>
        `;
        
        container.appendChild(generator);
        
        // Add event listeners
        const inputs = generator.querySelectorAll('input, select');
        inputs.forEach(function(input) {
            input.addEventListener('input', updateApiPayload);
        });
        
        const copyBtn = generator.querySelector('.copy-payload-btn');
        copyBtn.addEventListener('click', function() {
            const payload = document.getElementById('generated-payload').textContent;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(payload);
            }
            copyBtn.textContent = 'Copied!';
            setTimeout(function() {
                copyBtn.textContent = 'Copy JSON';
            }, 2000);
        });
        
        function updateApiPayload() {
            const projectType = document.getElementById('project-type').value;
            const runMode = document.getElementById('run-mode').value;
            const projectId = document.getElementById('project-id').value.trim();
            const buildId = document.getElementById('build-id').value.trim();
            
            const payload = {
                project: {
                    id: projectId || "PROJECT_ID_REQUIRED"
                }
            };
            
            if (projectType) {
                payload.project.type = projectType;
            }
            
            if (runMode) {
                payload.runMode = runMode;
            }
            
            if (buildId) {
                payload.build = {
                    id: buildId
                };
            }
            
            document.getElementById('generated-payload').textContent = JSON.stringify(payload, null, 2);
        }
    }
    
    function createInstallationChecklist(container) {
        const steps = [
            { id: 'java', title: 'Install Java 8+ or Java 11', required: true },
            { id: 'android-studio', title: 'Install Android Studio', required: true },
            { id: 'android-sdk', title: 'Configure Android SDK', required: true },
            { id: 'environment-vars', title: 'Set Environment Variables', required: true },
            { id: 'adb', title: 'Verify ADB Installation', required: true },
            { id: 'emulator', title: 'Set up Android Emulator (Optional)', required: false },
            { id: 'device-connection', title: 'Test Device Connection', required: true }
        ];
        
        const checklist = document.createElement('div');
        checklist.className = 'interactive-checklist';
        
        let checklistHTML = `
            <div class="checklist-header">
                <h4>📋 Android Setup Checklist</h4>
                <div class="progress-bar">
                    <div class="progress-fill" id="progress-fill"></div>
                </div>
                <span class="progress-text" id="progress-text">0 of ${steps.filter(s => s.required).length} required steps completed</span>
            </div>
            <div class="checklist-items">
        `;
        
        steps.forEach(function(step) {
            checklistHTML += `
                <div class="checklist-item ${step.required ? 'required' : 'optional'}">
                    <input type="checkbox" id="step-${step.id}" data-required="${step.required}">
                    <label for="step-${step.id}">
                        <span class="step-title">${step.title}</span>
                        <span class="step-badge">${step.required ? 'Required' : 'Optional'}</span>
                    </label>
                </div>
            `;
        });
        
        checklistHTML += '</div>';
        checklist.innerHTML = checklistHTML;
        container.appendChild(checklist);
        
        // Add event listeners for checkboxes
        const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', updateProgress);
        });
        
        function updateProgress() {
            const requiredSteps = checklist.querySelectorAll('input[data-required="true"]');
            const completedRequired = checklist.querySelectorAll('input[data-required="true"]:checked');
            const totalRequired = requiredSteps.length;
            const completedRequiredCount = completedRequired.length;
            
            const progressPercent = (completedRequiredCount / totalRequired) * 100;
            
            document.getElementById('progress-fill').style.width = progressPercent + '%';
            document.getElementById('progress-text').textContent = 
                `${completedRequiredCount} of ${totalRequired} required steps completed`;
                
            if (completedRequiredCount === totalRequired) {
                document.getElementById('progress-text').textContent += ' ✅ Setup Complete!';
            }
        }
    }

    // =================================================================
    // Collapsible Sections
    // =================================================================
    
    function initializeCollapsibleSections() {
        // Find sections that could benefit from collapsible functionality
        const longSections = document.querySelectorAll('.section');
        
        longSections.forEach(function(section) {
            const heading = section.querySelector('h2, h3');
            const content = section.querySelector('.section-content, .admonition');
            
            if (heading && content && content.offsetHeight > 400) {
                // Add collapse functionality to long sections
                const toggleButton = document.createElement('button');
                toggleButton.className = 'collapse-toggle';
                toggleButton.innerHTML = '<span>Collapse</span>';
                toggleButton.setAttribute('aria-expanded', 'true');
                
                heading.appendChild(toggleButton);
                
                toggleButton.addEventListener('click', function() {
                    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
                    
                    if (isExpanded) {
                        content.style.maxHeight = '200px';
                        content.style.overflow = 'hidden';
                        toggleButton.innerHTML = '<span>Expand</span>';
                        toggleButton.setAttribute('aria-expanded', 'false');
                    } else {
                        content.style.maxHeight = 'none';
                        content.style.overflow = 'visible';
                        toggleButton.innerHTML = '<span>Collapse</span>';
                        toggleButton.setAttribute('aria-expanded', 'true');
                    }
                });
            }
        });
    }

    // =================================================================
    // Initialize all interactive elements
    // =================================================================
    
    // Initialize copy-to-clipboard for all code blocks
    initializeCopyToClipboard();
    
    // Initialize configuration generators
    initializeConfigurationGenerator();
    
    // Initialize collapsible sections
    initializeCollapsibleSections();
    
    // Reinitialize after dynamic content loads
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                initializeCopyToClipboard();
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});