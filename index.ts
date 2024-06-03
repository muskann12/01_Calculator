#! /usr/bin/env node

import inquirer from "inquirer";

// Asking Questions from Users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},
    {message: "Enter second Number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform Operations",
        type: "list",
        name:"operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"]

    },
]);

// Conditional statments If-Else; 



 if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}

else if (answers.operator === "Subraction"){
    console.log(answers.firstNumber - answers.secondNumber)
} 

else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}

else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
};
