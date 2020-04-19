var beginQuiz = document.querySelector("#begin");
var question_Val = document.querySelector("#questionVal");
var choice_A = document.querySelector("#choiceA");
var choice_B = document.querySelector("#choiceB");
var choice_C = document.querySelector("#choiceC");
var choice_D = document.querySelector("#choiceD");
var correctCheck = document.querySelector("#correct_incorrect");
var timerKeep = document.querySelector("#timer")

beginQuiz.addEventListener("click", makeQuestion);

var questions = [
    {question : "What is not one of the languages of web development?",
    choices  : ["HTML", "CSS", "Javascript", "JQuery"], 
    answer  : "D",
    },
    {question : "What does 'this' refer to in a function within an object?",
    choices  : ["The DOM", "The Window", "The function", "The parent element"], 
    answer  : "B",
    },  
    {question : "How do we get an ID in the html?",
    choices  : ["select", "querySelector", "selectQuery", "query"], 
    answer  : "B",
    }, 
    {question : "What color do functions appear in VS code?",
    choices  : ["Yellow", "Blue", "Red", "Green"], 
    answer  : "A",
    },   
    {question : "How do we increase a number variable by 1?",
    choices  : ["the function", "the DOM", "++", "the parent element"], 
    answer  : "C",
    }, 
    {question : "What is querySelector replaced with in jQuery?",
    choices : ["$", "addEvenetListener", "append", "if"],
    answer: "A",
    },   
    {question : "What is the term for refering to finding something within another element?",
    choices : ["control f", "scope", "search?", "find.element"],
    answer: "B",
    },
    {question : "What is the function click events use?",
    choices : ["$", "attr", "addEventListener", "append"],
    answer: "C",
    },
    {question : "How do we leave an open function?",
    choices : ["[]", "()", "===", "{}"],
    answer: "B",
    },
    {question : "what do we use to let a function give back something?",
    choices : ["return", "../", "release", "react"],
    answer: "A",
    },
];

var question_Index = 0;
var score = 0;

function makeQuestion () {
    count = 10;
    timer();
    question_Val.textContent = questions[question_Index].question;
    choice_A.textContent = questions[question_Index].choices[0];
    choice_B.textContent = questions[question_Index].choices[1];
    choice_C.textContent = questions[question_Index].choices[2];
    choice_D.textContent = questions[question_Index].choices[3];
};

choice_A.addEventListener("click", checkAnswerA);
choice_B.addEventListener("click", checkAnswerB);
choice_C.addEventListener("click", checkAnswerC);
choice_D.addEventListener("click", checkAnswerD);

function checkAnswerA() {
    if (questions[question_Index].answer === "A") {
        correctCheck.textContent = "Correct";
        score++;
    } else {
        correctCheck.textContent = "Incorrect";
        count = count - 2;
    };
    setTimeout(nextQuestion, 2000);
};

function checkAnswerB() {
    if (questions[question_Index].answer === "B") {
        correctCheck.textContent = "Correct";
        score++;
    } else {
        correctCheck.textContent = "Incorrect";
        count = count - 2;

    };
    setTimeout(nextQuestion, 2000);
};

function checkAnswerC() {
    if (questions[question_Index].answer === "C") {
        correctCheck.textContent = "Correct";
        score++;
    } else {
        correctCheck.textContent = "Incorrect";
    };
    setTimeout(nextQuestion, 2000);
};

function checkAnswerD() {
    if (questions[question_Index].answer === "D") {
        correctCheck.textContent = "Correct";
        score++;
    } else {
        correctCheck.textContent = "Incorrect";
    };
    setTimeout(nextQuestion, 2000);
};

function nextQuestion () {
    question_Index++;
    makeQuestion();
};


var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
  count=count-1;
  if (count <= 0)
  {
    clearInterval(counter);
    question_Index++;
    makeQuestion();
  } else if (count === 0) {
      alert("you lose");
  };
  
  document.querySelector("#timer").innerHTML=count; // watch for spelling

  //Do code for showing the number of seconds here
};
