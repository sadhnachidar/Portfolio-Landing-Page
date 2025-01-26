// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (!name || !email) {
        alert('Please fill in all required fields!');
        event.preventDefault();
    }
});
