// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 212, 255, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Parallax effect on scroll
const parallaxElements = document.querySelectorAll('.animated-bg');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
        const scrollPosition = window.pageYOffset;
        el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// Mouse follow effect on hero
const heroSection = document.querySelector('.hero');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        const gradientOrbs = document.querySelectorAll('.gradient-orb');
        gradientOrbs.forEach(orb => {
            orb.style.transform = `translate(${mouseX * 100}px, ${mouseY * 100}px)`;
        });
    }
});

// Animated counter for stats
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        element.textContent = Math.floor(current) + (target === Infinity ? '∞' : '');
    }, 16);
};

// Trigger counter animation
const statCards = document.querySelectorAll('.stat-card');
const statsSection = document.querySelector('.stats-grid');

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(num => {
                    const text = num.textContent;
                    if (text.includes('+')) {
                        animateCounter(num, parseInt(text));
                    }
                });
            }
        });
    }, observerOptions);

    statCards.forEach(card => statsObserver.observe(card));
}

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Button ripple effect
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .social-btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
    });
});

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 212, 255, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(15, 15, 30, 0.6)';
    });
});

// Skill card tilt effect
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Scroll progress indicator
const createProgressBar = () => {
    const progress = document.createElement('div');
    progress.style.position = 'fixed';
    progress.style.top = '0';
    progress.style.left = '0';
    progress.style.height = '3px';
    progress.style.background = '#d4af37';
    progress.style.zIndex = '999';
    progress.style.transition = 'width 0.2s ease';
    progress.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.6)';
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progress.style.width = scrollPercentage + '%';
    });
};

createProgressBar();

// Text animation on load
window.addEventListener('load', () => {
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        word.style.animation = `slideUp 0.8s ease-out ${0.2 + index * 0.1}s both`;
    });
});

// Cursor effect (optional luxury feature)
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
    }

    .cursor-dot {
        width: 8px;
        height: 8px;
        background: #d4af37;
        border-radius: 50%;
        position: absolute;
        left: -4px;
        top: -4px;
        box-shadow: 0 0 10px #d4af37;
    }

    .cursor-outline {
        width: 30px;
        height: 30px;
        border: 2px solid #d4af37;
        border-radius: 50%;
        position: absolute;
        left: -15px;
        top: -15px;
        opacity: 0.5;
    }
`;
document.head.appendChild(cursorStyle);

// Enhanced animations on scroll
const addScrollAnimations = () => {
    const elements = document.querySelectorAll('[class*="section"]');

    elements.forEach(el => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideUp 0.8s ease-out';
                }
            });
        }, { threshold: 0.1 });

        observer.observe(el);
    });
};

addScrollAnimations();

// Prevent animation on first load for smooth experience
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

console.log('%c>>> ASJAD\'S RETRO PORTFOLIO <<<', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%c[ WELCOME TO THE PIXEL REALM ]', 'color: #ffff00; font-size: 14px; font-style: italic;');
