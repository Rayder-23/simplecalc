#! /usr/bin/env node

// Shabang


import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Select one of the Arithmetic Operators to perfrom the operation.",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
  { message: "Enter First Number.", type: "number", name: "num1" },
  { message: "Enter Second Number.", type: "number", name: "num2" },
]);

if (answer.operator === "Addition") {
  console.log(answer.num1 + answer.num2);
}
 else if (answer.operator === "Subtraction") {
  console.log(answer.num1 - answer.num2);
}
 else if (answer.operator === "Multiplication") {
  console.log(answer.num1 * answer.num2);
}
 else if (answer.operator === "Division") {
  console.log(answer.num1 / answer.num2);
}
 else {
  console.log("Please select a valid operator.");
}
