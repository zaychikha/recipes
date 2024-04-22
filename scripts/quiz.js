const correctAnswers = document.getElementsByClassName("correct");
const correctAnswersArray = Array.from(correctAnswers);
const incorrectAnswers = document.getElementsByClassName("incorrect");
const incorrectAnswersArray = Array.from(incorrectAnswers);

function colorAnswer(id, color)  {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label){
        label.style.color = color;
    }
}

for (incorrectAnswer of incorrectAnswersArray) {
    incorrectAnswer.addEventListener("click", function () {
        colorAnswer(this.id, "red")
    })
}

for (correctAnswer of correctAnswersArray) {
    correctAnswer.addEventListener("click", function () {
        colorAnswer(this.id, "green")
    })
}
