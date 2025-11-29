// Premium mobile navigation with enhanced performance
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // FIX: Ensure navbar is always visible
    if (header) {
        header.style.display = 'block';
        header.style.visibility = 'visible';
        header.style.opacity = '1';
    }
    
    // ==========================================================
    // ⭐ BFCache FIX: Force menu state reset on browser back/forward (Issue 1 Fix)
    // ==========================================================
    window.addEventListener('pageshow', function(event) {
        // Check if the page is loaded from the cache (when using back/forward buttons)
        if (event.persisted) {
            // Ensure the header is visible (Safety check)
            if (header) {
                header.style.display = 'block';
                header.style.visibility = 'visible';
                header.style.opacity = '1';
            }
            
            // Remove active class from mobile menu elements
            if (navMenu && navMenu.classList.contains('active')) {
                // If it's a mobile view, hide the menu
                navMenu.classList.remove('active');
            }
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
            }
        }
    });
    // ==========================================================
    
    // HAMBURGER MENU FUNCTIONALITY
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // FIX: Prevent navbar from hiding
            if (header) {
                header.style.display = 'block';
            }
            
            // Staggered animation for nav items
            if (navMenu.classList.contains('active')) {
                animateMenuOpen();
            } else {
                animateMenuClose();
            }
        });
    }
    
    // Staggered menu item animations on open with fade & slide
    function animateMenuOpen() {
        // Fade in background overlay
        navMenu.style.animation = 'fadeIn 0.4s ease-out forwards';
        
        navLinks.forEach((link, index) => {
            link.style.animation = 'none';
            setTimeout(() => {
                link.style.animation = `slideInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s forwards, fadeIn 0.5s ease-out ${index * 0.08}s forwards`;
            }, 10);
        });
    }
    
    // Staggered menu item animations on close with fade & slide
    function animateMenuClose() {
        navLinks.forEach((link, index) => {
            link.style.animation = `slideOutLeft 0.5s ease-in ${index * 0.05}s forwards, fadeOut 0.3s ease-in ${index * 0.05}s forwards`;
        });
        
        // Fade out background overlay
        setTimeout(() => {
            navMenu.style.animation = 'fadeOut 0.3s ease-in forwards';
        }, 150);
    }
    
    // Close mobile menu when clicking on a link with smooth exit
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                animateMenuClose();
                
                // FIX: Ensure navbar stays visible
                if (header) {
                    header.style.display = 'block';
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            if (!event.target.closest('.hamburger') && !event.target.closest('.nav-menu')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                animateMenuClose();
                
                // FIX: Ensure navbar stays visible
                if (header) {
                    header.style.display = 'block';
                }
            }
        }
    });
    
    // FIX: Window resize handler to ensure navbar visibility
    window.addEventListener('resize', function() {
        if (header) {
            header.style.display = 'block';
        }
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });

    // ========== SMOOTH SCROLLING FIX ==========
    
    // Modern smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu first if open
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    animateMenuClose();
                    
                    // Wait for menu to close before scrolling
                    setTimeout(() => {
                        smoothScrollTo(target);
                    }, 300);
                } else {
                    smoothScrollTo(target);
                }
            }
        });
    });

    // High-performance smooth scroll function
    function smoothScrollTo(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - 80; // Offset for fixed header
        const duration = 800;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smooth acceleration/deceleration
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    // ========== PERFORMANCE OPTIMIZATIONS ==========
    
    // Throttled scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                // Add any scroll-based animations here
            }, 100);
        }
    });

    // Optimize animations with will-change
    if (navMenu) {
        navMenu.style.willChange = 'transform, opacity';
    }
    navLinks.forEach(link => {
        link.style.willChange = 'transform, opacity';
    });
});

// ==========================================================
// ENHANCED BFCache FIX: Force complete navbar repaint on back/forward
// ==========================================================

// Listen for pageshow event (triggers on back/forward navigation)
window.addEventListener('pageshow', function(event) {
    // This fires when page is loaded from back/forward cache
    if (event.persisted) {
        console.log('Back/Forward navigation detected - fixing navbar visibility');
        
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.nav-link');
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        // CRITICAL: Force complete style reset and repaint
        if (header) {
            // Force visibility styles
            header.style.cssText = `
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: fixed !important;
                top: 0 !important;
                width: 100% !important;
                z-index: 1000 !important;
            `;
        }
        
        // Force nav links to be visible
        navLinks.forEach(link => {
            link.style.cssText = `
                color: var(--primary-nav-color) !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: block !important;
            `;
        });
        
        // Ensure mobile menu is closed
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
        
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
        }
        
        // Add a class to body for CSS targeting
        document.body.classList.add('pageshow');
        
        // Remove the class after a short delay
        setTimeout(() => {
            document.body.classList.remove('pageshow');
        }, 100);
    }
});

// Additional safety: Also fix visibility on regular page load
window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (header) {
        header.style.visibility = 'visible';
        header.style.opacity = '1';
    }
    
    navLinks.forEach(link => {
        link.style.visibility = 'visible';
        link.style.opacity = '1';
    });
});

// Fix for Safari specifically (known back/forward cache issues)
if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    window.addEventListener('beforeunload', function() {
        // Force styles to be reapplied when returning to page
        const header = document.querySelector('.header');
        if (header) {
            header.style.visibility = 'visible';
        }
    });
}

// Listen for pageshow event (triggers on back/forward navigation)
window.addEventListener('pageshow', function(event) {
    // This fires when page is loaded from back/forward cache
    if (event.persisted) {
        console.log('Back/Forward navigation detected - fixing all styles');
        
        const header = document.querySelector('.header');
        const navLinks = document.querySelectorAll('.nav-link');
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        // CRITICAL: Force complete style reset and repaint
        if (header) {
            header.style.cssText = `
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: fixed !important;
                top: 0 !important;
                width: 100% !important;
                z-index: 1000 !important;
            `;
        }
        
        // Force nav links to be visible with proper hover states
        navLinks.forEach(link => {
            link.style.cssText = `
                color: var(--primary-nav-color) !important;
                visibility: visible !important;
                opacity: 1 !important;
                display: block !important;
                text-decoration: none !important;
            `;
            
            // Re-apply hover event listeners
            link.onmouseenter = function() {
                this.style.color = 'var(--active-nav-color) !important';
            };
            link.onmouseleave = function() {
                this.style.color = 'var(--primary-nav-color) !important';
            };
        });
        
        // CRITICAL: Ensure mobile menu is properly closed and styled
        if (navMenu) {
            navMenu.classList.remove('active');
            navMenu.style.background = 'transparent !important';
            navMenu.style.backdropFilter = 'none !important';
        }
        
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
        }
        
        // Add a class to body for CSS targeting
        document.body.classList.add('pageshow');
        
        // Remove the class after styles are reapplied
        setTimeout(() => {
            document.body.classList.remove('pageshow');
        }, 500); // Increased timeout for better styling application
    }
});

// Add this CSS to ensure navbar never hides and improve performance
const navbarFixStyles = `
    .header {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: fixed !important;
        top: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        transform: translateZ(0); /* Hardware acceleration */
    }
    
    /* Force navbar text to always be visible */
    .nav-link {
        color: var(--primary-nav-color) !important;
        visibility: visible !important;
        opacity: 1 !important;
        text-decoration: none !important; /* Remove underline from links */
    }
    
    /* Ensure the entire header content is always visible */
    .header * {
        visibility: visible !important;
        opacity: 1 !important;
    }
    
    /* Smooth scrolling for the whole page */
    html {
        scroll-behavior: smooth;
    }
    
    /* Performance optimizations */
    .nav-menu {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
    
    .nav-link {
        transform: translateZ(0);
    }
    
    /* CRITICAL: Force hover states to work after back/forward navigation */
    .nav-link:hover,
    .pageshow .nav-link:hover {
        color: var(--active-nav-color) !important;
        text-decoration: none !important;
    }
    
    /* Force desktop hover underline after back/forward */
    @media (min-width: 769px) {
        .nav-link {
            text-decoration: none !important;
            color: var(--primary-nav-color) !important;
            font-weight: 400 !important;
            font-size: 0.95rem !important;
            letter-spacing: 1px !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            padding: 0 0 5px 0 !important;
        }
    
        .nav-link:hover,
        .pageshow .nav-link:hover {
            color: var(--active-nav-color) !important;
            text-decoration: none !important;
        }
    
        .nav-link::after {
            content: '' !important;
            position: absolute !important;
            width: 0 !important;
            height: 1px !important;
            bottom: 0 !important;
            left: 0 !important;
            background-color: var(--active-nav-color) !important;
            transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
    
        .nav-link:hover::after,
        .pageshow .nav-link:hover::after {
            width: 100% !important;
        }
        
        /* Ensure desktop menu background stays transparent */
        .nav-menu {
            background: transparent !important;
            backdrop-filter: none !important;
        }
    }
    
    /* MOBILE MENU FIXES - Prevent flash of black background */
    @media (max-width: 768px) {
        .nav-menu {
            background: transparent !important;
            backdrop-filter: none !important;
            transition: background-color 0.3s ease !important;
        }
        
        .nav-menu.active {
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            position: fixed !important;
            top: 83px !important;
            left: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(10, 10, 10, 0.95) !important;
            padding: 40px 0 !important;
            z-index: 999 !important;
        }
        
        .nav-item {
            margin: 20px 0 !important;
            text-align: center !important;
        }
        
        .nav-link {
            color: white !important;
            font-size: 1.1rem !important;
            font-weight: 500 !important;
            letter-spacing: 1px !important;
            transition: color 0.2s ease !important;
            text-decoration: none !important;
        }
    
        .nav-link:hover,
        .pageshow .nav-link:hover {
            color: var(--brand-color) !important;
            text-decoration: none !important;
        }
        
        /* Remove underline effect in mobile */
        .nav-link::after {
            display: none !important;
        }
    }
    
    /* Hamburger menu styling - Keep your original design */
    .hamburger {
        display: none !important;
        flex-direction: column !important;
        cursor: pointer !important;
    }
    
    .bar {
        width: 25px !important;
        height: 3px !important;
        background: var(--text-light) !important;
        margin: 3px 0 !important;
        transition: 0.3s !important;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0 !important;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg) !important;
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg) !important;
    }
    
    @media (max-width: 768px) {
        .hamburger {
            display: flex !important;
        }
    }
    
    /* Animation keyframes */
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutLeft {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-30px);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            background: rgba(10, 10, 10, 0);
        }
        to {
            opacity: 1;
            background: rgba(10, 10, 10, 0.95);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            background: rgba(10, 10, 10, 0.95);
        }
        to {
            opacity: 0;
            background: rgba(10, 10, 10, 0);
        }
    }

    .nav-item {
        background: transparent !important;
    }
    
    .nav-link {
        background: transparent !important;
    }
    
    /* Force browser to repaint navbar on page show */
    @keyframes forceRepaint {
        from { opacity: 0.999; }
        to { opacity: 1; }
    }
    
    /* Apply repaint animation when page is shown from back/forward cache */
    .pageshow .header,
    .pageshow .nav-link,
    .pageshow .nav-menu {
        animation: forceRepaint 0.001s;
    }
    
    /* CRITICAL: Prevent mobile menu background flash */
    .nav-menu:not(.active) {
        background: transparent !important;
    }
`;

// Inject the styles
const style = document.createElement('style');
style.textContent = navbarFixStyles;
document.head.appendChild(style);

// ========== ADDITIONAL PERFORMANCE FIXES ==========

// Optimize hero animation performance
window.addEventListener('load', function() {
    // Add subtle parallax effect to hero (optional)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
});