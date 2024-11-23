function openModal(policyId) {
    document.getElementById(policyId + '-modal').style.display = 'block';
}

function closeModal(policyId) {
    document.getElementById(policyId + '-modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
