// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer (if any)
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Element for displaying feedback
    const feedback = document.getElementById('feedback');

    // Check if the user has selected an answer
    if (userAnswer) {
        // First compare the userAnswer object itself (for demonstration)
        if (userAnswer === correctAnswer) {
            // This block will never run because userAnswer is an object
            feedback.textContent = "Direct comparison with object doesn't work.";
            feedback.style.color = "blue";
        } else {
            // Now, compare the value of the selected answer with the correct answer
            if (userAnswer.value === correctAnswer) {
                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "That's incorrect. Try again!";
                feedback.style.color = "red";
            }
        }
    } else {
        // Prompt the user to select an answer if none is selected
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";
    }
}

// Add event listener to the Submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);