#!/usr/bin/evo node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed a right  number.");
}
else {
    console.log("you guessed wrong number");
}
