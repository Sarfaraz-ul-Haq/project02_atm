import inquirer from "inquirer";
import chalk from "chalk";
import { promptUserToSelectOption } from "./promptToSelectAnOption.js";
import { thanks } from "./thanksForTrying.js";

// function to prompt user to use ATM again or exit
export const promptUserToContinueOrExit = async (): Promise<void> => {
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
