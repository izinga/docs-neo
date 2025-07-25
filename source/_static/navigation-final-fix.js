/* =================================================================
   FINAL NAVIGATION FIX - Comprehensive Solution
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Final Navigation Fix Loading...');
    
    // Force navigation visibility
    function makeNavigationVisible() {
        const elements = [
            '.wy-nav-side',
            '.wy-menu-vertical',
            '.wy-menu-vertical ul',
            '.wy-menu-vertical li',
            '.wy-menu-vertical a'
        ];
        
        elements.forEach(selector => {
            const items = document.querySelectorAll(selector);
            items.forEach(item => {
                if (item) {
                    item.style.display = 'block';
                    item.style.visibility = 'visible';
                    item.style.opacity = '1';
                }
            });
        });
    }
    
    // Remove ALL existing expand icons
    function cleanupExpandIcons() {
        const allIcons = document.querySelectorAll('.toctree-expand');
        console.log('Removing', allIcons.length, 'existing expand icons');
        allIcons.forEach(icon => icon.remove());
    }
    
    // Setup proper expand/collapse
    function setupProperExpandCollapse() {
        const mainItems = document.querySelectorAll('.wy-menu-vertical > ul > li');
        
        mainItems.forEach(item => {
            const link = item.querySelector('a');
            const subUl = item.querySelector('ul');
            
            if (subUl && link) {
                console.log('Setting up expand/collapse for:', link.textContent.trim());
                
                // Create single expand icon
                const expandIcon = document.createElement('span');
                expandIcon.className = 'nav-expand-icon';
                expandIcon.textContent = '+';\n                expandIcon.style.cssText = `\n                    position: absolute;\n                    right: 15px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                    width: 18px;\n                    height: 18px;\n                    line-height: 18px;\n                    text-align: center;\n                    background: rgba(255,255,255,0.15);\n                    border-radius: 3px;\n                    color: #ddd;\n                    font-size: 12px;\n                    font-weight: bold;\n                    cursor: pointer;\n                    user-select: none;\n                    z-index: 10;\n                `;\n                \n                // Make link relative positioned\n                link.style.position = 'relative';\n                link.appendChild(expandIcon);\n                \n                // Set initial state\n                const hasCurrentPage = subUl.querySelector('.current');\n                let isExpanded = hasCurrentPage ? true : false;\n                \n                function updateState() {\n                    if (isExpanded) {\n                        subUl.style.display = 'block';\n                        expandIcon.textContent = '-';\n                        item.classList.add('nav-expanded');\n                    } else {\n                        subUl.style.display = 'none';\n                        expandIcon.textContent = '+';\n                        item.classList.remove('nav-expanded');\n                    }\n                }\n                \n                // Set initial state\n                updateState();\n                \n                // Click handler with proper event management\n                expandIcon.addEventListener('click', function(e) {\n                    e.preventDefault();\n                    e.stopPropagation();\n                    e.stopImmediatePropagation();\n                    \n                    // Prevent scrolling\n                    const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n                    \n                    // Toggle state\n                    isExpanded = !isExpanded;\n                    updateState();\n                    \n                    // Restore scroll position\n                    setTimeout(() => {\n                        document.documentElement.scrollTop = currentScrollTop;\n                        document.body.scrollTop = currentScrollTop;\n                        if (document.activeElement) {\n                            document.activeElement.blur();\n                        }\n                    }, 0);\n                    \n                    console.log('Toggled:', link.textContent.trim(), 'Expanded:', isExpanded);\n                });\n                \n                // Prevent link click interference\n                link.addEventListener('click', function(e) {\n                    if (e.target === expandIcon) {\n                        e.preventDefault();\n                        e.stopPropagation();\n                        return false;\n                    }\n                });\n            }\n        });\n    }\n    \n    // Anti-scroll protection\n    function preventScrollJumping() {\n        // Override focus behavior\n        const style = document.createElement('style');\n        style.textContent = `\n            .wy-menu-vertical a:focus,\n            .wy-menu-vertical *:focus {\n                outline: none !important;\n                box-shadow: none !important;\n            }\n            .wy-menu-vertical {\n                scroll-behavior: auto !important;\n            }\n            .nav-expand-icon:hover {\n                background: rgba(255,255,255,0.25) !important;\n                color: white !important;\n            }\n        `;\n        document.head.appendChild(style);\n    }\n    \n    // Initialize everything\n    function initialize() {\n        makeNavigationVisible();\n        cleanupExpandIcons();\n        setupProperExpandCollapse();\n        preventScrollJumping();\n        console.log('Final Navigation Fix Applied Successfully');\n    }\n    \n    // Run initialization\n    initialize();\n    \n    // Re-run after delays to catch any dynamic changes\n    setTimeout(initialize, 100);\n    setTimeout(initialize, 500);\n    setTimeout(initialize, 1000);\n});