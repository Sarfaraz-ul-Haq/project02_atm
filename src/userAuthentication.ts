import inquirer from "inquirer";
import chalk from "chalk";
import { start } from "./promptToSelectAnOption.js";

// function to authenticate user ID
export const isUserIDCorrect = (ID: number): boolean => {
  if (ID == 123456) {
    return true;
  }
  return false;
};

// function to authenticate user pin
export const isUserPinCorrect = (pin: number): boolean => {
  if (pin == 123456) {
    return true;
  }
  return false;
};

// function to prompt and authenticate user ID and pin
export const promptUserIdAndPin = async (): Promise<void> => {
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
      await start();
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
