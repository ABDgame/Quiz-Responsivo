const questionNumber = document.querySelector(".question-number");

const questionText = document.querySelector(".question-text");

const optionContainer = document.querySelector("option-container");

let questionContainer = 0;
let currentQuestion;
let avaliableQuestion = [  ];

//coloca as perguntas no array availableQuestions 

function setAvailableQuestions( ){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]) 
 }
}
//Definir o número da pergunta e as opções das perguntas
function getNewQuestion(){
   // Definir o número da pergunta
   questionNumber.innerHTML = " Questão " + (questionCounter + 1) + " de " + quiz.length;
    
    
}
window.onload = function(){
   // primeiro vai definir todas as perguntas no array availableQuestions
   setAvailableQuestions();
   // segundo vai ligar para obter o valor da função getNewQuestion;
   getNewQuestion();
}

