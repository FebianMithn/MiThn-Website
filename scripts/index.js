        // Typing animation for tagline
        document.addEventListener('DOMContentLoaded', function() {
            const tagline = document.getElementById('tagline');
            const text = "Creating Tomorrow's Solutions, Today.";
            let index = 0;
            
            function typeWriter() {
                if (index < text.length) {
                    tagline.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Start typing animation after a short delay
            setTimeout(typeWriter, 500);
            
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Header scroll effect
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Back to top button
                const backToTopButton = document.querySelector('.back-to-top');
                
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('active');
                } else {
                    backToTopButton.classList.remove('active');
                }
            });
            
            // Back to top button
            const backToTopButton = document.querySelector('.back-to-top');
            
            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Testimonials slider
            const testimonialTrack = document.querySelector('.testimonials-track');
            const testimonialDots = document.querySelectorAll('.testimonial-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
                
                // Update dots
                testimonialDots.forEach(dot => dot.classList.remove('active'));
                testimonialDots[index].classList.add('active');
                
                currentSlide = index;
            }
            
            testimonialDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Auto-advance testimonials
            setInterval(() => {
                let nextSlide = currentSlide + 1;
                if (nextSlide >= testimonialDots.length) {
                    nextSlide = 0;
                }
                showSlide(nextSlide);
            }, 5000);
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            const loadingSpinner = document.querySelector('.loading');
            const formMessage = document.querySelector('.form-message');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                loadingSpinner.classList.add('spinning');
                
                // Simulate form submission
                setTimeout(() => {
                    loadingSpinner.classList.remove('spinning');
                    
                    // Show success message
                    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                    formMessage.classList.remove('error');
                    formMessage.classList.add('success');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.classList.remove('success');
                    }, 5000);
                }, 1500);
            });
            
            // Fade in animation on scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = () => {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Check on load and scroll
            window.addEventListener('load', fadeInOnScroll);
            window.addEventListener('scroll', fadeInOnScroll);
        });