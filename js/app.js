const questionNumber = document.querySelector(".question-number");

const questionText = document.querySelector(".question-text");

const optionContainer = document.querySelector("option-container");

let questionContainer = 0;
let currentQuestion;
let avaliableQuestion = [  ];

//push the questions into avaliableQuestions Array

function setAvailableQuestions( ){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]) 
 }
}
function getNewQuestion(){
    
}
window.onload = function( ){

   setAvailableQuestions( );
}

