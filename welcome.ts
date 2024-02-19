import showBanner from "node-banner";

// function to display atm title and tagline
export const displayTitleAndTagline = async (): Promise<void> => {
  await showBanner(
    `     CLI ATM`,
    `  Welcome to this console-based ATM application
     _____________________________________________
    \n`,
    "green",
    "gray"
  );
};
