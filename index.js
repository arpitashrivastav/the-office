//console.log("Arpita Shrivastav")
var readlineSync = require('readline-sync')
var chalk = require('chalk');
var score=0;
var username = readlineSync.question(chalk.underline.yellow("Tell us your name")+" ")
console.log(chalk.bold.magenta.bgWhite("Welcome "+username+" Get Ready to take a quiz on Office!!"))

function play(question,answer) {
  var userAnswer = readlineSync.question(chalk.cyan(question));
  if (userAnswer===answer) {
    console.log(chalk.green.bgBlack.bold("You are right!"))
    score+=1
  } else {
    console.log(chalk.red.bgBlack.bold("You are wrong!"))
  }
  console.log(chalk.red("-----------------"))
  console.log(chalk.yellow.bgBlack("Your Score is:"+" "+score))
  console.log(chalk.red("-----------------"))
}

var questions = [
  {
    question: "What does Michael pretend to fire Pam over in season one?\na.)Stealing post-it notes\nb.)Not answering the phone\nc.)Wearing her glasses\n",
    answer: "a",
  },
  {
    question: "What's Pam's favorite flavor of yogurt?\na.)Vanilla\nb.)Strawberry\nc.)Mixed-Berry\n",
    answer:"c"
  },
  {
    question: "What does Kevin suggest Dwight put in his gun holster?\na.)A cell phone\nb.)A banana\nc.)A toy gun\n",
    answer: "b"
  },
  {
    question: "A foreign exchange student lived with Michael when he was young. What did the foreign exchange student take from Michael back to what was formerly Yugoslavia?\na. All of his jeans.\nb. All of his shorts.\nc. All of his shoes",
    answer: "a"
  },
  {
    question: "What does Michael ask Pam to spread on his foot that he burned on a George Foreman grill?\a. Butter\b. Jam\c. Sauce",
    answer: "a"
  }
]

for (var i=0;i<questions.length;i++){
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer)
}

console.log("-----------------")
console.log(chalk.yellow.bold("Your Final Score is: "+score))
console.log("-----------------")


// var username = readlineSync.question("Tell us your name")
// console.log("Welcome "+username)

// var age = readlineSync.question("Are u older than 18")
// if (age==="yes") {
//   console.log("You are right")
//   score+=1
//   console.log("Score is: "+score)
// }
// else {
//   console.log("You are wrong")
//   score-=1
//   console.log("Score is: "+score)
// }
