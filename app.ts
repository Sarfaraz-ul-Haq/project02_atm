#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { createSpinner } from "nanospinner";
import { isUserIDCorrect, isUserPinCorrect } from "./userAuthentication.js";

// // function to display a note for 2 seconds that all the user data is generated randomly
// const note = async () => {
//   const spinner = await createSpinner(
//     chalk.red(` Note: All the user data is generated randomly`)
//   ).start();

//   await setTimeout(spinner.stop, 4000);
//   console.clear();
// };

// function to display atm title and tagline
const displayTitleAndTagline = async () => {
  await showBanner(
    `     CLI ATM`,
    `  Welcome to this console-based ATM application
   _____________________________________________
  \n`,
    "green",
    "gray"
  );
};
// function to prompt and authenticate user ID and pin
const promptUserIdAndPin = async () => {
  let userAnswer = await inquirer.prompt([
    {
      name: "ID",
      type: "number",
      message: chalk.gray("Enter your user ID: "),
    },
    {
      name: "pin",
      type: "password",
      message: chalk.gray("Enter your user pin: "),
    },
  ]);
};

let bankBalance: number;

// function to generate random bank balance
const generateRandomBankBalance = async () => {
  bankBalance = Math.floor(Math.random() * 1000000 + 1);
  return bankBalance;
};

// function to prompt user to select an option
const promptUserToSelectOption = async () => {
  let selectedOption = await inquirer.prompt([
    {
      name: "option",
      type: "list",
      choices: [
        "Balance Inquiry",
        "Fast Cash",
        "Cash Withdrawal",
        "Cash Deposit",
        "Change Pin",
        "Exit",
      ],
      message: chalk.gray(`\n Select any option`),
    },
  ]);

  if (selectedOption.option == "Balance Inquiry") {
    console.log(chalk.green(`\nCurrent Bank Balance is : ${bankBalance}`));
  }

  if (selectedOption.option == "Fast Cash") {
    console.log(chalk.green(`\n Current Bank Balance: ${bankBalance}`));

    const fastCash = await inquirer.prompt({
      name: "amount",
      type: "list",
      choices: ["10000", "20000", "30000", "40000", "50000"],
      message: chalk.gray(`\n Select your amount`),
    });
    if (fastCash.amount == 10000) {
      console.log(
        chalk.green(`
 Current Bank Balance: ${bankBalance}
    `)
      );
      bankBalance -= 2000;
      console.log(
        `\n ${chalk.green(
          `\n Bank Balance after withdrawal: ${bankBalance}}`
        )}  `
      );
    } else if (fastCash.amount == 20000) {
      bankBalance -= 20000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
    } else if (fastCash.amount == 30000) {
      bankBalance -= 30000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
    } else if (fastCash.amount == 40000) {
      bankBalance -= 40000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
    } else if (fastCash.amount == 50000) {
      bankBalance -= 50000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
    } else {
      bankBalance -= 30000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
    }
  }

  if (selectedOption.option == "Cash Withdrawal") {
    console.log(
      chalk.green(`
  Current Bank Balance: ${bankBalance}
  ----------------------------`)
    );
    const withdrawAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: chalk.gray(`\n Enter your amount: `),
      },
    ]);
    bankBalance -= withdrawAmount.amount;
    console.log(
      chalk.green(`\n (Bank Balance after withdrawal: ${bankBalance})`)
    );
  }

  if (selectedOption.option == "Cash Deposit") {
    console.log(
      chalk.green(`
  Current Bank Balance: ${bankBalance}
  ----------------------------`)
    );
    const deposit = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter deposit amount: ",
    });
    bankBalance += deposit.amount;
    console.log(chalk.green(`\n Bank Balance after deposit: ${bankBalance}`));
  }
};

// main function to start the ATM
const start = async () => {
  await displayTitleAndTagline();
  generateRandomBankBalance();
  await promptUserIdAndPin();
  await promptUserToSelectOption();
};

start();
