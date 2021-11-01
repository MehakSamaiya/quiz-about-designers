var readlineSync = require('readline-sync');
var score = 0;


var userName = readlineSync.question("What's your name? ");
console.log("Howdyy " + userName + ", Welcome to the DesigNerd quiz! Let's see if you know the struggles of a designer :p ");

//function
function play(question, answer){
  //INPUT
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
  score = score + 1;
  //OUTPUT
  console.log("Right! Your score is " + score);
  }
  else{
  console.log("Wrong! Your score is " + score);
  }

}

//asking user a question
var questionOne = "All designers do is wake up and praise Figma, yes or no? ";
var answerOne = "yes";

//using function
play(questionOne, answerOne);

var questionTwo = "Are there more design mentors than design mentees, yes or no? ";
var answerTwo = "yes";
play(questionTwo,answerTwo);

var questionThree = "Can designers and developers be best friends (yet), yes or no? ";
var answerThree = "no";
play(questionThree, answerThree);

var questionFour = "Do designers know what they're doing, yes or no? ";
var answerFour = "no";
play(questionFour, answerFour);

var questionFive = "What's the most feared statement for a designer, 1. quick call? 2. make it pop? Choose 1, 2. ";
var answerFive = "1";
play(questionFive, answerFive);

var questionSix = "What is the latest hot event on Design Twitter, 1. Twitter's new typeface 2. Apple event 3. Clubhouse erotic rooms? Choose 1, 2, 3. ";
var answerSix = "2";
play(questionSix, answerSix);

var scoretable = [
  {
    name: "Shivam",
    score: 4,
  },

  {
    name: "Shivani",
    score: 5,
  }
]

console.log("Your final score is " + score);

var temp = false;

for(var i =0; i<scoretable.length; i++){
  if(score>scoretable[i].score){
    temp=true;
  }
  else if(score===scoretable[i].score){
    //console.log("Oops, seems like it's a tie!" )
    break;
  }
  else
  temp=false;
}

if (temp===true){
  console.log("OMG, YOU WIN! you do know designerds well!")
}
else{
  console.log("We consider ties and losses as equals, sorry :p you don't know designerds well.")
}
