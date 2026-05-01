// Multilogin Setup Expert - TikTok Farming Site JavaScript
// Core functionality for automation-focused user experience

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Lazy loading for images (already handled by loading="lazy" but adding enhancement)
    initLazyLoading();
    
    // CTA button tracking and enhancement
    initCTATracking();
    
    // FAQ accordion enhancement
    initFAQAccordion();
    
    // Mobile menu toggle (if needed in future)
    // initMobileMenu();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced lazy loading with intersection observer
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => imageObserver.observe(img));
    }
}

// CTA button click tracking and enhancement
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 200);
            
            // Track affiliate clicks (in production, integrate with analytics)
            if (this.href && this.href.includes('multilogin.com')) {
                console.log('Affiliate click tracked:', this.href);
                // In production: gtag('event', 'affiliate_click', { link: this.href });
            }
        });
    });
}

// Enhanced FAQ accordion with smooth animations
function initFAQAccordion() {
    const details = document.querySelectorAll('.faq-list details');
    
    details.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                // Close other details
                details.forEach(other => {
                    if (other !== this && other.open) {
                        other.open = false;
                    }
                });
            }
        });
    });
}

// Utility function for future mobile menu
function initMobileMenu() {
    // Placeholder for mobile menu functionality
    // Will be implemented if navigation becomes more complex
}

// Performance monitoring for automation experts
function initPerformanceTracking() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        });
    }
}

// Initialize performance tracking
initPerformanceTracking();

// Error handling for automation scripts
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production: send to error tracking service
});

// Service worker registration for PWA capabilities (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js');
    });
}