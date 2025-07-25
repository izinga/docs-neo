/* =================================================================
   Navigation Enhancement JavaScript - Proper Expand/Collapse
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize proper expand/collapse behavior
    function initializeNavigation() {
        const navItems = document.querySelectorAll('.wy-menu-vertical li');
        
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const nestedUl = item.querySelector('ul');
            
            if (nestedUl && link) {
                // Add expand button if it doesn't exist
                let expandBtn = link.querySelector('.toctree-expand');
                if (!expandBtn) {
                    expandBtn = document.createElement('span');
                    expandBtn.className = 'toctree-expand';
                    expandBtn.textContent = '+';
                    expandBtn.style.float = 'right';
                    expandBtn.style.cursor = 'pointer';
                    link.insertBefore(expandBtn, link.firstChild);
                }
                
                // Set initial state - collapsed by default
                const isCurrentPage = item.classList.contains('current') || 
                                     link.classList.contains('current') ||
                                     nestedUl.querySelector('.current');
                
                if (isCurrentPage) {
                    // Expand if current page is in this section
                    item.classList.add('toctree-expand-open');
                    nestedUl.style.display = 'block';
                    nestedUl.style.visibility = 'visible';
                    nestedUl.style.opacity = '1';
                    nestedUl.style.maxHeight = 'none';
                    expandBtn.textContent = '-';
                } else {
                    // Collapse by default
                    item.classList.remove('toctree-expand-open');
                    nestedUl.style.display = 'none';
                    nestedUl.style.visibility = 'hidden';
                    nestedUl.style.opacity = '0';
                    nestedUl.style.maxHeight = '0';
                    expandBtn.textContent = '+';
                }
                
                // Add click handler for expand/collapse
                expandBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isExpanded = item.classList.contains('toctree-expand-open');
                    
                    if (isExpanded) {
                        // Collapse
                        item.classList.remove('toctree-expand-open');
                        nestedUl.style.display = 'none';
                        nestedUl.style.visibility = 'hidden';
                        nestedUl.style.opacity = '0';
                        nestedUl.style.maxHeight = '0';
                        expandBtn.textContent = '+';
                    } else {
                        // Expand
                        item.classList.add('toctree-expand-open');
                        nestedUl.style.display = 'block';
                        nestedUl.style.visibility = 'visible';
                        nestedUl.style.opacity = '1';
                        nestedUl.style.maxHeight = 'none';
                        expandBtn.textContent = '-';
                    }
                });
            }
        });
    }
    
    // Ensure main navigation is always visible
    function ensureMainNavigationVisible() {
        // Force main navigation elements to be visible
        const navContainer = document.querySelector('.wy-menu-vertical');
        const mainNav = document.querySelector('.wy-menu-vertical > ul');
        const mainItems = document.querySelectorAll('.wy-menu-vertical > ul > li');
        const mainLinks = document.querySelectorAll('.wy-menu-vertical > ul > li > a');
        
        [navContainer, mainNav, ...mainItems, ...mainLinks].forEach(element => {
            if (element) {
                element.style.display = 'block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.maxHeight = 'none';
                element.style.height = 'auto';
            }
        });
        
        // Make sure the navigation sidebar itself is visible
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide) {
            navSide.style.display = 'block';
            navSide.style.visibility = 'visible';
            navSide.style.opacity = '1';
        }
    }
    
    // Apply custom CSS to override theme defaults
    function applyCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Enhanced expand/collapse styling */
            .wy-menu-vertical .toctree-expand {
                display: inline-block !important;
                width: 1.2rem !important;
                height: 1.2rem !important;
                line-height: 1.2rem !important;
                text-align: center !important;
                margin-right: 0.5rem !important;
                border-radius: 3px !important;
                background: rgba(148, 163, 184, 0.15) !important;
                color: #94a3b8 !important;
                font-size: 0.85rem !important;
                font-weight: bold !important;
                transition: all 0.3s ease !important;
                cursor: pointer !important;
                float: right !important;
                margin-left: auto !important;
            }
            
            .wy-menu-vertical .toctree-expand:hover {
                background: rgba(59, 130, 246, 0.2) !important;
                color: #3b82f6 !important;
                transform: scale(1.1) !important;
            }
            
            .wy-menu-vertical li.toctree-expand-open > a .toctree-expand {
                background: rgba(59, 130, 246, 0.3) !important;
                color: #60a5fa !important;
            }
            
            /* Smooth transitions for expand/collapse */
            .wy-menu-vertical li ul {
                transition: all 0.3s ease !important;
                overflow: hidden !important;
            }
            
            /* Ensure proper spacing */
            .wy-menu-vertical li.toctree-expand-open {
                margin-bottom: 0.5rem !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize everything
    ensureMainNavigationVisible();
    applyCustomStyles();
    initializeNavigation();
    
    // Re-initialize after a delay to ensure all elements are loaded
    setTimeout(() => {
        initializeNavigation();
        ensureMainNavigationVisible();
    }, 500);
    
    // Monitor for dynamic changes
    const observer = new MutationObserver((mutations) => {
        let shouldReinitialize = false;
        
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldReinitialize = true;
            }
        });
        
        if (shouldReinitialize) {
            setTimeout(() => {
                initializeNavigation();
                ensureMainNavigationVisible();
            }, 100);
        }
    });
    
    const navContainer = document.querySelector('.wy-menu-vertical');
    if (navContainer) {
        observer.observe(navContainer, {
            childList: true,
            subtree: true
        });
    }
});