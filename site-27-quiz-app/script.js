let questions = [
    {
        q: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "B"
    },
    {
        q: "Capital of India?",
        options: ["Mumbai", "Delhi", "Pune", "Goa"],
        answer: "B"
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[current].q;

    let buttons = document.querySelectorAll(".options button");

    buttons.forEach((btn, i) => {
        btn.innerText = questions[current].options[i];
    });
}

function checkAnswer(ans) {
    if (ans === questions[current].answer) {
        score++;
        document.getElementById("score").innerText = "Score: " + score;
    }
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Finished! Score: " + score);
    }
}

loadQuestion();