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


function filterProducts() {
    const filterValue = document.getElementById("filter-type").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productType = card.getAttribute("data-type").toLowerCase();
        if (filterValue === "all" || productType === filterValue) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function searchProducts() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const productName = card.querySelector("p").textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
