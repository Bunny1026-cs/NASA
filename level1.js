// Define your questions and correct answers
const questions = [
    {
        question: "Which one looks clear like water in a glass?",
        images: ["cleanpond.jpg", "pollutedpond.jpg"], // paths to images
        correct: 0 // Index of the correct image
    },
    {
        question: "Which is more clean?",
        images: ["pollutedpond.jpg", "cleanpond.jpg"], // paths to images
        correct: 1 // Index of the correct image
    },
    {
        question: "Which has waste or trash floating in it?",
        images: ["pollutedpond.jpg", "cleanpond.jpg"], // Adjust paths accordingly
        correct: 0 // Assuming polluted pond has waste
    },
    {
        question: "Which one has no green algae or foam on its surface?",
        images: ["cleanpond.jpg", "pollutedpond.jpg"], // Adjust paths accordingly
        correct: 0 // Assuming water flows like water
    }
];
let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Set();
let currentQuestionAnswered = false;
// Get DOM elements
const questionText = document.getElementById("question");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const nextLevelBtn = document.getElementById("next-level-btn");
const scoreDisplay = document.getElementById("score");
const badge = document.getElementById("badge");
// Load the first question
loadQuestion();
// Function to load a question
function loadQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    image1.src = questions[currentQuestion].images[0];
    image2.src = questions[currentQuestion].images[1];
    feedback.textContent = ""; // Clear feedback
    nextBtn.style.display = "none"; // Hide next button
    currentQuestionAnswered = false;
}
// Add click event listeners for the images
image1.addEventListener("click", () => checkAnswer(0));
image2.addEventListener("click", () => checkAnswer(1));
// Function to check the answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        if (!answeredQuestions.has(currentQuestion)) {
            score += 10; // Increment score for a correct answer
            answeredQuestions.add(currentQuestion); // Mark question as answered
        }
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        scoreDisplay.textContent = `Score: ${score}`;
        nextBtn.style.display = "block"; // Show next button
        currentQuestionAnswered = true;
    } else {
        feedback.textContent = "Oops! Wrong answer - Try again!";
        feedback.style.color = "red";
        nextBtn.style.display = "none";
    }
}
// Event listener for the "Next" button
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(); // Load the next question
    } else {
        questionText.textContent = "Quiz complete! Well done!";
        image1.style.display = "none"; // Hide images
        image2.style.display = "none";
        feedback.textContent = `Your score: ${score} points!`;
        nextBtn.style.display = "none"; // Hide next button
        const summary = document.createElement("p");
        summary.innerHTML = `
            <b>KEY OBSERVATIONS</b><br><br>
            1. Doesn't look like clear water<br>
            2. Is not clean<br>
            3. Has waste product<br>
            4. Has algae on the surface<br><br>
            <strong>Hurrah! You completed one level!</strong>
        `;
        document.querySelector(".quiz-container").appendChild(summary);
        nextLevelBtn.style.display = "block";
        showBadge();
    }
});
function showBadge() {
    badge.style.display = "block"; // Show badge
    badge.classList.add("celebration"); // Add celebration effect
}
nextLevelBtn.addEventListener("click", () => {
    // Reset the quiz for the next level
    currentQuestion = 0;
    score = 0; // Reset score
    answeredQuestions.clear();
    scoreDisplay.textContent = `Score: ${score}`; // Reset score display
    nextLevelBtn.style.display = "none"; // Hide the next level button
    loadQuestion(); // Load the first question of the new level
});
// Event listener for the badge click
badge.addEventListener("click", () => {
    badge.style.display = "none"; // Hide the badge when clicked
    // Optionally add any additional logic here, e.g., save the badge to user profile
});