// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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

// Gallery category filtering
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Form handling
const enquiryForm = document.getElementById('enquiryForm');

enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.experience || !data.arrival || !data.guests) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        showNotification('Please enter a valid phone number.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Sending your enquiry...', 'info');
    
    // Simulate API call delay
    setTimeout(() => {
        // Store in localStorage (as requested for browser storage)
        const enquiries = JSON.parse(localStorage.getItem('cottageKalgaEnquiries') || '[]');
        const enquiry = {
            ...data,
            id: Date.now(),
            timestamp: new Date().toISOString(),
            status: 'pending'
        };
        enquiries.push(enquiry);
        localStorage.setItem('cottageKalgaEnquiries', JSON.stringify(enquiries));
        
        showNotification('Thank you! Your enquiry has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
        enquiryForm.reset();
        
        // Reset floating labels
        resetFloatingLabels();
    }, 2000);
});

// Floating label functionality
document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
    input.addEventListener('focus', function() {
        const label = this.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.top = '-0.5rem';
            label.style.left = '0.8rem';
            label.style.fontSize = '0.8rem';
            label.style.color = '#2d5a27';
            label.style.fontWeight = '600';
        }
    });
    
    input.addEventListener('blur', function() {
        const label = this.nextElementSibling;
        if (label && label.tagName === 'LABEL' && !this.value) {
            label.style.top = '1rem';
            label.style.left = '1rem';
            label.style.fontSize = '1rem';
            label.style.color = '#7f8c8d';
            label.style.fontWeight = '400';
        }
    });
});

// Reset floating labels
function resetFloatingLabels() {
    document.querySelectorAll('.form-group label').forEach(label => {
        label.style.top = '1rem';
        label.style.left = '1rem';
        label.style.fontSize = '1rem';
        label.style.color = '#7f8c8d';
        label.style.fontWeight = '400';
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#28a745';
        case 'error': return '#dc3545';
        case 'warning': return '#ffc107';
        default: return '#17a2b8';
    }
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
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
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .experience-card, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const mountains = document.querySelectorAll('.mountain');
    const clouds = document.querySelectorAll('.cloud');
    
    if (hero) {
        mountains.forEach((mountain, index) => {
            const speed = 0.5 + (index * 0.1);
            mountain.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        clouds.forEach((cloud, index) => {
            const speed = 0.3 + (index * 0.1);
            cloud.style.transform = `translateX(${scrolled * speed}px)`;
        });
    }
});

// Gallery lightbox effect (simple version)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const overlay = item.querySelector('.gallery-overlay');
        const image = item.querySelector('.gallery-image');
        const title = overlay.querySelector('h4').textContent;
        const description = overlay.querySelector('p').textContent;
        const imageSrc = image.src;
        
        showLightbox(title, description, imageSrc);
    });
});

function showLightbox(title, description, imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <div class="lightbox-header">
                <h3>${title}</h3>
                <button class="lightbox-close">&times;</button>
            </div>
            <img src="${imageSrc}" alt="${title}" class="lightbox-image">
            <p>${description}</p>
        </div>
    `;
    
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(lightbox);
    
    // Close functionality
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            lightbox.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => lightbox.remove(), 300);
        }
    });
    
    // Add lightbox animations
    const lightboxStyle = document.createElement('style');
    lightboxStyle.textContent = `
        .lightbox-content {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 600px;
            text-align: center;
        }
        
        .lightbox-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .lightbox-close {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
        }
        
        .lightbox-image {
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(lightboxStyle);
}

// Initialize floating labels on page load
document.addEventListener('DOMContentLoaded', () => {
    resetFloatingLabels();
});

// Add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to experience cards
    document.querySelectorAll('.experience-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// Video section functionality
document.addEventListener('DOMContentLoaded', () => {
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoPlayer = document.querySelector('.hero-video-player');
    const playButton = document.querySelector('.video-play-button');

    if (videoWrapper && videoPlayer && playButton) {
        // Hide play button when video starts playing
        videoPlayer.addEventListener('play', () => {
            playButton.style.display = 'none';
        });

        // Show play button when video pauses
        videoPlayer.addEventListener('pause', () => {
            playButton.style.display = 'flex';
        });

        // Click play button to play video
        playButton.addEventListener('click', () => {
            videoPlayer.play();
        });

        // Add hover effect for video wrapper
        videoWrapper.addEventListener('mouseenter', () => {
            playButton.style.opacity = '1';
        });

        videoWrapper.addEventListener('mouseleave', () => {
            if (videoPlayer.paused) {
                playButton.style.opacity = '1';
            } else {
                playButton.style.opacity = '0';
            }
        });
    }
});

// Nature Sound Control
document.addEventListener('DOMContentLoaded', function() {
    const natureSound = document.getElementById('nature-sound');
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = soundToggle.querySelector('i');
    
    let isSoundPlaying = false;
    
    // Function to play nature sounds
    function playNatureSounds() {
        try {
            natureSound.volume = 0.3; // Set volume to 30%
            natureSound.play();
            isSoundPlaying = true;
            soundToggle.classList.remove('muted');
            soundIcon.className = 'fas fa-volume-up';
        } catch (error) {
            console.log('Audio playback failed:', error);
        }
    }
    
    // Function to pause nature sounds
    function pauseNatureSounds() {
        natureSound.pause();
        isSoundPlaying = false;
        soundToggle.classList.add('muted');
        soundIcon.className = 'fas fa-volume-mute';
    }
    
    // Toggle sound on button click
    soundToggle.addEventListener('click', function() {
        if (isSoundPlaying) {
            pauseNatureSounds();
        } else {
            playNatureSounds();
        }
    });
    
    // Auto-play nature sounds when video starts (optional)
    const video = document.querySelector('.hero-bg-video');
    if (video) {
        video.addEventListener('play', function() {
            // Small delay to ensure video is playing
            setTimeout(() => {
                if (!isSoundPlaying) {
                    playNatureSounds();
                }
            }, 1000);
        });
    }
    
    // Pause sounds when page becomes hidden (mobile optimization)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && isSoundPlaying) {
            pauseNatureSounds();
        }
    });
    
    // Handle audio errors gracefully
    natureSound.addEventListener('error', function() {
        console.log('Nature sound audio failed to load');
        soundToggle.style.display = 'none'; // Hide button if audio fails
    });
});
