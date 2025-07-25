/**
 * RobusTest Documentation - Feedback System
 * Collects user feedback and provides improvement suggestions
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // =================================================================
    // Feedback Configuration
    // =================================================================
    
    const feedbackConfig = {
        apiEndpoint: '/api/feedback', // This would be a real endpoint
        enabledPages: ['*'], // Enable on all pages
        feedbackTypes: {
            helpful: '👍 This page was helpful',
            unclear: '❓ This page needs clarification',
            error: '🐛 I found an error',
            suggestion: '💡 I have a suggestion',
            missing: '📝 Information is missing'
        },
        collectAnalytics: true
    };

    // =================================================================
    // Page Feedback Widget
    // =================================================================
    
    function createPageFeedbackWidget() {
        const widget = document.createElement('div');
        widget.className = 'page-feedback-widget';
        widget.innerHTML = `
            <div class="feedback-header">
                <h4>📝 Was this page helpful?</h4>
                <p>Help us improve the documentation</p>
            </div>
            <div class="feedback-options">
                <button class="feedback-btn feedback-yes" data-type="helpful">
                    👍 Yes, very helpful
                </button>
                <button class="feedback-btn feedback-no" data-type="unclear">
                    👎 Could be better
                </button>
            </div>
            <div class="feedback-details" style="display: none;">
                <div class="feedback-form">
                    <label for="feedback-category">What can we improve?</label>
                    <select id="feedback-category" name="category">
                        <option value="">Select category</option>
                        <option value="clarity">Clarity and explanation</option>
                        <option value="examples">More examples needed</option>
                        <option value="accuracy">Information accuracy</option>
                        <option value="navigation">Navigation and organization</option>
                        <option value="missing">Missing information</option>
                        <option value="other">Other</option>
                    </select>
                    
                    <label for="feedback-comment">Additional comments (optional):</label>
                    <textarea id="feedback-comment" name="comment" placeholder="Tell us more about your experience or suggestions for improvement..." rows="3"></textarea>
                    
                    <label for="feedback-email">Email (optional, for follow-up):</label>
                    <input type="email" id="feedback-email" name="email" placeholder="your.email@company.com">
                    
                    <div class="feedback-actions">
                        <button type="button" class="feedback-submit">Send Feedback</button>
                        <button type="button" class="feedback-cancel">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="feedback-success" style="display: none;">
                <div class="feedback-success-content">
                    <span class="feedback-success-icon">✅</span>
                    <p><strong>Thank you for your feedback!</strong></p>
                    <p>Your input helps us improve the documentation for everyone.</p>
                </div>
            </div>
        `;
        
        // Find a good place to insert the widget
        const content = document.querySelector('.rst-content');
        if (content) {
            const footer = content.querySelector('.rst-footer-buttons') || content;
            footer.appendChild(widget);
        }
        
        setupFeedbackHandlers(widget);
        return widget;
    }
    
    function setupFeedbackHandlers(widget) {
        const yesBtn = widget.querySelector('.feedback-yes');
        const noBtn = widget.querySelector('.feedback-no');
        const detailsDiv = widget.querySelector('.feedback-details');
        const submitBtn = widget.querySelector('.feedback-submit');
        const cancelBtn = widget.querySelector('.feedback-cancel');
        const successDiv = widget.querySelector('.feedback-success');
        
        yesBtn.addEventListener('click', function() {
            // For positive feedback, just submit directly
            submitFeedback({
                type: 'helpful',
                page: getCurrentPageInfo(),
                rating: 5,
                timestamp: new Date().toISOString()
            });
            showFeedbackSuccess(widget);
        });
        
        noBtn.addEventListener('click', function() {
            // For negative feedback, show detail form
            widget.querySelector('.feedback-options').style.display = 'none';
            detailsDiv.style.display = 'block';
        });
        
        submitBtn.addEventListener('click', function() {
            const category = widget.querySelector('#feedback-category').value;
            const comment = widget.querySelector('#feedback-comment').value;
            const email = widget.querySelector('#feedback-email').value;
            
            submitFeedback({
                type: 'improvement',
                page: getCurrentPageInfo(),
                category: category,
                comment: comment,
                email: email,
                rating: 2,
                timestamp: new Date().toISOString()
            });
            
            showFeedbackSuccess(widget);
        });
        
        cancelBtn.addEventListener('click', function() {
            detailsDiv.style.display = 'none';
            widget.querySelector('.feedback-options').style.display = 'block';
        });
    }

    // =================================================================
    // Quick Feedback Buttons
    // =================================================================
    
    function createQuickFeedbackButtons() {
        // Add quick feedback buttons to sections
        const sections = document.querySelectorAll('h2, h3');
        
        sections.forEach(function(heading, index) {
            // Skip if too short or already has feedback
            if (heading.textContent.length < 10 || heading.querySelector('.quick-feedback')) {
                return;
            }
            
            const quickFeedback = document.createElement('div');
            quickFeedback.className = 'quick-feedback';
            quickFeedback.innerHTML = `
                <span class="quick-feedback-label">Helpful?</span>
                <button class="quick-feedback-btn quick-yes" data-section="${heading.textContent}" title="This section was helpful">👍</button>
                <button class="quick-feedback-btn quick-no" data-section="${heading.textContent}" title="This section needs improvement">👎</button>
            `;
            
            heading.appendChild(quickFeedback);
            
            // Add click handlers
            quickFeedback.querySelector('.quick-yes').addEventListener('click', function(e) {
                e.preventDefault();
                submitQuickFeedback(heading.textContent, 'helpful');
                showQuickFeedbackThanks(this);
            });
            
            quickFeedback.querySelector('.quick-no').addEventListener('click', function(e) {
                e.preventDefault();
                submitQuickFeedback(heading.textContent, 'needs-improvement');
                showQuickFeedbackThanks(this);
            });
        });
    }
    
    function showQuickFeedbackThanks(button) {
        const parent = button.parentElement;
        parent.innerHTML = '<span class="feedback-thanks">✅ Thanks!</span>';
        
        setTimeout(function() {
            parent.style.opacity = '0';
            setTimeout(function() {
                parent.style.display = 'none';
            }, 300);
        }, 2000);
    }

    // =================================================================
    // Floating Feedback Button
    // =================================================================
    
    function createFloatingFeedbackButton() {
        const floatingBtn = document.createElement('div');
        floatingBtn.className = 'floating-feedback-btn';
        floatingBtn.innerHTML = `
            <button class="floating-feedback-trigger" title="Send Feedback">
                💬 <span>Feedback</span>
            </button>
        `;
        
        document.body.appendChild(floatingBtn);
        
        floatingBtn.addEventListener('click', function() {
            showFeedbackModal();
        });
        
        return floatingBtn;
    }

    // =================================================================
    // Feedback Modal
    // =================================================================
    
    function createFeedbackModal() {
        const modal = document.createElement('div');
        modal.className = 'feedback-modal';
        modal.innerHTML = `
            <div class="feedback-modal-overlay">
                <div class="feedback-modal-content">
                    <div class="feedback-modal-header">
                        <h3>📝 Send Feedback</h3>
                        <button class="feedback-modal-close" aria-label="Close feedback modal">✕</button>
                    </div>
                    <div class="feedback-modal-body">
                        <div class="feedback-type-selection">
                            <p>What kind of feedback do you have?</p>
                            <div class="feedback-type-grid">
                                <button class="feedback-type-btn" data-type="helpful">
                                    <span class="feedback-type-icon">👍</span>
                                    <span class="feedback-type-text">Helpful</span>
                                </button>
                                <button class="feedback-type-btn" data-type="unclear">
                                    <span class="feedback-type-icon">❓</span>
                                    <span class="feedback-type-text">Unclear</span>
                                </button>
                                <button class="feedback-type-btn" data-type="error">
                                    <span class="feedback-type-icon">🐛</span>
                                    <span class="feedback-type-text">Error</span>
                                </button>
                                <button class="feedback-type-btn" data-type="suggestion">
                                    <span class="feedback-type-icon">💡</span>
                                    <span class="feedback-type-text">Suggestion</span>
                                </button>
                                <button class="feedback-type-btn" data-type="missing">
                                    <span class="feedback-type-icon">📝</span>
                                    <span class="feedback-type-text">Missing Info</span>
                                </button>
                                <button class="feedback-type-btn" data-type="other">
                                    <span class="feedback-type-icon">💭</span>
                                    <span class="feedback-type-text">Other</span>
                                </button>
                            </div>
                        </div>
                        <div class="feedback-form-section" style="display: none;">
                            <form class="detailed-feedback-form">
                                <div class="form-group">
                                    <label for="feedback-subject">Subject:</label>
                                    <input type="text" id="feedback-subject" name="subject" required>
                                </div>
                                <div class="form-group">
                                    <label for="feedback-message">Message:</label>
                                    <textarea id="feedback-message" name="message" rows="4" required placeholder="Please describe your feedback in detail..."></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="feedback-contact">Contact Email (optional):</label>
                                    <input type="email" id="feedback-contact" name="contact" placeholder="your.email@company.com">
                                </div>
                                <div class="form-group">
                                    <label class="checkbox-label">
                                        <input type="checkbox" id="feedback-follow-up" name="followUp">
                                        I'd like to be contacted about this feedback
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="feedback-modal-footer">
                        <button class="feedback-btn-secondary feedback-modal-close">Cancel</button>
                        <button class="feedback-btn-primary feedback-modal-submit" style="display: none;">Send Feedback</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        setupFeedbackModalHandlers(modal);
        return modal;
    }
    
    function setupFeedbackModalHandlers(modal) {
        const typeButtons = modal.querySelectorAll('.feedback-type-btn');
        const formSection = modal.querySelector('.feedback-form-section');
        const submitBtn = modal.querySelector('.feedback-modal-submit');
        const closeButtons = modal.querySelectorAll('.feedback-modal-close');
        let selectedType = null;
        
        typeButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                selectedType = this.dataset.type;
                
                // Update UI
                typeButtons.forEach(function(b) { b.classList.remove('selected'); });
                this.classList.add('selected');
                
                // Show form section
                formSection.style.display = 'block';
                submitBtn.style.display = 'inline-block';
                
                // Pre-fill subject based on type
                const subjectInput = modal.querySelector('#feedback-subject');
                const subjects = {
                    helpful: 'Positive feedback',
                    unclear: 'Content needs clarification',
                    error: 'Error report',
                    suggestion: 'Feature or improvement suggestion',
                    missing: 'Missing information request',
                    other: 'General feedback'
                };
                subjectInput.value = subjects[selectedType] || '';
            });
        });
        
        submitBtn.addEventListener('click', function() {
            const form = modal.querySelector('.detailed-feedback-form');
            const formData = new FormData(form);
            
            if (form.checkValidity()) {
                submitDetailedFeedback({
                    type: selectedType,
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                    contact: formData.get('contact'),
                    followUp: formData.has('followUp'),
                    page: getCurrentPageInfo(),
                    timestamp: new Date().toISOString()
                });
                
                showFeedbackModalSuccess(modal);
            } else {
                form.reportValidity();
            }
        });
        
        closeButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                hideFeedbackModal(modal);
            });
        });
        
        modal.querySelector('.feedback-modal-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                hideFeedbackModal(modal);
            }
        });
    }

    // =================================================================
    // Feedback Submission and Storage
    // =================================================================
    
    function submitFeedback(data) {
        // In a real implementation, this would send to a server
        console.log('Feedback submitted:', data);
        
        // Store locally for now
        const feedbackHistory = JSON.parse(localStorage.getItem('robustest_feedback') || '[]');
        feedbackHistory.push(data);
        localStorage.setItem('robustest_feedback', JSON.stringify(feedbackHistory));
        
        // Track analytics if enabled
        if (feedbackConfig.collectAnalytics && window.gtag) {
            window.gtag('event', 'feedback_submitted', {
                'feedback_type': data.type,
                'page_title': data.page.title,
                'page_url': data.page.url
            });
        }
    }
    
    function submitQuickFeedback(section, type) {
        submitFeedback({
            type: 'quick_feedback',
            section: section,
            sentiment: type,
            page: getCurrentPageInfo(),
            timestamp: new Date().toISOString()
        });
    }
    
    function submitDetailedFeedback(data) {
        submitFeedback(data);
    }
    
    function getCurrentPageInfo() {
        return {
            title: document.title,
            url: window.location.href,
            path: window.location.pathname,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };
    }

    // =================================================================
    // UI Helper Functions
    // =================================================================
    
    function showFeedbackSuccess(widget) {
        widget.querySelector('.feedback-options').style.display = 'none';
        widget.querySelector('.feedback-details').style.display = 'none';
        widget.querySelector('.feedback-success').style.display = 'block';
    }
    
    function showFeedbackModal() {
        const modal = document.querySelector('.feedback-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
    
    function hideFeedbackModal(modal) {
        modal.style.display = 'none';
        
        // Reset form
        const form = modal.querySelector('.detailed-feedback-form');
        if (form) {
            form.reset();
        }
        
        // Reset UI state
        modal.querySelectorAll('.feedback-type-btn').forEach(function(btn) {
            btn.classList.remove('selected');
        });
        modal.querySelector('.feedback-form-section').style.display = 'none';
        modal.querySelector('.feedback-modal-submit').style.display = 'none';
    }
    
    function showFeedbackModalSuccess(modal) {
        modal.querySelector('.feedback-modal-body').innerHTML = `
            <div class="feedback-success-large">
                <div class="feedback-success-icon-large">✅</div>
                <h4>Thank you for your feedback!</h4>
                <p>Your input is valuable and helps us improve the documentation for everyone.</p>
                <p>We review all feedback and will make improvements based on your suggestions.</p>
            </div>
        `;
        modal.querySelector('.feedback-modal-footer').innerHTML = `
            <button class="feedback-btn-primary feedback-modal-close">Close</button>
        `;
        
        // Update close handler
        modal.querySelector('.feedback-modal-close').addEventListener('click', function() {
            hideFeedbackModal(modal);
        });
    }

    // =================================================================
    // Initialize Feedback System
    // =================================================================
    
    // Only initialize if not disabled
    if (!document.body.classList.contains('no-feedback')) {
        // Create feedback components
        createPageFeedbackWidget();
        createQuickFeedbackButtons();
        createFloatingFeedbackButton();
        createFeedbackModal();
        
        // Track page views for analytics
        if (feedbackConfig.collectAnalytics && window.gtag) {
            window.gtag('event', 'page_view', {
                'page_title': document.title,
                'page_location': window.location.href
            });
        }
    }
    
    // Add global feedback API
    window.RobusTestFeedback = {
        submit: submitFeedback,
        show: showFeedbackModal,
        config: feedbackConfig
    };
});