/* =================================================================
   NAVIGATION SCROLL DIAGNOSTIC - Find the Root Cause
   ================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 NAVIGATION DIAGNOSTIC MODE ACTIVE');
    
    // Original scroll monitoring
    let initialNavScrollTop = 0;
    let scrollChangeDetected = false;
    
    // Capture initial state
    setTimeout(() => {
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide) {
            initialNavScrollTop = navSide.scrollTop;
            console.log('📍 Initial nav scroll position:', initialNavScrollTop);
        }
    }, 1000);
    
    // Monitor ALL possible scroll triggers
    const navSide = document.querySelector('.wy-nav-side');
    if (navSide) {
        // Monitor scroll property changes
        let currentScrollTop = navSide.scrollTop;
        
        const checkScrollChange = () => {
            if (navSide.scrollTop !== currentScrollTop) {
                console.log('🚨 SCROLL CHANGE DETECTED!');
                console.log('   From:', currentScrollTop, 'To:', navSide.scrollTop);
                console.log('   Change amount:', navSide.scrollTop - currentScrollTop);
                console.trace('   Call stack:');
                currentScrollTop = navSide.scrollTop;
                scrollChangeDetected = true;
            }
        };
        
        // High-frequency monitoring
        setInterval(checkScrollChange, 10);
        
        // Monitor scroll events
        navSide.addEventListener('scroll', function(e) {
            console.log('📜 SCROLL EVENT on nav panel');
            console.log('   ScrollTop:', navSide.scrollTop);
            console.log('   Event target:', e.target);
            console.trace('   Event origin:');
        }, true);
    }
    
    // Monitor ALL navigation interactions
    document.addEventListener('click', function(e) {
        const navElement = e.target.closest('.wy-menu-vertical');
        if (navElement) {
            console.log('🖱️ CLICK on navigation element:');
            console.log('   Target:', e.target.tagName, e.target.className);
            console.log('   Text:', e.target.textContent?.trim());
            console.log('   Closest link:', e.target.closest('a')?.href);
            console.log('   Has sub-items:', !!e.target.closest('li')?.querySelector('ul'));
            
            const navSide = document.querySelector('.wy-nav-side');
            console.log('   Nav scroll BEFORE click:', navSide?.scrollTop);
            
            // Reset scroll change detection
            scrollChangeDetected = false;
            
            // Monitor for changes after click
            setTimeout(() => {
                console.log('   Nav scroll AFTER click (immediate):', navSide?.scrollTop);
                if (scrollChangeDetected) {
                    console.log('❌ SCROLL CHANGE CONFIRMED after click');
                }
            }, 0);
            
            setTimeout(() => {
                console.log('   Nav scroll AFTER click (50ms):', navSide?.scrollTop);
            }, 50);
            
            setTimeout(() => {
                console.log('   Nav scroll AFTER click (100ms):', navSide?.scrollTop);
            }, 100);
            
            setTimeout(() => {
                console.log('   Nav scroll AFTER click (500ms):', navSide?.scrollTop);
            }, 500);
        }
    }, true);
    
    // Monitor focus events
    document.addEventListener('focus', function(e) {
        if (e.target.closest('.wy-menu-vertical')) {
            console.log('🎯 FOCUS event on navigation:');
            console.log('   Target:', e.target.tagName, e.target.className);
            console.log('   Text:', e.target.textContent?.trim());
            
            const navSide = document.querySelector('.wy-nav-side');
            console.log('   Nav scroll at focus:', navSide?.scrollTop);
        }
    }, true);
    
    // Monitor DOM mutations that might affect scroll
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.closest && mutation.target.closest('.wy-menu-vertical')) {
                console.log('🧬 DOM MUTATION in navigation:');
                console.log('   Type:', mutation.type);
                console.log('   Target:', mutation.target.tagName, mutation.target.className);
                
                if (mutation.type === 'attributes') {
                    console.log('   Attribute:', mutation.attributeName);
                    console.log('   New value:', mutation.target.getAttribute(mutation.attributeName));
                }
                
                if (mutation.type === 'childList') {
                    console.log('   Added nodes:', mutation.addedNodes.length);
                    console.log('   Removed nodes:', mutation.removedNodes.length);
                }
                
                const navSide = document.querySelector('.wy-nav-side');
                console.log('   Nav scroll during mutation:', navSide?.scrollTop);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
    });
    
    // Monitor window scroll events
    window.addEventListener('scroll', function(e) {
        console.log('🌐 WINDOW SCROLL EVENT');
        console.log('   ScrollY:', window.scrollY);
    }, true);
    
    // Override scrollIntoView to detect calls
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function(options) {
        if (this.closest('.wy-menu-vertical') || this.closest('.wy-nav-side')) {
            console.log('📍 scrollIntoView CALLED on navigation element:');
            console.log('   Element:', this.tagName, this.className);
            console.log('   Text:', this.textContent?.trim());
            console.log('   Options:', options);
            console.trace('   Call origin:');
            
            // Allow it to proceed for diagnostic purposes
            return originalScrollIntoView.call(this, options);
        } else {
            return originalScrollIntoView.call(this, options);
        }
    };
    
    // Check for any CSS that might cause scrolling
    setTimeout(() => {
        const navSide = document.querySelector('.wy-nav-side');
        if (navSide) {
            const computedStyle = window.getComputedStyle(navSide);
            console.log('🎨 Navigation panel CSS properties:');
            console.log('   scroll-behavior:', computedStyle.scrollBehavior);
            console.log('   overflow:', computedStyle.overflow);
            console.log('   overflow-y:', computedStyle.overflowY);
            console.log('   scroll-padding-top:', computedStyle.scrollPaddingTop);
            console.log('   scroll-margin-top:', computedStyle.scrollMarginTop);
        }
        
        const navLinks = document.querySelectorAll('.wy-menu-vertical a');
        if (navLinks.length > 0) {
            const firstLink = navLinks[0];
            const computedStyle = window.getComputedStyle(firstLink);
            console.log('🔗 Navigation link CSS properties:');
            console.log('   scroll-behavior:', computedStyle.scrollBehavior);
            console.log('   scroll-padding-top:', computedStyle.scrollPaddingTop);
            console.log('   scroll-margin-top:', computedStyle.scrollMarginTop);
        }
    }, 2000);
    
    console.log('🔍 DIAGNOSTIC MODE: Click on any navigation text and check console for detailed analysis');
});