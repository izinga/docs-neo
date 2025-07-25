/* =================================================================
   COMPLETE NAVIGATION OVERRIDE - Take Full Control
   ================================================================= */

// Run immediately, before DOMContentLoaded
(function() {
    console.log('🚀 COMPLETE NAVIGATION OVERRIDE: Starting early initialization');
    
    // Store the original scrollIntoView method immediately
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    
    // Override scrollIntoView immediately to block theme.js
    Element.prototype.scrollIntoView = function(options) {
        if (this.closest('.wy-menu-vertical') || this.closest('.wy-nav-side')) {
            console.log('✋ BLOCKED scrollIntoView on:', this.tagName, this.textContent?.trim());
            return;
        }
        return originalScrollIntoView.call(this, options);
    };
    
    // Function to completely clean and rebuild navigation
    function rebuildNavigation() {
        console.log('🔧 REBUILDING NAVIGATION SYSTEM...');
        
        // Step 1: Remove ONLY original theme icons, keep our custom ones
        const originalThemeIcons = document.querySelectorAll('.toctree-expand, .nav-expand-icon');
        const customIcons = document.querySelectorAll('.custom-nav-expand');
        
        console.log('🗑️ Removing', originalThemeIcons.length, 'original theme icons');
        console.log('🔧 Preserving', customIcons.length, 'custom navigation icons');
        
        // Only remove original theme icons, not our custom ones
        originalThemeIcons.forEach(icon => {
            icon.remove();
        });
        
        // If we already have custom icons, skip rebuilding
        if (customIcons.length > 0) {
            console.log('✅ Custom icons already exist, skipping rebuild');
            return;
        }
        
        // Step 2: Reset all navigation link styles and remove ALL event handlers
        const allNavLinks = document.querySelectorAll('.wy-menu-vertical a');
        allNavLinks.forEach(link => {
            link.style.position = '';
            link.style.paddingRight = '';
            
            // Remove any onclick attributes that might interfere
            link.removeAttribute('onclick');
            link.removeAttribute('onmousedown');
            link.removeAttribute('onmouseup');
            
            // Remove any click event listeners by cloning the element
            const newLink = link.cloneNode(true);
            newLink.removeAttribute('onclick');
            newLink.removeAttribute('onmousedown');
            newLink.removeAttribute('onmouseup');
            
            link.parentNode.replaceChild(newLink, link);
        });
        
        // Step 3: Find all top-level navigation items with sub-menus
        const topLevelItems = document.querySelectorAll('.wy-menu-vertical > ul > li');
        console.log('📋 Processing', topLevelItems.length, 'top-level items');
        
        topLevelItems.forEach((item, index) => {
            const link = item.querySelector('a');
            const subUl = item.querySelector('ul');
            
            if (link && subUl) {
                console.log(`🔧 Item ${index + 1}: "${link.textContent?.trim()}" has sub-items`);
                
                // Determine initial state based on current page - ONLY expand if directly contains current
                const hasCurrent = subUl.querySelector('.current');
                // Only expand if this menu directly contains the current page, not sub-pages
                const isDirectParent = hasCurrent && hasCurrent.closest('ul') === subUl;
                const initiallyExpanded = !!isDirectParent;
                
                console.log(`   📍 Current page detection for "${link.textContent?.trim()}":`)
                console.log(`   - Has current element: ${!!hasCurrent}`)
                console.log(`   - Is direct parent: ${isDirectParent}`)
                console.log(`   - Will be expanded: ${initiallyExpanded}`);
                
                // Set initial visibility with ULTRA AGGRESSIVE override
                if (initiallyExpanded) {
                    // Initially EXPANDED - Make visible
                    subUl.style.display = 'block';
                    subUl.style.setProperty('display', 'block', 'important');
                    subUl.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;');
                    subUl.classList.add('nav-expanded');
                    subUl.classList.remove('nav-collapsed');
                    subUl.style.visibility = 'visible';
                    subUl.style.opacity = '1';
                    subUl.style.maxHeight = 'none';
                    subUl.style.height = 'auto';
                    subUl.style.overflow = 'visible';
                    subUl.removeAttribute('hidden');
                    
                    // Use inline style as backup
                    const inlineStyle = 'display: block !important; visibility: visible !important; opacity: 1 !important; max-height: none !important; height: auto !important;';
                    subUl.setAttribute('style', inlineStyle);
                } else {
                    // Initially COLLAPSED - Make hidden
                    subUl.style.display = 'none';
                    subUl.style.setProperty('display', 'none', 'important');
                    subUl.setAttribute('style', 'display: none !important; visibility: hidden !important; opacity: 0 !important;');
                    subUl.classList.remove('nav-expanded');
                    subUl.classList.add('nav-collapsed');
                    subUl.style.visibility = 'hidden';
                    subUl.style.opacity = '0';
                    subUl.style.maxHeight = '0';
                    subUl.style.height = '0';
                    subUl.style.overflow = 'hidden';
                }
                console.log(`   Initial state: ${initiallyExpanded ? 'EXPANDED' : 'COLLAPSED'}`);
                
                // Create our custom expand icon with CORRECT initial state
                const expandIcon = document.createElement('span');
                expandIcon.className = 'custom-nav-expand';
                expandIcon.textContent = initiallyExpanded ? '−' : '+';
                expandIcon.setAttribute('data-expanded', initiallyExpanded.toString());
                expandIcon.setAttribute('title', 'Click to expand/collapse');
                
                // Style the expand icon with FIXED positioning relative to link
                expandIcon.style.cssText = `
                    position: absolute !important;
                    right: 10px !important;
                    top: 8px !important;
                    width: 22px !important;
                    height: 22px !important;
                    line-height: 22px !important;
                    text-align: center !important;
                    background: rgba(255,255,255,0.1) !important;
                    border-radius: 3px !important;
                    color: #ffffff !important;
                    font-size: 14px !important;
                    font-weight: bold !important;
                    cursor: pointer !important;
                    user-select: none !important;
                    z-index: 1001 !important;
                    border: 1px solid rgba(255,255,255,0.2) !important;
                    transition: background 0.2s ease !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    pointer-events: auto !important;
                    box-sizing: border-box !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    float: none !important;
                    clear: none !important;
                `;
                
                // Style the link to provide space for icon
                link.style.cssText += `
                    display: block !important;
                    overflow: visible !important;
                    padding-right: 40px !important;
                    position: relative !important;
                    z-index: 1 !important;
                `;
                
                // Add the expand icon to the list item, not the link
                item.style.position = 'relative';
                item.appendChild(expandIcon);
                
                // Verify element positioning and clickability
                console.log('🔍 Element inspection for:', link.textContent?.trim());
                console.log('   Icon element:', expandIcon);
                console.log('   Icon position:', expandIcon.getBoundingClientRect());
                console.log('   Icon pointer-events:', window.getComputedStyle(expandIcon).pointerEvents);
                console.log('   Icon z-index:', window.getComputedStyle(expandIcon).zIndex);
                console.log('   Link element:', link);
                console.log('   Link position:', link.getBoundingClientRect());
                
                // Test click functionality disabled - menus should start collapsed
                
                console.log(`   → Icon created with text: "${expandIcon.textContent}"`);
                console.log(`   → Icon positioned at right: 12px`);
                console.log(`   → Link padding-right: 45px`);
                
                // Add multiple event handlers to expand icon for better debugging
                console.log('🎯 Adding click handlers to icon:', expandIcon);
                
                // Test that event handlers are properly attached
                console.log('🔗 Testing click handler attachment for icon:', expandIcon);
                
                // Add a simple test click handler first
                expandIcon.addEventListener('click', function(e) {
                    console.log('🧪 TEST CLICK HANDLER TRIGGERED for:', link.textContent?.trim());
                }, true);
                
                // Add click handler to expand icon with extensive debugging
                expandIcon.addEventListener('click', function(e) {
                    console.log('🖱️ EXPAND ICON CLICKED for:', link.textContent?.trim());
                    console.log('   Event target:', e.target);
                    console.log('   Current target:', e.currentTarget);
                    console.log('   Event phase:', e.eventPhase);
                    console.log('   Mouse position:', e.clientX, e.clientY);
                    console.log('   Icon bounding rect:', expandIcon.getBoundingClientRect());
                    console.log('   Icon still in DOM?', document.body.contains(expandIcon));
                    console.log('   Icon parent element:', expandIcon.parentElement);
                    console.log('   Icon computed styles:', window.getComputedStyle(expandIcon));
                    
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    const isExpanded = expandIcon.getAttribute('data-expanded') === 'true';
                    const newState = !isExpanded;
                    
                    console.log('   Current state:', isExpanded, '→ New state:', newState);
                    console.log('   SubUl element:', subUl);
                    console.log('   SubUl current display:', subUl.style.display);
                    
                    // ULTRA AGGRESSIVE visibility toggle - use ALL possible methods
                    if (newState) {
                        // EXPANDING - Make visible
                        subUl.style.display = 'block';
                        subUl.style.setProperty('display', 'block', 'important');
                        subUl.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;');
                        subUl.classList.add('nav-expanded');
                        subUl.classList.remove('nav-collapsed');
                        subUl.style.visibility = 'visible';
                        subUl.style.opacity = '1';
                        subUl.style.maxHeight = 'none';
                        subUl.style.height = 'auto';
                        subUl.style.overflow = 'visible';
                        subUl.removeAttribute('hidden');
                        
                        // Force immediate CSS computation
                        subUl.offsetHeight;
                        subUl.getBoundingClientRect();
                        
                        // Use inline style as backup
                        const inlineStyle = 'display: block !important; visibility: visible !important; opacity: 1 !important; max-height: none !important; height: auto !important;';
                        subUl.setAttribute('style', inlineStyle);
                        
                    } else {
                        // COLLAPSING - Make hidden
                        subUl.style.display = 'none';
                        subUl.style.setProperty('display', 'none', 'important');
                        subUl.setAttribute('style', 'display: none !important; visibility: hidden !important; opacity: 0 !important;');
                        subUl.classList.remove('nav-expanded');
                        subUl.classList.add('nav-collapsed');
                        subUl.style.visibility = 'hidden';
                        subUl.style.opacity = '0';
                        subUl.style.maxHeight = '0';
                        subUl.style.height = '0';
                        subUl.style.overflow = 'hidden';
                    }
                    expandIcon.textContent = newState ? '−' : '+';
                    expandIcon.setAttribute('data-expanded', newState.toString());
                    
                    // FORCE ICON VISIBILITY - prevent disappearing
                    expandIcon.style.display = 'inline-block';
                    expandIcon.style.visibility = 'visible';
                    expandIcon.style.opacity = '1';
                    expandIcon.style.pointerEvents = 'auto';
                    
                    console.log('   SubUl after toggle:', subUl.style.display);
                    console.log('   Icon text after toggle:', expandIcon.textContent);
                    console.log('   Icon still visible after toggle?', window.getComputedStyle(expandIcon).display);
                    console.log('   Icon still in DOM after toggle?', document.body.contains(expandIcon));
                    
                    // Update link attributes
                    link.setAttribute('aria-expanded', newState.toString());
                    
                    console.log(`📂 TOGGLED "${link.textContent?.trim()}": ${newState ? 'EXPANDED' : 'COLLAPSED'}`);
                    
                    // Force a layout recalculation
                    subUl.offsetHeight;
                    
                    return false;
                });
                
                // Add mousedown handler for additional debugging
                expandIcon.addEventListener('mousedown', function(e) {
                    console.log('🖱️ EXPAND ICON MOUSEDOWN for:', link.textContent?.trim());
                    console.log('   Mouse button:', e.button);
                    console.log('   Element under mouse:', document.elementFromPoint(e.clientX, e.clientY));
                });
                
                // Add hover effect with FIXED positioning
                expandIcon.addEventListener('mouseenter', function() {
                    console.log('🐭 MOUSEENTER on icon for:', link.textContent?.trim());
                    this.style.background = 'rgba(255,255,255,0.3)';
                    this.style.transform = 'scale(1.1)';
                });
                
                expandIcon.addEventListener('mouseleave', function() {
                    console.log('🐭 MOUSELEAVE on icon for:', link.textContent?.trim());
                    this.style.background = 'rgba(255,255,255,0.1)';
                    this.style.transform = 'scale(1)';
                });
                
                // Add debouncing flag to prevent rapid successive clicks
                let isProcessingClick = false;
                
                // Add test link click handler first
                link.addEventListener('click', function(e) {
                    console.log('🧪 TEST LINK CLICK HANDLER TRIGGERED for:', link.textContent?.trim());
                }, true);
                
                // Handle clicks on the link text (for expansion) - use capture phase for priority
                link.addEventListener('click', function(e) {
                    // ULTRA AGGRESSIVE event prevention to stop theme interference
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    // Debouncing - prevent rapid successive clicks
                    if (isProcessingClick) {
                        console.log('🚫 IGNORED duplicate click for:', link.textContent?.trim());
                        return;
                    }
                    
                    isProcessingClick = true;
                    
                    console.log('🖱️ LINK TEXT CLICKED for:', link.textContent?.trim());
                    console.log('   Click target:', e.target.tagName, e.target.className);
                    console.log('   Event timestamp:', e.timeStamp);
                    
                    // If clicking on expand icon, let it handle
                    if (e.target === expandIcon || e.target.closest('.custom-nav-expand')) {
                        console.log('   → Delegating to expand icon handler');
                        isProcessingClick = false;
                        return;
                    }
                    
                    // For items with sub-menus, toggle expansion
                    if (subUl) {
                        console.log('   → Has sub-menu, toggling expansion');
                        
                        const isExpanded = expandIcon.getAttribute('data-expanded') === 'true';
                        const newState = !isExpanded;
                        
                        console.log('   Current state:', isExpanded, '→ New state:', newState);
                        console.log('   SubUl before toggle:', subUl.style.display);
                        
                        // ULTRA AGGRESSIVE visibility toggle - use ALL possible methods
                        if (newState) {
                            // EXPANDING - Make visible
                            subUl.style.display = 'block';
                            subUl.style.setProperty('display', 'block', 'important');
                            subUl.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;');
                            subUl.classList.add('nav-expanded');
                            subUl.classList.remove('nav-collapsed');
                            subUl.style.visibility = 'visible';
                            subUl.style.opacity = '1';
                            subUl.style.maxHeight = 'none';
                            subUl.style.height = 'auto';
                            subUl.style.overflow = 'visible';
                            subUl.removeAttribute('hidden');
                            
                            // Force immediate CSS computation
                            subUl.offsetHeight;
                            subUl.getBoundingClientRect();
                            
                            // Use inline style as backup
                            const inlineStyle = 'display: block !important; visibility: visible !important; opacity: 1 !important; max-height: none !important; height: auto !important;';
                            subUl.setAttribute('style', inlineStyle);
                            
                        } else {
                            // COLLAPSING - Make hidden
                            subUl.style.display = 'none';
                            subUl.style.setProperty('display', 'none', 'important');
                            subUl.setAttribute('style', 'display: none !important; visibility: hidden !important; opacity: 0 !important;');
                            subUl.classList.remove('nav-expanded');
                            subUl.classList.add('nav-collapsed');
                            subUl.style.visibility = 'hidden';
                            subUl.style.opacity = '0';
                            subUl.style.maxHeight = '0';
                            subUl.style.height = '0';
                            subUl.style.overflow = 'hidden';
                        }
                        expandIcon.textContent = newState ? '−' : '+';
                        expandIcon.setAttribute('data-expanded', newState.toString());
                        link.setAttribute('aria-expanded', newState.toString());
                        
                        // FORCE ICON VISIBILITY - prevent disappearing
                        expandIcon.style.display = 'inline-block';
                        expandIcon.style.visibility = 'visible';
                        expandIcon.style.opacity = '1';
                        expandIcon.style.pointerEvents = 'auto';
                        
                        console.log('   SubUl after toggle:', subUl.style.display);
                        console.log('   Icon still visible after text click?', window.getComputedStyle(expandIcon).display);
                        console.log(`📂 TEXT CLICK "${link.textContent?.trim()}": ${newState ? 'EXPANDED' : 'COLLAPSED'}`);
                        
                        // Force layout recalculation
                        subUl.offsetHeight;
                    } else {
                        console.log('   → No sub-menu found');
                    }
                    
                    // Handle navigation if there's a real href
                    const href = link.getAttribute('href');
                    if (href && href !== '#' && !href.startsWith('javascript:')) {
                        console.log('🔗 Navigating to:', href);
                        setTimeout(() => {
                            window.location.href = href;
                        }, 50);
                    } else {
                        console.log('   → No navigation href found');
                    }
                    
                    // Reset processing flag after a short delay
                    setTimeout(() => {
                        isProcessingClick = false;
                    }, 100);
                    
                }, true); // Use capture phase to run before theme handlers
                
                console.log(`✅ Setup complete for: "${link.textContent?.trim()}"`);
            } else if (link) {
                console.log(`ℹ️ Item ${index + 1}: "${link.textContent?.trim()}" has no sub-items`);
            }
        });
        
        console.log('✅ NAVIGATION REBUILD COMPLETE');
    }
    
    // Add global click debugging with targeted theme blocking
    function addGlobalClickDebugging() {
        // Block theme handlers ONLY for links that have sub-menus (should expand/collapse)
        document.addEventListener('click', function(e) {
            const target = e.target;
            const navLink = target.closest('.wy-menu-vertical a');
            
            if (navLink) {
                const parentLi = navLink.closest('li');
                const hasSubMenu = parentLi && parentLi.querySelector('ul');
                
                // Only block theme handlers for links with sub-menus
                if (hasSubMenu && !target.closest('.custom-nav-expand')) {
                    console.log('🛡️ BLOCKING theme handlers for expandable menu:', navLink.textContent?.trim());
                    e.stopPropagation(); // Prevent theme handlers from running
                    // Don't preventDefault - allow our handlers to work
                    return false;
                }
            }
        }, true); // Capture phase to run before theme handlers
        
        document.addEventListener('click', function(e) {
            const target = e.target;
            const isNavigation = target.closest('.wy-menu-vertical');
            if (isNavigation) {
                console.log('🌍 GLOBAL CLICK in navigation detected:');
                console.log('   Target:', target.tagName, target.className, target.textContent?.trim());
                console.log('   Target position:', target.getBoundingClientRect());
                console.log('   Click position:', e.clientX, e.clientY);
                console.log('   Element at click position:', document.elementFromPoint(e.clientX, e.clientY));
            }
        }, true); // Use capture phase
        
        console.log('🌍 Global click debugging enabled');
    }
    
    // Add global CSS immediately
    function addGlobalCSS() {
        const style = document.createElement('style');
        style.id = 'navigation-override-styles';
        style.textContent = `
            /* Hide ALL original expand icons */
            .wy-menu-vertical .toctree-expand {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
            }
            
            /* Prevent scrolling behaviors */
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
            
            /* Remove focus outlines that might cause scrolling */
            .wy-menu-vertical a:focus {
                outline: none !important;
            }
            
            /* CRITICAL: Ensure our custom icons are ALWAYS visible with FIXED positioning */
            .custom-nav-expand {
                display: inline-block !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: absolute !important;
                right: 10px !important;
                top: 8px !important;
                width: 22px !important;
                height: 22px !important;
                line-height: 22px !important;
                text-align: center !important;
                background: rgba(255,255,255,0.1) !important;
                border-radius: 3px !important;
                color: #ffffff !important;
                font-size: 14px !important;
                font-weight: bold !important;
                cursor: pointer !important;
                user-select: none !important;
                z-index: 1001 !important;
                border: 1px solid rgba(255,255,255,0.2) !important;
                transition: background 0.2s ease !important;
                pointer-events: auto !important;
                box-sizing: border-box !important;
                margin: 0 !important;
                padding: 0 !important;
                float: none !important;
                clear: none !important;
            }
            
            /* ULTRA SPECIFIC - Never hide custom icons */
            html body .wy-nav-side .wy-menu-vertical .custom-nav-expand,
            html body .rst-content .wy-menu-vertical .custom-nav-expand,
            html body .wy-menu-vertical li .custom-nav-expand {
                display: inline-block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* CORRECTED CSS OVERRIDE - Default hide sub-menus, only show when explicitly expanded */
            .wy-menu-vertical > ul > li > ul {
                display: none !important; /* Default hidden - all sub-menus */
            }
            
            /* Keep main navigation visible with proper positioning */
            .wy-menu-vertical,
            .wy-menu-vertical > ul,
            .wy-menu-vertical > ul > li {
                display: block !important;
                visibility: visible !important;
            }
            
            /* Ensure parent list items maintain proper positioning for icons */
            .wy-menu-vertical > ul > li {
                position: relative !important;
                overflow: visible !important;
            }
            
            /* Prevent sub-menu expansion from affecting parent layout */
            .wy-menu-vertical > ul > li > a {
                position: relative !important;
                display: block !important;
                padding-right: 40px !important;
                overflow: visible !important;
                z-index: 1 !important;
            }
            
            /* ONLY show sub-menus when they have the nav-expanded class */
            html body .wy-nav-side .wy-menu-vertical li ul.nav-expanded,
            html body .wy-nav-side .wy-menu-vertical > ul > li > ul.nav-expanded,
            html body .rst-content .wy-menu-vertical li ul.nav-expanded,
            html body .rst-content .wy-menu-vertical > ul > li > ul.nav-expanded {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                max-height: none !important;
                height: auto !important;
                position: static !important;
                left: auto !important;
                top: auto !important;
                z-index: auto !important;
            }
            
            /* Ensure sub-menu items within expanded menus are visible */
            .wy-menu-vertical li ul.nav-expanded li {
                display: block !important;
                visibility: visible !important;
            }
            
            /* Force hide collapsed menus */
            html body .wy-nav-side .wy-menu-vertical li ul.nav-collapsed,
            html body .wy-nav-side .wy-menu-vertical > ul > li > ul.nav-collapsed,
            html body .rst-content .wy-menu-vertical li ul.nav-collapsed,
            html body .rst-content .wy-menu-vertical > ul > li > ul.nav-collapsed {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
            }
        `;
        document.head.appendChild(style);
        console.log('📄 Global CSS added');
    }
    
    // Run setup when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addGlobalClickDebugging();
            addGlobalCSS();
            // Single rebuild attempt to prevent interference
            setTimeout(rebuildNavigation, 100);
        });
    } else {
        addGlobalClickDebugging();
        addGlobalCSS();
        setTimeout(rebuildNavigation, 100);
    }
    
    console.log('🚀 COMPLETE NAVIGATION OVERRIDE: Initialization complete');
})();