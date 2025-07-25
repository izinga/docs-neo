/* =================================================================
   BULLETPROOF NAVIGATION FIX - ABSOLUTE SCROLL PREVENTION
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bulletproof Navigation Fix Loading...');
    
    // CRITICAL: Store scroll positions before ANY navigation interaction
    let lockedScrollTop = 0;
    let lockedScrollLeft = 0;
    let lockedNavScrollTop = 0;
    let isScrollLocked = false;
    
    // IMMEDIATE scroll position capture (including navigation panel)
    const captureScrollPosition = () => {
        if (!isScrollLocked) {
            lockedScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            lockedScrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            const navSide = document.querySelector('.wy-nav-side');
            lockedNavScrollTop = navSide ? navSide.scrollTop : 0;
            console.log('Captured scroll positions - Window:', lockedScrollTop, 'Nav Panel:', lockedNavScrollTop);
        }
    };
    
    // ABSOLUTE scroll restoration - no exceptions (CRITICAL: includes navigation panel)
    const absoluteScrollRestore = () => {
        if (isScrollLocked) {
            // Restore main window scroll
            window.scrollTo(lockedScrollLeft, lockedScrollTop);
            document.documentElement.scrollTop = lockedScrollTop;
            document.documentElement.scrollLeft = lockedScrollLeft;
            document.body.scrollTop = lockedScrollTop;
            document.body.scrollLeft = lockedScrollLeft;
            
            // CRITICAL: Restore navigation panel scroll position
            const navSide = document.querySelector('.wy-nav-side');
            if (navSide) {
                navSide.scrollTop = lockedNavScrollTop;
                navSide.scrollLeft = 0;
                console.log('Restored nav panel scroll to:', lockedNavScrollTop, 'Current:', navSide.scrollTop);
            }
            
            // Force blur any focused elements that might cause auto-scrolling
            if (document.activeElement && document.activeElement !== document.body) {
                document.activeElement.blur();
            }
        }
    };
    
    // PERMANENT scroll monitoring - runs continuously
    const scrollMonitor = setInterval(() => {
        if (isScrollLocked) {
            absoluteScrollRestore();
        } else {
            captureScrollPosition();
        }
    }, 10); // Check every 10ms for immediate response
    
    // GLOBAL scroll event blocker
    let scrollEventBlocked = false;
    const blockAllScrollEvents = (e) => {
        if (isScrollLocked || scrollEventBlocked) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            absoluteScrollRestore();
            return false;
        }
    };
    
    // COMPREHENSIVE event blocking
    document.addEventListener('scroll', blockAllScrollEvents, { passive: false, capture: true });
    window.addEventListener('scroll', blockAllScrollEvents, { passive: false, capture: true });
    document.addEventListener('touchmove', blockAllScrollEvents, { passive: false, capture: true });
    document.addEventListener('wheel', blockAllScrollEvents, { passive: false, capture: true });
    
    // CRITICAL: Navigation panel specific scroll prevention
    const navSide = document.querySelector('.wy-nav-side');
    if (navSide) {
        navSide.addEventListener('scroll', function(e) {
            if (isScrollLocked || scrollEventBlocked) {
                console.log('BLOCKING navigation panel scroll event');
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                // Force immediate restoration
                navSide.scrollTop = lockedNavScrollTop;
                return false;
            }
        }, { passive: false, capture: true });
    }
    
    // NAVIGATION-SPECIFIC scroll lock with aggressive nav panel protection
    const activateScrollLock = () => {
        captureScrollPosition();
        isScrollLocked = true;
        scrollEventBlocked = true;
        console.log('SCROLL LOCKED - Window:', lockedScrollTop, 'Nav Panel:', lockedNavScrollTop);
        
        // IMMEDIATE navigation panel scroll prevention
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide) {
            // Override any programmatic scrollTop changes
            Object.defineProperty(navSide, 'scrollTop', {
                get: function() { return lockedNavScrollTop; },
                set: function(value) { 
                    console.log('BLOCKED attempt to set nav scrollTop to:', value, 'keeping at:', lockedNavScrollTop);
                    return lockedNavScrollTop; 
                },
                configurable: true
            });
        }
        
        // Multiple immediate restoration attempts
        absoluteScrollRestore();
        requestAnimationFrame(absoluteScrollRestore);
        setTimeout(absoluteScrollRestore, 0);
        setTimeout(absoluteScrollRestore, 1);
        setTimeout(absoluteScrollRestore, 5);
        setTimeout(absoluteScrollRestore, 10);
        setTimeout(absoluteScrollRestore, 20);
        setTimeout(absoluteScrollRestore, 50);
        setTimeout(absoluteScrollRestore, 100);
        setTimeout(absoluteScrollRestore, 200);
    };
    
    const deactivateScrollLock = () => {
        setTimeout(() => {
            isScrollLocked = false;
            scrollEventBlocked = false;
            
            // Restore normal scrollTop behavior
            const navSide = document.querySelector('.wy-nav-side');
            if (navSide) {
                // Remove the property override and restore normal behavior
                delete navSide.scrollTop;
                // Set to locked position one final time
                if (navSide.scrollTop !== lockedNavScrollTop) {
                    navSide.scrollTop = lockedNavScrollTop;
                }
            }
            
            console.log('SCROLL UNLOCKED');
        }, 500); // Keep lock active for 500ms after interaction
    };
    
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
        const allIcons = document.querySelectorAll('.toctree-expand, .nav-expand-icon');
        console.log('Removing', allIcons.length, 'existing expand icons');
        allIcons.forEach(icon => icon.remove());
    }
    
    // Setup proper expand/collapse with comprehensive scroll prevention
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
                expandIcon.textContent = '+';
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
                `;
                
                // Make link relative positioned
                link.style.position = 'relative';
                link.appendChild(expandIcon);
                
                // Set initial state
                const hasCurrentPage = subUl.querySelector('.current');
                let isExpanded = hasCurrentPage ? true : false;
                
                function updateState() {
                    if (isExpanded) {
                        subUl.style.display = 'block';
                        expandIcon.textContent = '-';
                        item.classList.add('nav-expanded');
                    } else {
                        subUl.style.display = 'none';
                        expandIcon.textContent = '+';
                        item.classList.remove('nav-expanded');
                    }
                }
                
                // Set initial state
                updateState();
                
                // BULLETPROOF scroll prevention for expand/collapse
                expandIcon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    // ACTIVATE SCROLL LOCK before any state changes
                    activateScrollLock();
                    
                    // Toggle state
                    isExpanded = !isExpanded;
                    updateState();
                    
                    console.log('Toggled:', link.textContent.trim(), 'Expanded:', isExpanded);
                    
                    // DEACTIVATE SCROLL LOCK after delay
                    deactivateScrollLock();
                    
                    return false;
                });
                
                // BULLETPROOF link click handling with IMMEDIATE scroll lock
                link.addEventListener('click', function(e) {
                    // If clicking on expand icon, prevent everything
                    if (e.target === expandIcon || e.target.classList.contains('nav-expand-icon')) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        return false;
                    }
                    
                    console.log('Navigation header clicked:', link.textContent.trim());
                    
                    // CRITICAL: Activate scroll lock BEFORE any browser actions
                    activateScrollLock();
                    
                    // Prevent any default browser scroll-into-view behavior
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    // Handle both expandable items AND navigation links with scroll prevention
                    const href = link.getAttribute('href');
                    
                    if (subUl) {
                        // For expandable items, toggle expansion manually
                        isExpanded = !isExpanded;
                        updateState();
                        console.log('Manual toggle - Expanded:', isExpanded);
                    }
                    
                    // For actual navigation links (including those with sub-items)
                    if (href && href !== '#' && !href.startsWith('javascript:')) {
                        console.log('Navigating to:', href, 'with scroll lock active');
                        
                        // CRITICAL: Maintain scroll lock during navigation
                        // Extend scroll lock duration for navigation
                        setTimeout(() => {
                            deactivateScrollLock();
                        }, 1000); // Override the earlier deactivation
                        
                        // Navigate immediately while scroll lock is active
                        window.location.href = href;
                    }
                    
                    // DEACTIVATE SCROLL LOCK after action completes
                    deactivateScrollLock();
                    
                    return false; // Prevent any default browser behavior
                });
            }
        });
    }
    
    // BULLETPROOF anti-scroll protection with global handlers
    function preventScrollJumping() {
        // Add global scroll prevention styles
        const style = document.createElement('style');
        style.textContent = `
            .wy-menu-vertical a:focus,
            .wy-menu-vertical *:focus {
                outline: none !important;
                box-shadow: none !important;
            }
            .wy-menu-vertical {
                scroll-behavior: auto !important;
            }
            .nav-expand-icon:hover {
                background: rgba(255,255,255,0.25) !important;
                color: white !important;
            }
            
            /* CRITICAL: Prevent any automatic scrolling behaviors in navigation */
            .wy-nav-side {
                scroll-behavior: auto !important;
                overflow-anchor: none !important;
            }
            
            /* Prevent scroll-into-view behavior on navigation elements */
            .wy-menu-vertical,
            .wy-menu-vertical *,
            .wy-menu-vertical a,
            .wy-menu-vertical li {
                scroll-margin: 0 !important;
                scroll-padding: 0 !important;
                scroll-behavior: auto !important;
                overflow-anchor: none !important;
            }
            
            /* Ensure focus doesn't cause scrolling */
            * {
                scroll-margin: 0 !important;
                scroll-padding: 0 !important;
            }
            
            html {
                scroll-behavior: auto !important;
            }
            
            body {
                scroll-behavior: auto !important;
            }
            
            /* Prevent smooth scrolling anywhere */
            html, body, * {
                scroll-behavior: auto !important;
            }
            
            /* Disable scroll anchoring globally */
            * {
                overflow-anchor: none !important;
            }
        `;
        document.head.appendChild(style);
        
        // ULTRA-AGGRESSIVE: Global click handler for ALL navigation elements
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.wy-menu-vertical a');
            if (target) {
                console.log('GLOBAL: Navigation link clicked:', target.tagName, target.textContent?.trim());
                
                // PREVENT ALL default behavior immediately
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                // IMMEDIATE scroll lock activation
                activateScrollLock();
                
                // Get the href for navigation
                const href = target.getAttribute('href');
                console.log('Link href:', href);
                
                // Handle navigation manually with scroll lock active
                if (href && href !== '#' && !href.startsWith('javascript:')) {
                    console.log('MANUAL NAVIGATION to:', href);
                    
                    // Navigate while maintaining scroll lock
                    setTimeout(() => {
                        window.location.href = href;
                    }, 50); // Small delay to ensure scroll lock is fully active
                }
                
                // Extended lock duration to cover navigation
                setTimeout(() => {
                    deactivateScrollLock();
                }, 1500);
                
                return false;
            }
        }, true);
        
        // ADDITIONAL: Prevent any scrollIntoView calls on navigation elements
        const originalScrollIntoView = Element.prototype.scrollIntoView;
        Element.prototype.scrollIntoView = function(options) {
            // If this element is within navigation, block the scroll
            if (this.closest('.wy-menu-vertical') || this.closest('.wy-nav-side')) {
                console.log('BLOCKED scrollIntoView on navigation element:', this.tagName, this.textContent?.trim());
                return; // Do nothing
            }
            // Allow normal scrollIntoView for other elements
            return originalScrollIntoView.call(this, options);
        };
        
        // CRITICAL: Override browser's scroll restoration during navigation
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
            console.log('Set scroll restoration to manual');
        }
        
        // Prevent scroll restoration on page load
        window.addEventListener('beforeunload', function() {
            // Store current navigation scroll position
            const navSide = document.querySelector('.wy-nav-side');
            if (navSide) {
                sessionStorage.setItem('navScrollPosition', navSide.scrollTop.toString());
                console.log('Stored nav scroll position:', navSide.scrollTop);
            }
        });
        
        // Restore navigation scroll position after page load
        window.addEventListener('load', function() {
            const storedNavScroll = sessionStorage.getItem('navScrollPosition');
            if (storedNavScroll) {
                const navSide = document.querySelector('.wy-nav-side');
                if (navSide) {
                    navSide.scrollTop = parseInt(storedNavScroll);
                    console.log('Restored nav scroll position:', storedNavScroll);
                }
            }
        });
        
        // Enhanced focus prevention
        document.addEventListener('focus', function(e) {
            if (e.target.closest('.wy-menu-vertical')) {
                console.log('Focus prevented on:', e.target);
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                if (e.target.blur) {
                    e.target.blur();
                }
                
                activateScrollLock();
                setTimeout(() => {
                    deactivateScrollLock();
                }, 100);
            }
        }, true);
        
        // Prevent any scrolling from keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.target.closest('.wy-menu-vertical')) {
                console.log('Keyboard event on navigation:', e.key);
                activateScrollLock();
                setTimeout(() => {
                    deactivateScrollLock();
                }, 100);
            }
        });
    }
    
    // Initialize everything
    function initialize() {
        makeNavigationVisible();
        cleanupExpandIcons();
        setupProperExpandCollapse();
        preventScrollJumping();
        console.log('BULLETPROOF Navigation Fix Applied Successfully');
    }
    
    // Run initialization
    initialize();
    
    // Re-run after delays to catch any dynamic changes
    setTimeout(initialize, 100);
    setTimeout(initialize, 500);
    setTimeout(initialize, 1000);
    
    // FINAL SAFETY NET: Global document scroll prevention during navigation interactions
    let navigationInteractionActive = false;
    
    // CRITICAL: Mark navigation interactions BEFORE any click processing
    document.addEventListener('mousedown', function(e) {
        if (e.target.closest('.wy-menu-vertical')) {
            console.log('MOUSEDOWN: Pre-emptive scroll lock activation');
            navigationInteractionActive = true;
            activateScrollLock();
            
            // Keep active for longer duration to handle all browser behaviors
            setTimeout(() => {
                navigationInteractionActive = false;
                deactivateScrollLock();
            }, 1000);
        }
    }, true);
    
    // ADDITIONAL: Prevent any focus-based scrolling on navigation links
    document.addEventListener('focusin', function(e) {
        if (e.target.closest('.wy-menu-vertical')) {
            console.log('BLOCKED focusin on navigation element:', e.target.tagName);
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Force blur immediately
            if (e.target.blur) {
                e.target.blur();
            }
            
            activateScrollLock();
            setTimeout(() => {
                deactivateScrollLock();
            }, 200);
        }
    }, true);
    
    // Prevent ANY scroll during navigation interactions
    document.addEventListener('scroll', function(e) {
        if (navigationInteractionActive) {
            console.log('EMERGENCY: Blocking scroll during navigation interaction');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            absoluteScrollRestore();
            return false;
        }
    }, { passive: false, capture: true });
    
    console.log('BULLETPROOF SCROLL PREVENTION SYSTEM ACTIVE');
});