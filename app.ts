#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

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

// function to prompt user to enter user ID and pin
const promptUserIdAndPin = async () => {
  let { userID, userPin } = await inquirer.prompt([
    {
      name: "ID",
      type: "input",
      message: chalk.gray("Please enter your user ID: "),
    },
    {
      name: "pin",
      type: "password",
      message: chalk.gray("Please enter your user pin: "),
    },
  ]);
};

let bankBalance: number;

// function to generate random bank balance
const generateRandomBankBalance = () => {
  bankBalance = Math.floor(Math.random() * 1000000 + 1);
  return bankBalance;
};

// function to prompt user to select an option
const promptUserToSelectOption = async () => {
  let selectedOption = await inquirer.prompt([
    {
      name: "option",
      type: "list",
      choices: ["Cash withdraw", "Exit"],
      message: chalk.gray(`\n Select any option`),
    },
  ]);

  if (selectedOption.option == "Cash withdraw") {
    console.log(
      chalk.green(`
  Current Bank Balance: ${bankBalance}
  ----------------------------`)
    );
    const withdrawAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: chalk.gray(`\n Please enter your amount: `),
      },
    ]);
    bankBalance -= withdrawAmount.amount;
    console.log(
      chalk.green(`\n (Bank Balance after Withdrawal: ${bankBalance})`)
    );
  }
};

// main function to start the ATM
const start = async () => {
  await displayTitleAndTagline();
  generateRandomBankBalance();
  await promptUserIdAndPin();
  promptUserToSelectOption();
};

start();
