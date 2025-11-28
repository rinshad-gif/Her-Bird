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