import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { generateRandomBankBalance } from "./generateRandomBalance.js";
import { promptUserToContinueOrExit } from "./useAtmAgain.js";

// start function
export const start = async (): Promise<void> => {
  // prompt the user to select an option
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

  let bankBalance = await generateRandomBankBalance();

  // if user selects "Balance Inquiry"
  if (selectedOption.option == "Balance Inquiry") {
    console.log(chalk.green(`\n Current Bank Balance is : ${bankBalance}`));
    promptUserToContinueOrExit();
  }

  // if user selects "Fast Cash"
  if (selectedOption.option == "Fast Cash") {
    const fastCash = await inquirer.prompt({
      name: "amount",
      type: "list",
      choices: ["10000", "20000", "30000", "40000", "50000"],
      message: chalk.gray(`\n Select your amount`),
    });
    if (fastCash.amount == 10000 && bankBalance >= 10000) {
      console.log(chalk.green(`\n Current Bank Balance: ${bankBalance}`));
      bankBalance -= 2000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 20000 && bankBalance >= 20000) {
      bankBalance -= 20000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 30000 && bankBalance >= 30000) {
      bankBalance -= 30000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 40000 && bankBalance >= 40000) {
      bankBalance -= 40000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else if (fastCash.amount == 50000 && bankBalance >= 50000) {
      bankBalance -= 50000;
      console.log(
        chalk.green(`\n Bank Balance after withdrawal: ${bankBalance}`)
      );
      promptUserToContinueOrExit();
    } else {
      console.log(chalk.red(`\n Insufficient balance`));
    }
  }
  // if user selects "Cash Withdrawal"
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
        validate: (amount) => {
          if (isNaN(amount)) {
            return false;
          }
          return true;
        },
      },
    ]);
    bankBalance -= withdrawAmount.amount;
    console.log(
      chalk.green(`\n (Bank Balance after withdrawal: ${bankBalance})`)
    );
    promptUserToContinueOrExit();
  }

  // if user selects "Cash Deposit"
  if (selectedOption.option == "Cash Deposit") {
    console.log(
      chalk.green(`
 Current Bank Balance: ${bankBalance}
 ----------------------------`)
    );
    const deposit = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: chalk.gray("\nEnter deposit amount: "),
      validate: (amount) => {
        if (isNaN(amount)) {
          return false;
        }
        return true;
      },
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
