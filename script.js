var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 120;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions
var questionanswers = document.getElementById("question-answers");
const MAX_QUESTIONS = 7

// var addscore = document.getElementById("addscore");
// var submitresult = document.getElementById("submitresult");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        title: '1. How to empty an array in JavaScript?',
        choices: ["arrayList[]","arrayList(0)","arrayList.length=0", "arrayList.len(0)"],
        answer : "arrayList.length=0"    
    },
    {
        title: '2. The condition in an if/else statement is enclosed within:---',
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : "parentheses"    
    },
    {
        title: '3. A very useful tool used during development and debugging for printing content to the debugger is:---',
        choices: ["JavaScript","terminal/bash","alerts", "console.log"],
        answer : "console.log"    
    },
    {
        title: '4. What will this output? var a = [1, 2, 3]; console.log(a[6]);',
        choices: ["undefined","0","Syntaxerror","prints Nothing"],
        answer : "undefined"    
    },
    {
        title: "5. Look at the following selector: $('div'). What does it select?",
        choices: ["The first div element","The last div element","All div elements", "Current div element"],
        answer : "All div elements"    
    },
    {
        title: "6. What would be the result of 3+2+'7'?",
        choices: ["327","12","15", "57"],
         answer : "57" 
     },
     {
        title: "7. How do you write 'Hello World' in an alert box?",
        choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
         answer : "alert('Hello World');"
     }

]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    
    document.getElementsByClassName("code-title")[0].style.visibility = "hidden";
    document.getElementsByClassName("col-lg-11")[0].style.visibility = "hidden";
    document.getElementsByClassName("btnstart")[0].style.visibility = "hidden";
    quizQuestions.classList.remove("d-none")
    document.getElementById("title-item").textContent = questions[0].question

    console.log("I am cool")
    nextQuestions= questions[currentindex]
    
    
        displayQuestion(nextQuestions)

    gametime()

    if(storedScores !==null) {
        allScores = storedScores;
    }
  
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Yay!! You are right"
        
    }else {
        alert.innerText="Sorry, You are Wrong"
        count = count -20
        timer.innerHTML = count
        

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    scoreadd.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    


 }