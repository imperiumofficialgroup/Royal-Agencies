function filterPolicies() {
    const policyType = document.getElementById('policy-type').value;
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        if (policyType === 'all' || card.getAttribute('data-type') === policyType) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
let currentSlideIndex = 0;
let autoSlideTimeout;

const slides = document.querySelectorAll('#slideshow .slide');
const slideSelect = document.getElementById('slide-select');

// Show a specific slide based on the index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    slideSelect.value = index;
    currentSlideIndex = index;
}

// Move to the next or previous slide
function changeSlide(step) {
    let newIndex = currentSlideIndex + step;
    if (newIndex >= slides.length) newIndex = 0;
    else if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
    resetAutoSlide();
}

// Handle dropdown selection
function selectSlide() {
    const selectedIndex = parseInt(slideSelect.value, 10);
    showSlide(selectedIndex);
    resetAutoSlide();
}

// Automatically switch to the next slide every 5 seconds
function autoSlide() {
    autoSlideTimeout = setTimeout(() => {
        changeSlide(1);
        autoSlide();
    }, 5000);
}

// Reset auto-slide after manual interaction
function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(autoSlide, 5000);
}

// Start the slideshow on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    autoSlide();
});
