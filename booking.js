import { createBooking, calculateDistance, calculateTotal } from 'backend/bookings.jsw';

document.getElementById("submitBookingButton").addEventListener("click", async function() {
    const address = document.getElementById("clientAddress").value;
    const hours = document.getElementById("lessonHours").value;

    const distance = calculateDistance(address);
    const totalFee = calculateTotal(hours, distance);
    
    document.getElementById("totalFee").innerText = `Total Fee: $${totalFee.toFixed(2)}`;
    document.getElementById("paymentButton").style.display = "block"; // Show payment button

    // Save booking
    try {
        const bookingId = await createBooking(address, hours, totalFee);
        console.log("Booking created with ID:", bookingId);
    } catch (error) {
        console.error(error);
    }
});
