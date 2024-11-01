document.addEventListener("DOMContentLoaded", function() {
    const totalPayment = 100; // This should come from the booking process
    document.getElementById("totalPayment").innerText = `$${totalPayment.toFixed(2)}`;

    document.getElementById("payNowButton").addEventListener("click", function() {
        alert("Payment processed! Thank you for booking.");
        window.location.href = "index.html"; // Redirect to homepage
    });
});
