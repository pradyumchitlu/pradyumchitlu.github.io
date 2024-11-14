document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            }
        })
    }
    
    // Add event listener for scroll
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load for elements already in view
    handleScrollAnimation();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            if (!name || !email || !message) {
                alert('Please fill out all fields');
                return;
            }

            // In a real-world scenario, you would send this data to a backend service
            // For now, we'll just show a success message
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Typing effect for hero subtitle (optional)
    const subtitleElement = document.querySelector('.subtitle');
    if (subtitleElement) {
        const text = subtitleElement.textContent;
        subtitleElement.textContent = '';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                subtitleElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Theme switching functionality
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
        updateIcon(savedTheme === 'light');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
        updateIcon(!prefersDark);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.dataset.theme === 'light';
        const newTheme = isLight ? 'dark' : 'light';
        
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateIcon(!isLight);
    });

    // Update icon based on theme
    function updateIcon(isLight) {
        icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    }
});
