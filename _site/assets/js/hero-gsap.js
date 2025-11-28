document.addEventListener('DOMContentLoaded', () => {
    
    // Ensure GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error("GSAP library not loaded!");
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) {
        console.warn("GSAP aborted: .hero-content wrapper not found.");
        return;
    }

    const elementsToAnimate = heroContent.querySelectorAll(
        '.hero-subtitle, .hero-title div, .hero-description, .hero-buttons'
    );
    
    if (elementsToAnimate.length === 0) {
        console.warn("GSAP aborted: No specific text elements found for animation.");
        return;
    }

    // --- CRITICAL FIX: Wait for the 'heroLoaded' event before animating ---
    document.addEventListener('heroLoaded', () => {
        
        // 1. Ensure the parent container is visible immediately
        gsap.set(heroContent, { visibility: 'visible' });
        
        // 2. Set initial state (opacity: 0, y: 100%) for individual elements now that they are visible
        gsap.set(elementsToAnimate, { 
            y: '100%', 
            opacity: 0 
        });

        // 3. Animate to final state
        gsap.to(elementsToAnimate, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.2 // Add a small delay for a cleaner effect after the canvas fades in
        });
    });
});