// Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Scroll animations
        const scrollElements = document.querySelectorAll('.channel-card, .about-content');
        
        const elementInView = (el, percentageScroll = 100) => {
            const elementTop = el.getBoundingClientRect().top;
            const elementHeight = el.offsetHeight;
            
            return (
                elementTop <= 
                ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
            );
        };
        
        const displayScrollElement = (element) => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        };
        
        const hideScrollElement = (element) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
        };
        
        scrollElements.forEach((el) => {
            hideScrollElement(el);
        });
        
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 90)) {
                    displayScrollElement(el);
                }
            });
        };
        
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
        
        // Initialize animations on page load
        window.addEventListener('load', () => {
            handleScrollAnimation();
        });