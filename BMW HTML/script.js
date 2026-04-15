document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150; // Distance from bottom before revealing

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Initial check in case elements are already in view
    revealOnScroll();

    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);
});