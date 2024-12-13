const questionNumber = document.querySelector(".question-number");

const questionText = document.querySelector(".question-text");

const optionContainer = document.querySelector("option-container");

let questionContainer = 0;
let currentQuestion;
let avaliableQuestion = [  ];

//Coloca as perguntas no array availableQuestions 

function setAvailableQuestions( ){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]) 
 }
}
// Defini o número da pergunta e as opções das perguntas
function getNewQuestion(){
   // Definir o número da pergunta
   questionNumber.innerHTML = " Questão " + (questionCounter + 1) + " de " + quiz.length;
   // Definir o texto da pergunta 
   // Receber pergunta aleatória
   const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    
}
window.onload = function(){
   // Primeiro vai definir todas as perguntas no array availableQuestions
   setAvailableQuestions();
   // Segundo vai ligar para obter o valor da função getNewQuestion;
   getNewQuestion();
}

