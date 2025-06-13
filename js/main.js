
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        
        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });

        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow');
                navbar.style.padding = '10px 0';
            } else {
                navbar.classList.remove('shadow');
                navbar.style.padding = '';
            }
        });

        //active navbar
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });

       // Simple animation for step numbers
        document.addEventListener('DOMContentLoaded', function() {
            const stepNumbers = document.querySelectorAll('.steps-number');
            
            stepNumbers.forEach((number, index) => {
                // Add delay for each step animation
                setTimeout(() => {
                    number.style.transform = 'scale(1)';
                    number.style.opacity = '1';
                }, 300 * index);
            });
            
            // Add scroll effect for approach cards
            const approachCards = document.querySelectorAll('.approach-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            approachCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });

         // Simple animation for timeline items
        document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            timelineItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transition = 'all 0.5s ease ' + (index * 0.2) + 's';
                
                if (item.classList.contains('left')) {
                    item.style.transform = 'translateX(-50px)';
                } else {
                    item.style.transform = 'translateX(50px)';
                }
                
                observer.observe(item);
            });
            
            // Animate icon boxes on scroll
            const iconBoxes = document.querySelectorAll('.icon-box');
            
            const iconObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            iconBoxes.forEach((box, index) => {
                box.style.opacity = '0';
                box.style.transform = 'translateY(30px)';
                box.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
                iconObserver.observe(box);
            });
        });