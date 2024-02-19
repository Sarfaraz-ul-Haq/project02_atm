import inquirer from "inquirer";
import chalk from "chalk";
import { start } from "./promptToSelectAnOption.js";
import { thanks } from "./thanks.js";

// function to prompt user to use ATM again or exit
export const promptUserToContinueOrExit = async (): Promise<void> => {
  const continueOrExit = await inquirer.prompt({
    name: "userAns",
    type: "list",
    choices: ["Yes", "No"],
    message: chalk.gray(`\n Do you want to use ATM again?`),
  });
  if (continueOrExit.userAns == "Yes") {
    start();
  } else {
    thanks();
  }
};
