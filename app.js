'use strict';

var userName;
var questions = [
    'Do I have children?',
    'Was I in the Navy?',
    'Am I from New York?',
    'Do I have any pets?',
    'Do I like pineapple on pizza?'
];
var answers = ['y', 'n', 'y', 'y', 'y']; 
var userAnswers = [];
var correct = 0;
var index = 0;

// Get elements by id
var startButton = document.getElementById('start');
var quizDiv = document.getElementById('quiz');
var questionP = document.getElementById('question');
var answerInput = document.getElementById('answer');
var submitButton = document.getElementById('submit');
var resultDiv = document.getElementById('result');
var scoreP = document.getElementById('score');
var feedbackP = document.getElementById('feedback');
var restartButton = document.getElementById('restart');

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    userName = prompt('What is your name?');
    alert('Hello, ' + userName + '. Welcome to my webpage.');
    startButton.style.display = 'none';
    quizDiv.style.display = 'block';
    questionP.textContent = questions[index];
}

function submitAnswer() {
    var userAnswer = answerInput.value.toLowerCase();
    
    if (index < questions.length) {
        if (userAnswer === 'y' || userAnswer === 'n' || userAnswer === 'yes' || userAnswer === 'no') {
            if (userAnswer.charAt(0) === answers[index]) {
                correct++;
                alert('You are correct!');
            } else {
                alert('Sorry, that is incorrect. The correct answer is ' + answers[index] + '.');
            }
            
            index++;
            answerInput.value = '';

            if (index < questions.length) {
                questionP.textContent = questions[index];
            } else {
                quizDiv.style.display = 'none';
                guessNumberQuestion();
            }
        } else {
            alert('Please enter y/n or yes/no.');
        }
    }
}

function guessNumberQuestion() {
    var correctNumber = 42; // Example number
    for (var i = 0; i < 4; i++) {
        var userGuess = parseInt(prompt('Guess my favorite number (between 1 and 100)'));
        if (userGuess === correctNumber) {
            alert('Correct!');
            correct++;
            break;
        } else if (userGuess < correctNumber) {
            alert('Too low!');
        } else {
            alert('Too high!');
        }
    }
    alert('The correct answer was ' + correctNumber);
    multipleAnswersQuestion();
}

function multipleAnswersQuestion() {
    var possibleAnswers = ['pizza', 'sushi', 'tacos','wings','goat','Biryani','Mango','Candy','Calamari','Cheese','Pasteries']; // Example answers
    var guessCorrect = false;

    for (var j = 0; j < 6; j++) {
        var userAnswer = prompt('What are my favorite foods?').toLowerCase();
        if (possibleAnswers.includes(userAnswer)) {
            alert('Correct!');
            guessCorrect = true;
            correct++;
            break;
        } else {
            alert('Try again!');
        }
    }

    if (!guessCorrect) {
        alert('Possible answers were: ' + possibleAnswers.join(', '));
    }
    showFinalScore();
}

function showFinalScore() {
    alert('Your final score is ' + correct + ' out of 7.');
}


function restartQuiz() {
    userName = '';
    userAnswers = [];
    correct = 0;
    index = 0;
    answerInput.value = '';
    scoreP.textContent = '';
    feedbackP.textContent = '';
    resultDiv.style.display = 'none';
    startButton.style.display = 'block';
}
