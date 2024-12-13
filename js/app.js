const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


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
    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    //Cria opções em HTML
    for(let i=0; i<optionLen; i++){
        //Opção aleatória
       const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]; 
       // Obtém a posição de 'optonIndex' nas availableOptions
       const index2 = availableOptions.indexOf(optonIndex);
       //Remove o 'optonIndex' das opções disponíveis, para que a 'availableOptions' não se repita 
       availableOptions.splice(index2,1);
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optonIndex];
       option.id = optonIndex;
       option.style.animationDelay = animationDelay + 's'; 
       animationDelay = animationDelay + 0.15;
       option.className = "option";
       optionContainer.appendChild(option) 
       option.setAttribute("onclick","getResult(this)"); 
    }
    questionCounter++    
}
// Obter o resultado da pergunta na tentativa atual
function getResult(element){
    const id = parseInt(element.id);
    //Obtêm a resposta comparando o id da opção clicada
    if(id === currentQuestion.answer){
        //define a cor verde para a opção correta
        element.classList.add("correct");
        //Adiciona o indicador à marca correta
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("correct:"+correctAnswers)
    }
    else{
        //define a cor vermelha para a opção errada
        element.classList.add("wrong");
        //Adiciona o indicador à marca errada
        updateAnswerIndicator("wrong");
        //Se a resposta estiver incorreta, mostre a opção correta adicionando a cor verde à opção correta.
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct"); 
            }
        }
    }
    attempt++;
    unclickableOptions();
}
//Tornar todas as opções inclicáveis ​​​​quando o usuário selecionar uma opção (RESTRITAR O USUÁRIO A ALTERAR A OPÇÃO NOVAMENTE)
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0 ; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}
function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}
function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next(){
    if(questionCounter === quiz.length){    
        console.log("quiz over");
        quizOver();
    }
    else{
        getNewQuestion();
    }
}
function quizOver(){
   //Ocultar quizBox
   quizBox.classList.add("hide");
   //Mostrar a caixa de resultado
  resultBox.classList.remove("hide");
  quizResult();  
}
//Mostra o resultado do quiz
function quizResult(){
   resultBox.querySelector(".total-question").innerHTML = quiz.length;
   resultBox.querySelector(".total-attempt").innerHTML = attempt;  
   resultBox.querySelector(".total-correct").innerHTML = correctAnswers; 
   resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
   const percentage = (correctAnswers/quiz.length)*100; 
   resultBox.querySelector(".percentage").innerHTML =percentage.toFixed(2) + "%"; 
   resultBox.querySelector(".total-score").innerHTML =correctAnswers +" / " + quiz.length;  
}
function resetQuiz(){
   questionCounter = 0;
   correctAnswers = 0;
   attempt = 0; 
}
function tryAgainQuiz(){
    // Ocultar o resultBox
    resultBox.classList.add("hide");
    // Mostrar o quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
}
// ### PONTO DE PARTIDA ###

function startQuiz(){
   // Primeiro vai definir todas as perguntas no array availableQuestions
   setAvailableQuestions();
   // Segundo vai ligar para obter o valor da função getNewQuestion;
   getNewQuestion();
   //Para criar indicador de respostas
   answersIndicator();
}

