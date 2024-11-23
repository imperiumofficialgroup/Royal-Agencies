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
