#!/usr/bin/env node

import { displayTitleAndTagline } from "./welcome.js";
import { promptUserIdAndPin } from "./userAuthentication.js";
import { start } from "./promptToSelectAnOption.js";
import { promptUserToContinueOrExit } from "./useAtmAgain.js";

// async function to display ATM title & tagline
await displayTitleAndTagline();

// Asynchronous function to prompt the user for their ID and pin.
await promptUserIdAndPin();
// If the entered ID or pin is invalid, the user is informed with a "wrong user ID or pin" message and prompted again.
// If the ID and pin are correct, the user is prompted to select an option.
// After the option is selected, the corresponding operation is performed.
// The user is then prompted to continue or quit. If the user chooses to quit, a "thanks for trying" message is displayed.
