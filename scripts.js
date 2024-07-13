document.addEventListener('DOMContentLoaded', function () {
    // Loading Animation
    const loading = document.getElementById('loading');

    window.addEventListener('beforeunload', function () {
        loading.style.display = 'block';
    });

    // Smooth scroll animation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Filter pricing cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pricingCards = document.querySelectorAll('.pricing-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter;
            pricingCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
