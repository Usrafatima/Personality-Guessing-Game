#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("Personality Guessing Game"));
let intro = chalk.greenBright(await inquirer.prompt([
    {
        "name": "introPara",
        message: (chalk.bgBlue("Welcome to our Personality Guessing Game! In just 10 questions, uncover insights into your unique character traits.\n Let's start discovering together!")),
    }
]));
let start = await inquirer.prompt([
    {
        name: "startGame",
        type: "confirm",
        message: "Start Game",
        default: true,
    }
]);
let questions = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "Have you ever created something artistic or imaginative?",
        choices: ["Yes", "No"],
    },
    {
        name: " question2",
        type: "list",
        message: "Are you comfortable meeting new people and making connections?",
        choices: ["Yes", "No",]
    },
    {
        name: "question3",
        type: "list",
        message: "Do you often find ususual solutions to problems?",
        choices: ["Yes", "No"],
    },
    {
        name: "question4",
        type: "list",
        message: "Do you find setting specific deadlines for your goals helpful?",
        choices: ["Yes", "No"]
    },
    {
        name: "question5",
        type: "list",
        message: "Do you generally maintain a positive attitude in your life",
        choices: ["Yes", "No"],
    },
    {
        name: "question6",
        type: "list",
        message: "Have you ever found inspiration in unexpected places",
        choices: ["Yes", "No"],
    },
    {
        name: "question7",
        type: "list",
        message: "Are you excited about trying new experiences?",
        choices: ["Yes", "No"],
    },
    {
        name: "question8",
        type: "list",
        message: "Are you comfortable making decisions in a sudden situation",
        choices: ["Yes", "No"],
    },
    {
        name: "question9",
        type: "list",
        message: "Do you have a system for organizing your tasks and responsibilities",
        choices: ["Yes", "No"],
    },
    {
        name: "question10",
        type: "list",
        message: "Are you supportive towards friends or loved ones going through difficult times?",
        choices: ["Yes", "No"],
    }
]); //userscore : number = [];
function eachscore(eachquestion, totalscore) {
    let eachqscore = 0;
    if (eachquestion === "Yes") {
        eachqscore = 10;
    }
    else {
        eachqscore = 6;
    }
    totalscore += eachqscore;
    return totalscore;
}
let totalScore = 0;
totalScore = eachscore(questions.question1, totalScore);
totalScore = eachscore(questions.question2, totalScore);
totalScore = eachscore(questions.question3, totalScore);
totalScore = eachscore(questions.question4, totalScore);
totalScore = eachscore(questions.question5, totalScore);
totalScore = eachscore(questions.question6, totalScore);
totalScore = eachscore(questions.question7, totalScore);
totalScore = eachscore(questions.question8, totalScore);
totalScore = eachscore(questions.question9, totalScore);
totalScore = eachscore(questions.question10, totalScore);
console.log(chalk.bgGreen.black("Total Score:", totalScore));
if (totalScore === 76) {
    console.log(chalk.bgMagenta("Creative personality.\n") + "'A creative personality thrives on imagination and innovation, constantly seeking new ways to express ideas and solve problems through artistry and originality.'");
}
else if (totalScore === 96) {
    console.log(chalk.bgMagenta("Empathetic personality.\n") + "An empathetic personality is characterized by being perceived as a hardworking individual, dedicated to achieving your goals with persistence and diligence.");
}
else if (totalScore === 80) {
    console.log(chalk.bgMagenta("Goal-focused personality.\n") + "Driven by clear objectives, you're determined to achieve your aspirations with unwavering dedication.");
}
else if (totalScore === 64) {
    console.log(chalk.bgMagenta("Spontaneous personality.\n") + "'A spontaneous personality is one that enjoys seizing the moment, embracing new opportunities without hesitation, and infusing life with unexpected adventures.");
}
else if (totalScore === 60) {
    console.log(chalk.bgMagenta("Reserved personality.\n") + "'A person with a reserved personality is often a hard worker, preferring to quietly focus on tasks rather than seeking attention or recognition.");
}
else if (totalScore === 72) {
    console.log(chalk.bgMagenta("Goal-focused personality.\n") + "'Driven by clear objectives, you're determined to achieve your aspirations with unwavering dedication.");
}
else if (totalScore === 92) {
    console.log(chalk.bgMagenta("Adventurous personality.\n") + "'An adventurous personality thrives on seeking new experiences, taking risks, and embracing challenges with enthusiasm and excitement.");
}
else if (totalScore === 88) {
    console.log(chalk.bgMagenta("Optimistic personality.\n") + "'An optimistic personality not only sees the silver lining in every cloud but also spreads joy through their infectious laughter and unwavering belief in the power of possibility.");
}
else if (totalScore === 84) {
    console.log(chalk.bgMagenta("Empathetic personality.\n") + "'An empathetic personality is characterized by being perceived as a hardworking individual, dedicated to achieving your goals with persistence and diligence.");
}
else {
    console.log(chalk.bgMagenta("Down To Earth personality.\n") + "'Individuals with this personality type tend to find joy in simple pleasures, value authenticity and sincerity in their interactions, and have a strong connection to reality.'");
}
