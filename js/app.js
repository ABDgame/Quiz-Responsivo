const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

//Coloca as perguntas no array availableQuestions 
function setAvailableQuestions(){
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
   currentQuestion = questionIndex;
   questionText.innerHTML = currentQuestion.q;
   //Obtem a posição de 'questionIndex' no array availableQuestions
   const index1= availableQuestions.indexOf(questionIndex); 
    //remova o'questionIndex' no array availableQuestions, para que a pergunta não se repita
    availableQuestions.splice(index1,1);
    //definir opções
    //obtém o comprimento das opções
    const optionLen = currentQuestion.options.length
    //coloca as opções no array availableOptions
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    //Cria opções em HTML
    for(let i=0; i<optionLen; i++){
        //opção aleatória
       const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]; 
       // Obtém a posição de 'optonIndex' nas availableOptions
       const index2 = availableOptions.indexOf(optonIndex);
       //Remove o 'optonIndex' das opções disponíveis, para que a 'availableOptions' não se repita 
       availableOptions.splice(index2,1);
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optonIndex];
       option.id = optonIndex;
       option.className = "option";
       optionContainer.appendChild(option)   
    }
    
    questionCounter++
    
}
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
    }
    else{
        getNewQuestion();
    }
}

window.onload = function(){
   // Primeiro vai definir todas as perguntas no array availableQuestions
   setAvailableQuestions();
   // Segundo vai ligar para obter o valor da função getNewQuestion;
   getNewQuestion();
}

