// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('February 14, 2025 23:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    animateNumber('days', days);
    animateNumber('hours', hours);
    animateNumber('minutes', minutes);
    animateNumber('seconds', seconds);
}

function animateNumber(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element.innerHTML !== newValue.toString()) {
        element.style.transform = 'scale(1.2)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.innerHTML = newValue;
        }, 200);
    }
}

setInterval(updateCountdown, 1000);

// RSVP Form Handling
function toggleRSVPForm() {
    const modal = document.getElementById('rsvpModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('rsvpForm');
    const confirmation = document.getElementById('confirmationMessage');
    
    form.style.display = 'none';
    confirmation.style.display = 'block';
    
    setTimeout(() => {
        toggleRSVPForm();
        form.reset();
        form.style.display = 'block';
        confirmation.style.display = 'none';
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('rsvpModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Add creator button function
function showCreator() {
    alert("Designed with ❤️ by Krishna\nContact: krishna@example.com");
}

// Add particle background
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    document.querySelector('.hero').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speed = Math.random() * 0.5 + 0.5;
        }
        
        update() {
            this.y += this.speed;
            if(this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    particles = Array(100).fill().map(() => new Particle());
    animate();
}

// Initialize when page loads
window.addEventListener('load', initParticles);

// Add starry background
function createStars() {
    const container = document.querySelector('.hero');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1.5 + 's';
        container.appendChild(star);
    }
}
window.addEventListener('load', createStars); 