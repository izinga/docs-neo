/**
 * RobusTest Documentation - Version Management (Simplified)
 * Forces display of version banner
 */

console.log('VERSION-INFO: Script starting execution');

// Create banner immediately when script loads
(function() {
    console.log('VERSION-INFO: Creating banner immediately');
    
    // Create the banner HTML
    const bannerHTML = `
        <div id="version-banner" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
            padding: 12px 16px !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 10000 !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
            font-family: Arial, sans-serif !important;
            font-size: 14px !important;
        ">
            <div style="
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                max-width: 1200px !important;
                margin: 0 auto !important;
            ">
                <div style="display: flex !important; align-items: center !important; gap: 16px !important;">
                    <span style="
                        background: rgba(255,255,255,0.2) !important;
                        padding: 4px 12px !important;
                        border-radius: 20px !important;
                        font-weight: 600 !important;
                    ">v2025.1.0</span>
                    <span style="opacity: 0.9 !important;">January 22, 2025</span>
                    <span style="
                        background: rgba(16, 185, 129, 0.8) !important;
                        padding: 4px 8px !important;
                        border-radius: 12px !important;
                        font-size: 12px !important;
                    ">✨ Latest Version</span>
                </div>
                <div style="display: flex !important; align-items: center !important; gap: 16px !important;">
                    <a href="CHANGELOG.html" style="
                        color: white !important;
                        text-decoration: none !important;
                        font-weight: 500 !important;
                        padding: 8px 16px !important;
                        border: 1px solid rgba(255,255,255,0.3) !important;
                        border-radius: 6px !important;
                        transition: all 0.2s ease !important;
                    " onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">📋 What's New</a>
                    <button style="
                        background: none !important;
                        border: none !important;
                        color: white !important;
                        font-size: 18px !important;
                        cursor: pointer !important;
                        padding: 4px !important;
                        border-radius: 4px !important;
                        line-height: 1 !important;
                    " onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='none'">✕</button>
                </div>
            </div>
        </div>
    `;
    
    // Function to insert banner
    function insertBanner() {
        console.log('VERSION-INFO: Checking if banner should be shown');
        
        // Check if banner was already closed in this session
        const bannerClosed = sessionStorage.getItem('versionBannerClosed');
        if (bannerClosed === 'true') {
            console.log('VERSION-INFO: Banner was already closed in this session, not showing');
            return;
        }
        
        console.log('VERSION-INFO: Inserting banner into DOM');
        
        // Remove any existing banner
        const existing = document.getElementById('version-banner');
        if (existing) {
            existing.remove();
        }
        
        // Insert banner at the top of body
        document.body.insertAdjacentHTML('afterbegin', bannerHTML);
        
        // Add top margin to body to push content down
        document.body.style.marginTop = '60px';
        
        // Add close functionality
        const closeButton = document.querySelector('#version-banner button');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                console.log('VERSION-INFO: Banner closed by user');
                document.getElementById('version-banner').style.display = 'none';
                document.body.style.marginTop = '0px';
                // Remember that banner was closed for this session
                sessionStorage.setItem('versionBannerClosed', 'true');
            });
        }
        
        console.log('VERSION-INFO: Banner inserted successfully');
    }
    
    // Try to insert immediately if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertBanner);
    } else {
        insertBanner();
    }
    
    // Also try after a short delay as backup
    setTimeout(insertBanner, 100);
    
})();

console.log('VERSION-INFO: Script completed initialization');