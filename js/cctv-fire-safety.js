function filterProducts() {
    const filterType = document.getElementById("filter-type").value;
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        if (filterType === "all" || card.dataset.type === filterType) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}



 // Get all the "Read More" buttons
 const readMoreButtons = document.querySelectorAll('.read-more-button');
 const closeButtons = document.querySelectorAll('.close');

 // Open modal on button click
 readMoreButtons.forEach(button => {
     button.addEventListener('click', () => {
         const modalId = button.getAttribute('data-modal');
         const modal = document.getElementById(modalId);
         modal.style.display = 'block';
     });
 });

 // Close modal on close button click
 closeButtons.forEach(button => {
     button.addEventListener('click', () => {
         const modalId = button.getAttribute('data-modal');
         const modal = document.getElementById(modalId);
         modal.style.display = 'none';
     });
 });

 // Close modal when clicking outside the content
 window.onclick = (event) => {
     if (event.target.classList.contains('modal')) {
         event.target.style.display = 'none';
     }
 };