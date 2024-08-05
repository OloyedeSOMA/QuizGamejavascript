const quizData =[
    {
        question: " Who is  considered as the father Of Computer?",
        options:[
            
                "Jeff Bezos" ,
            
                "Charles Babbage" ,
            
                "Aliko Dangote" ,
            
                "Mr Phemmyblaze" 
            
        ],

        correctAnswer:"Charles Babbage"
    },
    {
        question: " How many Geo-political zones does Nigeria have?",

        options:[
            "Four",
            "Three",
            "Six",
            "Ten",
        ],
         correctAnswer:"Six"
    },
    {
        question: " What is the process for the breaking down of food in the body system called?",
        options:[
            "Catalysm process",
            "Digestion",
            "Dehydration",
            "Food cracking"
        ],
         correctAnswer:"Digestion"
    },
    {
        question: "The Nigeria civil war lasted for how many years?",
        options:[
            "Four years",
            "Three years",
            "Five years",
            "One year"
        ],
         correctAnswer:"Three years"
    }
    
];

let option = document.getElementById("optionContainer");
let nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;


// let questionText = document.getElementById("questionContent");
//     let currentQuestion = quizData[currentQuestionIndex].question;
//     let number = 1 + currentQuestionIndex;
//     questionText.innerHtml = number + "." + currentQuestion;
//     console.log(currentQuestion);
    
//      let currentOption = quizData[currentQuestionIndex].answers;

 function showQuestion(){
    reset();
    
     let questionText = document.getElementById("questionContent");
     let optionContainer = document.getElementById("optionContainer");
     let number = 1 + currentQuestionIndex;
     let currentQuestion = quizData[currentQuestionIndex];
     console.log(currentQuestion);
     questionText.textContent = number + ". " + currentQuestion.question;
    
    const displayOptions = function(option){
        option.forEach(function(mon,i) {
            const html = `
            <button class="options" id="options--${i+1}">${mon}</button>
            
            `;

            optionContainer.insertAdjacentHTML("afterbegin", html);
        })
    }
    displayOptions(quizData[currentQuestionIndex].options);
    
    document.querySelector("#options--1").addEventListener("click", selectAnswer);
    document.querySelector("#options--2").addEventListener("click", selectAnswer);
    document.querySelector("#options--3").addEventListener("click", selectAnswer);
    document.querySelector("#options--4").addEventListener("click", selectAnswer);
 }

    function startQuiz(){
    
     reset();
     currentQuestionIndex = 0;
     score=0;
       showQuestion();
       console.log(quizData);
       document.querySelector("#startBtn").classList.add("hidden");
   }
   
function selectAnswer(e){
    i = 0;
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.textContent == quizData[currentQuestionIndex].correctAnswer;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("wrong");
    }

    if(document.querySelector(`#options--${i+1}`).textContent == quizData[currentQuestionIndex].correctAnswer){
        document.querySelector(`#options--${i+1}`).classList.add("correct")
    }
    else if(document.querySelector(`#options--${i+2}`).textContent == quizData[currentQuestionIndex].correctAnswer){
        document.querySelector(`#options--${i+2}`).classList.add("correct")
    }
    else if(document.querySelector(`#options--${i+3}`).textContent == quizData[currentQuestionIndex].correctAnswer){
        document.querySelector(`#options--${i+3}`).classList.add("correct")
    }
    else if(document.querySelector(`#options--${i+4}`).textContent == quizData[currentQuestionIndex].correctAnswer){
        document.querySelector(`#options--${i+4}`).classList.add("correct")
    }
    document.querySelector(`#options--${i+1}`).disabled = true;
    document.querySelector(`#options--${i+2}`).disabled = true;
    document.querySelector(`#options--${i+3}`).disabled = true;
    document.querySelector(`#options--${i+4}`).disabled = true;
    document.querySelector("#nextBtn").classList.remove("hidden");
    

    // Array.from(quizData[currentQuestionIndex].options).forEach(mon =>{
    //     if(mon.textContent==quizData[currentQuestionIndex].correctAnswer){
    //         mon.classList.add("correct")''
    //     }
    //     mon.disabled = true;
    // })

}
function reset(){
    
    
    document.querySelector("#nextBtn").classList.add("hidden");
    while(optionContainer.firstChild){
        optionContainer.removeChild(optionContainer.firstChild);
    }

    
   
    
    
    
}
function showScore(){
    reset();
    let questionText = document.getElementById("questionContent");
    questionText.textContent = `You scored ${score} out of ${quizData.length}`; 
    document.querySelector("#startBtn").classList.remove("hidden")
    document.querySelector("#startBtn").innerHTML = "Go Again";
    // ${score} out of ${4}`;
}

function next(){
    if(currentQuestionIndex  <= quizData.length){
        
        currentQuestionIndex = currentQuestionIndex + 1;
        if(currentQuestionIndex  < quizData.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }else{
        startQuiz();
    }
        
        
    console.log(currentQuestionIndex);
    console.log(quizData.length);
}


