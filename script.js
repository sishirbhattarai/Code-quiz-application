var questions = [{
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    correctAnswer: 3
}, {
    question: "2. How to empty an array in JavaScript?",
    choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
    correctAnswer: 2
}, {
    question: "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}, {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0
}, {
    question: "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0
},{
	question: "6. Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
},{
	question: "7. What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3
},{
	question: "8. Look at the following selector: $('div'). What does it select?",
    choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
},{
	question: "9. How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
},{
	question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];

var questionAnswers = $("#question-answers")
questions[0].choices.forEach(function(choice){
    var buttonEl = $("<button>"+choice+"</button>")
    buttonEl.on("click",function(){
        console.log($(this).text())
        var correctAnswer = questions[0].correctAnswer
        if(questions[0].choices[correctAnswer]=== $(this).text()){
        console.log("correct")
        }

        else{
            console.log("Incorrect")
        }
    })
    questionAnswers.append(buttonEl)
})

/*
1. start
- make sure end screen and game screen is hidden
- add event listner to start button
  -Needs to hide start screen and show the gamescreen.
  - Start timer and show current question
  - If there is no time left, the timer should stop and you should end the game.
2. game screen
- Show current question and answer
  - Each answer when clicked should check if correct answer was selected.
  - If incorrect decrease the time remaining.
  - If correct increase score. 
  - Show next question.
    - If there are no more questions, end the game.
  
3. end screen 
 - Hide all other screen and show end screen 
 - Add event listner to initial submit button. SO, when clicked saves the user initials and scores to local storage
 - redirect users to high score page.
 

4. High Scores
- retrive the list of high scores from local storage and show them on screen.
- have a link to go back to main page



*/
