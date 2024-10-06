// Show popup on page load
window.onload = function() {
    document.getElementById("popup").style.display = "block";

    document.getElementById("no-btn").onclick = function() {
        alert("Wonderful! You are a good human.");
        showQuestion();
    };

    document.getElementById("yes-btn").onclick = function() {
        alert("Oh ho, that's a bad habit. Think of the fish; she doesn't like her home to be trashed. Don't do it again!");
        showQuestion();
    };
};

// Function to show the follow-up question and button
function showQuestion() {
    document.getElementById("popup").style.display = "none"; // Hide popup
    const questionContainer = document.getElementById("question-container");
    questionContainer.classList.remove("hidden");
    document.getElementById("follow-up").innerText = "But what is making water yellow in color, and why does it smell bad and have algae growth? Let's find out.";
    document.getElementById("lets-go-btn").classList.remove("hidden");

    // Add event listener for "Let's Go" button
    document.getElementById("lets-go-btn").onclick = function() {
        // Redirect to next question or level
        window.location.href = "level3.html"; // Change this to your next level page
    };
}
