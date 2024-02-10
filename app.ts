#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { createSpinner } from "nanospinner";
import { isUserIDCorrect, isUserPinCorrect } from "./userAuthentication.js";

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

// function to display "Thanks for trying" message if user exits
const thanks = async () => {
  showBanner(`Thanks for trying !`, undefined, "green");
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

  if (isUserIDCorrect(userAnswer.ID)) {
    if (isUserPinCorrect(userAnswer.pin)) {
      await promptUserToSelectOption();
    } else {
      console.clear();
      console.log(chalk.red(`\n Wrong user pin, please try again.`));
      promptUserIdAndPin();
    }
  } else {
    console.clear();
    console.log(chalk.red(`\n Wrong user ID, please try again.`));
    promptUserIdAndPin();
  }
};

let bankBalance: number;

// function to generate random bank balance
const generateRandomBankBalance = async () => {
  bankBalance = Math.floor(Math.random() * 1000000 + 1);
  return bankBalance;
};

// function to prompt user to use ATM again or exit
const promptUserToContinueOrExit = async () => {
  const continueOrExit = await inquirer.prompt({
    name: "userAns",
    type: "list",
    choices: ["Yes", "No"],
    message: chalk.gray(`\n Do you want to use ATM again?`),
  });
  if (continueOrExit.userAns == "Yes") {
    promptUserToSelectOption();
  } else {
    thanks();
  }
};
// function to prompt user to select an option
const promptUserToSelectOption = async () => {
  console.clear();
  let selectedOption = await inquirer.prompt([
    {
      name: "option",
      type: "list",
      choices: [
        "Balance Inquiry",
        "Fast Cash",
        "Cash Withdrawal",
        "Cash Deposit",
        "Exit",
      ],
      message: chalk.gray(`\n Select any option`),
    },
  ]);

  // balance inquiry
  if (selectedOption.option == "Balance Inquiry") {
    console.log(chalk.green(`\n Current Bank Balance is : ${bankBalance}`));
    promptUserToContinueOrExit();
  }

  // fast cash
  if (selectedOption.option == "Fast Cash") {
    const fastCash = await inquirer.prompt({
      name: "amount",
      type: "list",
      choices: ["10000", "20000", "30000", "40000", "50000"],
      message: chalk.gray(`\n Select your amount`),
    });
    if (fastCash.amount == 10000) {
      console.log(chalk.green(`\n Current Bank Balance: ${bankBalance}`));
      bankBalance -= 2000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 20000) {
      bankBalance -= 20000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 30000) {
      bankBalance -= 30000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 40000) {
      bankBalance -= 40000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 50000) {
      bankBalance -= 50000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else {
      bankBalance -= 30000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    }
  }

  // cash withdrawal
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
    promptUserToContinueOrExit();
  }

  // cash deposit
  if (selectedOption.option == "Cash Deposit") {
    console.log(
      chalk.green(`
  Current Bank Balance: ${bankBalance}
  ----------------------------`)
    );
    const deposit = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: chalk.gray("Enter deposit amount: "),
    });
    bankBalance += deposit.amount;
    console.log(chalk.green(`\n Bank Balance after deposit: ${bankBalance}`));
    promptUserToContinueOrExit();
  }

  if (selectedOption.option == "Exit") {
    console.clear();
    await showBanner(`\n Thanks for trying !`, undefined, "green");
  }
};

// main function to start the ATM
const start = async () => {
  await displayTitleAndTagline();
  generateRandomBankBalance();
  await promptUserIdAndPin();
};

start();
