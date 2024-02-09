// function to authenticate user ID
export const isUserIDCorrect = (ID: string) => {
  if (ID == "123456") {
    return true;
  }
  return false;
};

// function to authenticate user pin
export const isUserPinCorrect = (pin: string) => {
  if (pin == "123456") {
    return true;
  }
  return false;
};
