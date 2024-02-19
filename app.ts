#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { displayTitleAndTagline } from "./welcome.js";
import { promptUserIdAndPin } from "./userAuthentication.js";
import { promptUserToSelectOption } from "./promptToSelectAnOption.js";
import { promptUserToContinueOrExit } from "./useAtmAgain.js";

await displayTitleAndTagline();
await promptUserIdAndPin;
await promptUserToSelectOption;
promptUserToContinueOrExit;
