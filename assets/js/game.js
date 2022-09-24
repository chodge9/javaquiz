var startBtn= document.getElementById("start-btn")
var questions= [
    {
        text: "Question 1",
        choices: ["a", "b", "c", "d"], 
        correct: "a"
    },
    {
        text: "Question 2",
        choices: ["a", "b", "c", "d"], 
        correct: "a"
    },
    {
        text: "Question 3",
        choices: ["a", "b", "c", "d"], 
        correct: "a"
    },
    {
        text: "Question 4",
        choices: ["a", "b", "c", "d"], 
        correct: "a"
    },
    {
        text: "Question 5",
        choices: ["a", "b", "c", "d"], 
        correct: "a"
    },
]
function startGame(){
    //hide start div
    document.getElementById("start-screen").setAttribute("class", "hide")
    //show quiz div
    document.getElementById("quiz-screen").classList.remove("hide")
    //start timer
    //call built question card
    buildQuestionCard()
}

function buildQuestionCard(){
    //change h2 to dislay first question
    document.querySelector(".text").textContent= questions[0].text;
    //loop over possible answers and create buttons
    questions[0].choices.forEach(function(choice){
        var btn= document.createElement("button")
        btn.textContent= choice;
        btn.setAttribute("value",choice)
        btn.onclick= function(){
            console.log(this.value)
        }

        document.querySelector(".choices").append(btn)
    })
    //give button an on click
    //check to see if correct
    //call built question card (*n)
}

function endGame(){
    //capture score
    //capture time left
    //calculate score
    //get users intitials
    //save to local storage
}

function displayScores(){
    //get scores from local storage 
    //parse to an array
    //apply a .sort method
    //loop over array
    //create an li for each score
}






startBtn.addEventListener("click",function(){
    //run start game function
    startGame()
})
