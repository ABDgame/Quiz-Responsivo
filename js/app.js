const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");

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
    }
    else{
        //define a cor vermelha para a opção errada
        element.classList.add("wrong");
        //Se a resposta estiver incorreta, mostre a opção correta adicionando a cor verde à opção correta.
        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct"); 
            }
        }
    }
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
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
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
   //Para criar indicador de respostas
   answersIndicator();
}

