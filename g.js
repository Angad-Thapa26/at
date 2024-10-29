// Initialize EmailJS
(function() {
    emailjs.init("QwPYWwXX__L0Pdqt2");
})();

// Create floating hearts
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartSVG = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
    `;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSVG;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(heart);
    }
}

// Show toast notification
function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        await emailjs.send(
            'service_xiqbobk',
            'template_qw6ymki',
            {
                to_name: 'Angad Thapa',
                from_name: data.name,
                message: `
                    Age: ${data.age}
                    Address: ${data.address}
                    Contact: ${data.contact}
                    Instagram: ${data.instagram}
                    Description: ${data.description}
                `
            }
        );
        
        showToast('Application submitted! 💘', 'success');
        e.target.reset();
    } catch (error) {
        showToast('Oops! Something went wrong 💔', 'error');
        console.error('EmailJS error:', error);
    }
});

// Initialize floating hearts on page load
document.addEventListener('DOMContentLoaded', createHearts);
