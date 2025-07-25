/* =================================================================
   FINAL NAVIGATION SOLUTION - Block theme.js scrollIntoView
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 FINAL NAVIGATION SOLUTION: Blocking theme.js scrollIntoView');
    
    // Store the original scrollIntoView method
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    
    // Override scrollIntoView to block calls on navigation elements
    Element.prototype.scrollIntoView = function(options) {
        // Check if this element is within the navigation
        if (this.closest('.wy-menu-vertical') || this.closest('.wy-nav-side')) {
            console.log('✋ BLOCKED scrollIntoView on navigation element:', {
                tag: this.tagName,
                class: this.className,
                text: this.textContent?.trim(),
                href: this.href || 'no-href'
            });
            
            // Simply return without scrolling - this stops the theme.js behavior
            return;
        }
        
        // Allow normal scrollIntoView for non-navigation elements
        return originalScrollIntoView.call(this, options);
    };
    
    // Clean up existing expand icons and setup proper navigation
    function setupNavigationExpansion() {
        // Wait for theme.js to finish its setup
        setTimeout(() => {
            console.log('🔧 Setting up navigation expansion...');
            
            // First, remove ALL existing expand icons to prevent duplicates
            const existingIcons = document.querySelectorAll('.toctree-expand, .nav-expand-icon');
            console.log('🗑️ Removing', existingIcons.length, 'existing expand icons');
            existingIcons.forEach(icon => icon.remove());
            
            const navItems = document.querySelectorAll('.wy-menu-vertical > ul > li');
            console.log('📋 Found', navItems.length, 'top-level navigation items');
            
            navItems.forEach((item, index) => {
                const link = item.querySelector('a');
                const subUl = item.querySelector('ul');
                
                if (link && subUl) {
                    console.log(`🔧 Setting up expansion for item ${index + 1}:`, link.textContent?.trim());
                    
                    // Determine initial state
                    const hasCurrentPage = subUl.querySelector('.current');
                    const shouldBeExpanded = !!hasCurrentPage;
                    
                    // Set initial visibility
                    subUl.style.display = shouldBeExpanded ? 'block' : 'none';
                    
                    // Create new expand icon
                    const expandIcon = document.createElement('span');
                    expandIcon.className = 'nav-expand-icon';
                    expandIcon.textContent = shouldBeExpanded ? '-' : '+';
                    expandIcon.style.cssText = `
                        position: absolute;
                        right: 15px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 18px;
                        height: 18px;
                        line-height: 18px;
                        text-align: center;
                        background: rgba(255,255,255,0.15);
                        border-radius: 3px;
                        color: #ddd;
                        font-size: 12px;
                        font-weight: bold;
                        cursor: pointer;
                        user-select: none;
                        z-index: 10;
                        border: 1px solid rgba(255,255,255,0.1);
                    `;
                    
                    // Make link relative positioned and add icon
                    link.style.position = 'relative';
                    link.appendChild(expandIcon);
                    
                    // Handle expand/collapse with proper event handling
                    expandIcon.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        
                        const isCurrentlyExpanded = subUl.style.display !== 'none';
                        const newState = !isCurrentlyExpanded;
                        
                        // Toggle visibility
                        subUl.style.display = newState ? 'block' : 'none';
                        expandIcon.textContent = newState ? '-' : '+';
                        
                        // Update aria attributes for accessibility
                        link.setAttribute('aria-expanded', newState.toString());
                        
                        console.log('📂 Expansion toggled for:', link.textContent?.trim(), 'Expanded:', newState);
                        
                        return false;
                    });
                    
                    // Also handle clicking on the link text (but prevent scrollIntoView)
                    link.addEventListener('click', function(e) {
                        // If clicking on the expand icon, let it handle
                        if (e.target === expandIcon) {
                            return;
                        }
                        
                        // For navigation links with sub-items, toggle expansion
                        if (subUl) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            const isCurrentlyExpanded = subUl.style.display !== 'none';
                            const newState = !isCurrentlyExpanded;
                            
                            subUl.style.display = newState ? 'block' : 'none';
                            expandIcon.textContent = newState ? '-' : '+';
                            link.setAttribute('aria-expanded', newState.toString());
                            
                            console.log('📂 Link text clicked - Expansion toggled:', newState);
                        }
                        
                        // Handle actual navigation
                        const href = link.getAttribute('href');
                        if (href && href !== '#' && !href.startsWith('javascript:')) {
                            console.log('🔗 Navigating to:', href);
                            // Allow some time for expansion animation, then navigate
                            setTimeout(() => {
                                window.location.href = href;
                            }, 100);
                        }
                    });
                    
                    console.log(`✅ Setup complete for: ${link.textContent?.trim()}, Initially expanded: ${shouldBeExpanded}`);
                } else if (link) {
                    console.log(`ℹ️ No sub-items for: ${link.textContent?.trim()}`);
                }
            });
            
            console.log('✅ Navigation expansion setup complete');
        }, 1500); // Increased delay to ensure theme.js is fully loaded
    }
    
    setupNavigationExpansion();
    
    // Add CSS to prevent any scroll behaviors and hide original expand icons
    const style = document.createElement('style');
    style.textContent = `
        /* Hide all original theme expand icons to prevent duplicates */
        .wy-menu-vertical .toctree-expand {
            display: none !important;
            visibility: hidden !important;
        }
        
        /* Ensure no scroll behaviors */
        .wy-nav-side {
            scroll-behavior: auto !important;
            overflow-anchor: none !important;
        }
        
        .wy-menu-vertical,
        .wy-menu-vertical * {
            scroll-behavior: auto !important;
            scroll-margin: 0 !important;
            scroll-padding: 0 !important;
            overflow-anchor: none !important;
        }
        
        /* Prevent focus-based scrolling */
        .wy-menu-vertical a:focus {
            outline: none !important;
        }
        
        /* Style our custom expand icons */
        .nav-expand-icon {
            transition: all 0.2s ease !important;
        }
        
        .nav-expand-icon:hover {
            background: rgba(255,255,255,0.25) !important;
            color: white !important;
            transform: translateY(-50%) scale(1.1) !important;
            border-color: rgba(255,255,255,0.3) !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
        }
        
        /* Ensure navigation links are properly positioned for icons */
        .wy-menu-vertical > ul > li > a {
            position: relative !important;
            padding-right: 45px !important; /* Make room for expand icon */
        }
    `;
    document.head.appendChild(style);
    
    console.log('🎯 SOLUTION ACTIVE: theme.js scrollIntoView calls will be blocked');
});