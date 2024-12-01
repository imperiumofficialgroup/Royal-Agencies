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


// Function to filter policies by type and search keyword
function filterPolicies() {
    const policyType = document.getElementById("policy-type").value.toLowerCase();
    const searchKeyword = document.getElementById("searchKeyword").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const cardType = card.getAttribute("data-type").toLowerCase();
        const cardText = card.textContent.toLowerCase();

        // Check if card matches the selected policy type and the search keyword
        if (
            (policyType === "all" || cardType === policyType) &&
            cardText.includes(searchKeyword)
        ) {
            card.style.display = "block"; // Show card if it matches both conditions
        } else {
            card.style.display = "none"; // Hide card if it doesn't match
        }
    });
}

// Function to apply filters on keyup event in the search bar
function applyFilters() {
    filterPolicies(); // Reuse filterPolicies function for both dropdown and search bar
}
