/* =================================================================
   ABSOLUTE NAVIGATION SCROLL FIX - NUCLEAR OPTION
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    console.log('ABSOLUTE Navigation Scroll Fix Loading...');
    
    // ABSOLUTE scroll position locking
    let absoluteScrollLock = false;
    let lockedNavScrollTop = 0;
    let lockedWindowScrollTop = 0;
    
    // IMMEDIATE position capture and lock
    const lockScrollPositions = () => {
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide) {
            lockedNavScrollTop = navSide.scrollTop;
        }
        lockedWindowScrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        
        console.log('LOCKED POSITIONS - Nav:', lockedNavScrollTop, 'Window:', lockedWindowScrollTop);
        absoluteScrollLock = true;
    };
    
    // FORCE restoration to locked positions
    const forceScrollRestore = () => {
        if (absoluteScrollLock) {
            const navSide = document.querySelector('.wy-nav-side');
            if (navSide && navSide.scrollTop !== lockedNavScrollTop) {
                navSide.scrollTop = lockedNavScrollTop;
                console.log('FORCED nav scroll restoration to:', lockedNavScrollTop);
            }
            
            const currentWindowScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
            if (currentWindowScroll !== lockedWindowScrollTop) {
                window.scrollTo(0, lockedWindowScrollTop);
                document.documentElement.scrollTop = lockedWindowScrollTop;
                document.body.scrollTop = lockedWindowScrollTop;
                console.log('FORCED window scroll restoration to:', lockedWindowScrollTop);
            }
        }
    };
    
    // NUCLEAR OPTION: Override ALL scroll-related properties
    const overrideScrollProperties = () => {
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide && absoluteScrollLock) {
            // Completely override scrollTop property
            const originalScrollTop = navSide.scrollTop;
            Object.defineProperty(navSide, 'scrollTop', {
                get: function() { 
                    return lockedNavScrollTop; 
                },
                set: function(value) { 
                    console.log('BLOCKED scrollTop change from', value, 'to', lockedNavScrollTop);
                    return lockedNavScrollTop; 
                },
                configurable: true
            });
            
            // Block scroll method
            navSide.scroll = function() { console.log('BLOCKED scroll() call'); };
            navSide.scrollTo = function() { console.log('BLOCKED scrollTo() call'); };
            navSide.scrollBy = function() { console.log('BLOCKED scrollBy() call'); };
        }
    };
    
    // Restore normal scroll behavior
    const restoreScrollProperties = () => {
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide) {
            // Remove property overrides
            delete navSide.scrollTop;
            delete navSide.scroll;
            delete navSide.scrollTo;
            delete navSide.scrollBy;
            
            // Set final position
            navSide.scrollTop = lockedNavScrollTop;
        }
        absoluteScrollLock = false;
        console.log('RESTORED normal scroll behavior');
    };
    
    // CONTINUOUS monitoring for ANY scroll changes
    const continuousMonitor = setInterval(() => {
        if (absoluteScrollLock) {
            forceScrollRestore();
        }
    }, 5); // Check every 5ms
    
    // GLOBAL event interception - capture ALL events before they reach targets
    document.addEventListener('mousedown', function(e) {
        const navElement = e.target.closest('.wy-menu-vertical');
        if (navElement) {
            console.log('MOUSEDOWN on navigation - LOCKING SCROLL');
            lockScrollPositions();
            overrideScrollProperties();
            
            // Keep locked for extended duration
            setTimeout(() => {
                restoreScrollProperties();
            }, 2000);
        }
    }, true); // Use capture phase
    
    // ABSOLUTE click prevention and manual handling
    document.addEventListener('click', function(e) {
        const navLink = e.target.closest('.wy-menu-vertical a');
        if (navLink) {
            console.log('ABSOLUTE CLICK INTERCEPTION on:', navLink.textContent?.trim());
            
            // STOP EVERYTHING
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Ensure scroll lock is active
            if (!absoluteScrollLock) {
                lockScrollPositions();
                overrideScrollProperties();
            }
            
            // Handle navigation manually
            const href = navLink.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('javascript:')) {
                console.log('MANUAL NAVIGATION to:', href);
                
                // Navigate after ensuring scroll lock
                setTimeout(() => {
                    window.location.href = href;
                }, 100);
            }
            
            // Handle expansion if it has sub-items
            const parentLi = navLink.closest('li');
            const subUl = parentLi ? parentLi.querySelector('ul') : null;
            if (subUl) {
                const isExpanded = subUl.style.display !== 'none';
                subUl.style.display = isExpanded ? 'none' : 'block';
                console.log('MANUAL EXPANSION toggle:', !isExpanded);
            }
            
            return false;
        }
    }, true); // Use capture phase
    
    // BLOCK all scroll events on navigation
    document.addEventListener('scroll', function(e) {
        if (e.target.closest('.wy-nav-side') && absoluteScrollLock) {
            console.log('BLOCKING scroll event on navigation');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            forceScrollRestore();
            return false;
        }
    }, true);
    
    // BLOCK focus events that might cause scrolling
    document.addEventListener('focus', function(e) {
        if (e.target.closest('.wy-menu-vertical')) {
            console.log('BLOCKING focus on navigation');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            if (e.target.blur) {
                e.target.blur();
            }
            
            forceScrollRestore();
            return false;
        }
    }, true);
    
    // NUCLEAR CSS injection
    const style = document.createElement('style');
    style.textContent = `
        /* ABSOLUTE scroll prevention */
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
        
        /* Prevent any focus-based scrolling */
        .wy-menu-vertical a:focus,
        .wy-menu-vertical *:focus {
            outline: none !important;
            box-shadow: none !important;
        }
        
        /* Global scroll behavior override */
        * {
            scroll-behavior: auto !important;
            overflow-anchor: none !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log('ABSOLUTE NAVIGATION SCROLL FIX ACTIVE');
});