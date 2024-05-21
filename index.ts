#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 100000;
let myPin: number = 4763;
let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "Enter pin number", type: "number" },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct pin number!");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["Withdraw", "fast cash", "Check balance"],
    },
  ]);
  if (operationAnswer.operation === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
      { name: "amount", message: "Enter amount", type: "number" },
    ]);
    if (amountAnswer.amount > myBalance) {
      console.log("Insufficient balance");
    } else {
      myBalance -= amountAnswer.amount;
      console.log(`Your remaining balance is"  ${myBalance}`);
    }
  } else if (operationAnswer.operation === "fast cash") {
    let fast = await inquirer.prompt([
      {
        name: "fastcash",
        message: "Select the amount which you withdrawal",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);
    myBalance -= fast.fastcash;
    console.log(
      `You have successfully withdrawal ${fast.fastcash} \n Your remaining balance is ${myBalance}`
    );
  } else if (operationAnswer.operation === "Check balance") {
    console.log(`Your remaining balance is ${myBalance}`);
  }
} else {
  console.log("Invalid pin number!");
}
