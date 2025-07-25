/* Emergency Navigation Fix JavaScript */
document.addEventListener('DOMContentLoaded', function() {
    
    // Force navigation to be visible immediately
    function forceNavigationVisible() {
        const navSide = document.querySelector('.wy-nav-side');
        const navMenu = document.querySelector('.wy-menu-vertical');
        const navUl = document.querySelector('.wy-menu-vertical ul');
        const navItems = document.querySelectorAll('.wy-menu-vertical li');
        const navLinks = document.querySelectorAll('.wy-menu-vertical a');
        
        // Apply visibility styles directly
        [navSide, navMenu, navUl, ...navItems, ...navLinks].forEach(element => {
            if (element) {
                element.style.display = 'block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
            }
        });
    }
    
    // Clean up expand icons and add functionality
    function setupExpandCollapse() {
        // Aggressively remove ALL expand icons first
        const allExpandIcons = document.querySelectorAll('.wy-menu-vertical .toctree-expand');
        allExpandIcons.forEach(icon => icon.remove());
        
        console.log('Removed', allExpandIcons.length, 'existing expand icons');
        
        // Setup expand/collapse for items with nested lists
        const itemsWithNested = document.querySelectorAll('.wy-menu-vertical li');
        
        itemsWithNested.forEach(item => {
            const link = item.querySelector('> a'); // Only direct child links
            const nestedUl = item.querySelector('> ul'); // Only direct child ul
            
            if (nestedUl && link) {
                // Ensure only one expand icon
                let expandIcon = link.querySelector('.toctree-expand');
                if (!expandIcon) {
                    expandIcon = document.createElement('span');
                    expandIcon.className = 'toctree-expand';
                    expandIcon.textContent = '+';
                    expandIcon.style.cssText = `
                        display: inline-block !important;
                        float: right !important;
                        width: 20px !important;
                        height: 20px !important;
                        line-height: 20px !important;
                        text-align: center !important;
                        background: rgba(255, 255, 255, 0.1) !important;
                        border-radius: 3px !important;
                        color: #cccccc !important;
                        font-size: 14px !important;
                        font-weight: bold !important;
                        cursor: pointer !important;
                        margin-left: 8px !important;
                        transition: all 0.3s ease !important;
                    `;
                    link.appendChild(expandIcon);
                }
                
                // Set initial state - collapsed by default
                const hasCurrentPage = nestedUl.querySelector('.current') || nestedUl.querySelector('a.current');
                if (hasCurrentPage) {
                    // Expand if contains current page
                    nestedUl.style.display = 'block';
                    nestedUl.style.visibility = 'visible';
                    nestedUl.style.opacity = '1';
                    expandIcon.textContent = '-';
                    item.classList.add('expanded');
                } else {
                    // Collapse by default
                    nestedUl.style.display = 'none';
                    nestedUl.style.visibility = 'hidden';
                    nestedUl.style.opacity = '0';
                    expandIcon.textContent = '+';
                    item.classList.remove('expanded');
                }
                
                // Add click handler with proper event handling
                expandIcon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    // Prevent any scrolling
                    if (e.target) {
                        e.target.blur();
                    }
                    
                    const isExpanded = item.classList.contains('expanded');
                    
                    if (isExpanded) {
                        // Collapse
                        nestedUl.style.display = 'none';
                        nestedUl.style.visibility = 'hidden';
                        nestedUl.style.opacity = '0';
                        expandIcon.textContent = '+';
                        item.classList.remove('expanded');
                    } else {
                        // Expand
                        nestedUl.style.display = 'block';
                        nestedUl.style.visibility = 'visible';
                        nestedUl.style.opacity = '1';
                        expandIcon.textContent = '-';
                        item.classList.add('expanded');
                    }
                    
                    // Force focus to prevent scrolling
                    setTimeout(() => {
                        if (document.activeElement) {
                            document.activeElement.blur();
                        }
                    }, 10);
                    
                    return false;
                });
                
                // Prevent link clicks from causing scrolling
                link.addEventListener('click', function(e) {
                    // Only prevent if clicking on expand icon area
                    if (e.target === expandIcon || e.target.classList.contains('toctree-expand')) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                });
            }
        });
    }
    
    // Initialize everything
    forceNavigationVisible();
    setupExpandCollapse();
    
    // Run again after delays to ensure everything loads
    setTimeout(() => {
        forceNavigationVisible();
        setupExpandCollapse();
    }, 100);
    
    setTimeout(() => {
        forceNavigationVisible();
        setupExpandCollapse();
    }, 500);
});