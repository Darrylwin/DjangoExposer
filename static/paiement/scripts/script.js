let total = 0;

function updateMontantTotal() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.dataset.prix);
        }
    });

    document.getElementById('montant_total').textContent = total.toFixed(2);
}

window.addEventListener('load', updateMontantTotal);

function showPaymentMessage() {
    const messageDiv = document.getElementById('payment-message');
    messageDiv.textContent = "Le paiement a été effectué avec succès !";
    messageDiv.style.display = 'block';
}