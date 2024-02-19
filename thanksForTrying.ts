import showBanner from "node-banner";

// function to display "Thanks for trying" message if user exits
export const thanks = async (): Promise<void> => {
  await showBanner(`Thanks for trying !`, undefined, "green");
};
