import inquirer from "inquirer";
// iquirer.prompt() used
// inside () an array is placed "[]", inside which multiple variables are defined using "{}" and commas
// use "Format with" 'prettier' to format code in a more readable way

const answer = await inquirer.prompt([
  {message: "Enter first number", type: "number", name: "num1" },
  {message: "Enter second number", type: "number", name: "num2" },
  {message: "Select one of the Arithmetic Operators to perfrom the operation.",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
]);

// Conditonal Statements, 'If' 'Elseif'

// if(answer.operator === "Addition") {
//     console.log("Your value is " + answer.num1 + answer.num2); 
// }        This would output in concatinated form, seperate string from numbers

if(answer.operator === "Addition") {
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
    console.log("Please select a valid operator.")
 }
