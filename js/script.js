// Tidee - Interactive JavaScript

// Global functions for booking modal
function openBookingModal() {
    const bookingModal = document.getElementById('booking-modal');
    if (bookingModal) {
        bookingModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const bookingModal = document.getElementById('booking-modal');
    if (bookingModal) {
        bookingModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Weekly Subscription Modal Functions
function openWeeklySubscriptionModal() {
    const modal = document.getElementById('weekly-subscription-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeWeeklySubscriptionModal() {
    const modal = document.getElementById('weekly-subscription-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Monthly Subscription Modal Functions
function openMonthlySubscriptionModal() {
    const modal = document.getElementById('monthly-subscription-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeMonthlySubscriptionModal() {
    const modal = document.getElementById('monthly-subscription-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Yearly Subscription Modal Functions
function openYearlySubscriptionModal() {
    const modal = document.getElementById('yearly-subscription-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeYearlySubscriptionModal() {
    const modal = document.getElementById('yearly-subscription-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Booking modal functionality
    const bookingModal = document.getElementById('booking-modal');

    // Close modal when clicking outside
    if (bookingModal) {
        bookingModal.addEventListener('click', function(event) {
            if (event.target === bookingModal) {
                closeBookingModal();
            }
        });
    }

    // Subscription Modal Event Listeners
    const weeklySubscriptionModal = document.getElementById('weekly-subscription-modal');
    const monthlySubscriptionModal = document.getElementById('monthly-subscription-modal');
    const yearlySubscriptionModal = document.getElementById('yearly-subscription-modal');

    // Close modals when clicking outside
    if (weeklySubscriptionModal) {
        weeklySubscriptionModal.addEventListener('click', function(event) {
            if (event.target === weeklySubscriptionModal) {
                closeWeeklySubscriptionModal();
            }
        });
    }

    if (monthlySubscriptionModal) {
        monthlySubscriptionModal.addEventListener('click', function(event) {
            if (event.target === monthlySubscriptionModal) {
                closeMonthlySubscriptionModal();
            }
        });
    }

    if (yearlySubscriptionModal) {
        yearlySubscriptionModal.addEventListener('click', function(event) {
            if (event.target === yearlySubscriptionModal) {
                closeYearlySubscriptionModal();
            }
        });
    }

    // Form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const mobile = formData.get('mobile');
            const address = formData.get('address');
            const pickupDate = formData.get('pickup_date');
            const pickupTime = formData.get('pickup_time');
            const serviceType = formData.get('service_type');

            // Create WhatsApp message
            const message = `*New Booking Request*%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Mobile:* ${mobile}%0A` +
                          `*Address:* ${address}%0A` +
                          `*Pickup Date:* ${pickupDate}%0A` +
                          `*Pickup Time:* ${pickupTime}%0A` +
                          `*Service Type:* ${serviceType}%0A%0A` +
                          `Please confirm this booking request.`;

            // WhatsApp URL
            const whatsappURL = `https://wa.me/919220400344?text=${message}`;

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Redirecting to WhatsApp...';
            submitBtn.disabled = true;

            // Reset button and close modal after short delay
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Reset form
                this.reset();

                // Close modal
                closeBookingModal();

                // Open WhatsApp
                window.open(whatsappURL, '_blank');
            }, 1000);
        });
    }

    // Set minimum date to today for booking modal
    const dateInput = document.querySelector('input[name="pickup_date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Weekly Subscription Form Handler
    const weeklySubscriptionForm = document.getElementById('weekly-subscription-form');
    if (weeklySubscriptionForm) {
        weeklySubscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const mobile = formData.get('mobile');
            const email = formData.get('email') || 'Not provided';
            const address = formData.get('address');
            const pickupDay = formData.get('pickup_day');

            const message = `*Weekly Subscription Request*%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Mobile:* ${mobile}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Address:* ${address}%0A` +
                          `*Pickup Day:* ${pickupDay}%0A` +
                          `*Plan:* Weekly Subscription (₹499/week)%0A` +
                          `*Payment:* ₹499 (100% Advance)%0A%0A` +
                          `Please confirm this subscription request.`;

            const whatsappURL = `https://wa.me/919220400344?text=${message}`;

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Redirecting to WhatsApp...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.reset();
                closeWeeklySubscriptionModal();
                window.open(whatsappURL, '_blank');
            }, 1000);
        });
    }

    // Monthly Subscription Form Handler
    const monthlySubscriptionForm = document.getElementById('monthly-subscription-form');
    if (monthlySubscriptionForm) {
        monthlySubscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const mobile = formData.get('mobile');
            const email = formData.get('email') || 'Not provided';
            const address = formData.get('address');
            const startDate = formData.get('start_date');
            const pickupFrequency = formData.get('pickup_frequency');

            const message = `*Monthly Subscription Request*%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Mobile:* ${mobile}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Address:* ${address}%0A` +
                          `*Start Date:* ${startDate}%0A` +
                          `*Pickup Frequency:* ${pickupFrequency}%0A` +
                          `*Plan:* Monthly Subscription (₹1,799/month)%0A` +
                          `*Payment:* ₹899.50 (50% Advance)%0A%0A` +
                          `Please confirm this subscription request.`;

            const whatsappURL = `https://wa.me/919220400344?text=${message}`;

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Redirecting to WhatsApp...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.reset();
                closeMonthlySubscriptionModal();
                window.open(whatsappURL, '_blank');
            }, 1000);
        });
    }

    // Yearly Subscription Form Handler
    const yearlySubscriptionForm = document.getElementById('yearly-subscription-form');
    if (yearlySubscriptionForm) {
        yearlySubscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            const mobile = formData.get('mobile');
            const email = formData.get('email');
            const address = formData.get('address');
            const startDate = formData.get('start_date');
            const pickupFrequency = formData.get('pickup_frequency');
            const company = formData.get('company') || 'Not provided';

            const message = `*Yearly Subscription Request*%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Mobile:* ${mobile}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Address:* ${address}%0A` +
                          `*Start Date:* ${startDate}%0A` +
                          `*Pickup Frequency:* ${pickupFrequency}%0A` +
                          `*Company:* ${company}%0A` +
                          `*Plan:* Yearly Subscription (₹18,999/year - Save 20%)%0A` +
                          `*Payment:* ₹9,499.50 (50% Advance)%0A%0A` +
                          `Please confirm this subscription request.`;

            const whatsappURL = `https://wa.me/919220400344?text=${message}`;

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Redirecting to WhatsApp...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.reset();
                closeYearlySubscriptionModal();
                window.open(whatsappURL, '_blank');
            }, 1000);
        });
    }

    // Set minimum dates for subscription forms
    const subscriptionDateInputs = document.querySelectorAll('input[name="start_date"]');
    subscriptionDateInputs.forEach(input => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        input.setAttribute('min', tomorrow.toISOString().split('T')[0]);
    });


    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#booking' && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Active navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('href') === `${sectionId}.html`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Testimonial slider functionality (basic implementation)
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;

    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));

        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
    }

    if (testimonialDots.length > 0) {
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Pricing toggle functionality
    const pricingToggle = document.querySelector('.pricing-toggle');
    const regularPrices = document.querySelectorAll('.regular-price');
    const subscriptionPrices = document.querySelectorAll('.subscription-price');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                regularPrices.forEach(price => price.style.display = 'none');
                subscriptionPrices.forEach(price => price.style.display = 'block');
            } else {
                regularPrices.forEach(price => price.style.display = 'block');
                subscriptionPrices.forEach(price => price.style.display = 'none');
            }
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Contact form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Basic validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('border-red-500');
                    isValid = false;
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                // Simulate form submission
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // WhatsApp integration
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track WhatsApp clicks for analytics
            console.log('WhatsApp contact initiated');
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            if (email) {
                alert('Thank you for subscribing! You will receive updates about our services.');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Search functionality (for services page)
    const searchInput = document.querySelector('.service-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const serviceItems = document.querySelectorAll('.service-item');

            serviceItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Accessibility improvements
    // Add focus trap for modal
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        function handleTabKey(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }

        element.addEventListener('keydown', handleTabKey);

        return function() {
            element.removeEventListener('keydown', handleTabKey);
        };
    }

    // Apply focus trap when modal opens
    if (bookingModal) {
        let removeTrap;
        bookingModal.addEventListener('shown', function() {
            removeTrap = trapFocus(bookingModal);
        });

        bookingModal.addEventListener('hidden', function() {
            if (removeTrap) removeTrap();
        });
    }

    // Keyboard navigation for mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Initialize animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .pricing-card');
    animateElements.forEach(el => observer.observe(el));

    // Add interactive button effects
    const buttons = document.querySelectorAll('button, a[href^="tel:"]');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
    });

    // Auto-popup booking modal after 5 seconds
    const hasSeenPopup = localStorage.getItem('bookingPopupShown');

    if (!hasSeenPopup) {
        setTimeout(() => {
            // Check if user is still on the page and modal exists
            const bookingModal = document.getElementById('booking-modal');
            if (bookingModal && document.visibilityState === 'visible') {
                openBookingModal();
                localStorage.setItem('bookingPopupShown', 'true');
            }
        }, 5000); // 5000ms = 5 seconds
    }

    // Function to reset popup flag (for testing purposes - can be called from console)
    window.resetBookingPopup = function() {
        localStorage.removeItem('bookingPopupShown');
        console.log('Booking popup flag reset. Refresh page to test popup again.');
    };

    console.log('Tidee website initialized successfully!');
});