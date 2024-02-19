// function to generate random bank balance
export const generateRandomBankBalance = async (): Promise<number> => {
  return new Promise<number>((resolve) => {
    let bankBalance = Math.floor(Math.random() * 1000000 + 1);
    resolve(bankBalance);
  });
};
