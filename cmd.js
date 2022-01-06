"use strict";

const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const depositFunc = function (depositAccount) {
  rl.question("how many money do you want deposit it 🏬?", (depositMoney) => {
    console.log(`${depositMoney}$ is forwarded t ${depositAccount}`);
    console.log(`GoodBye 🤞`);
  });
};

const optionSelectFunc = function (selectedOption, userAcc) {
  selectedOption = selectedOption.toLowerCase();
  switch (selectedOption) {
    case "view":
      console.log(`Your Account Balance 💵 : ${userAcc.money}$`);
      break;
    case "deposit":
      rl.question(
        "pleas enter which account do you want deposit it : ",
        depositFunc
      );
      break;
  }
};

const getAndShowCommand = function (userAcc) {
  const allCommandTXT = `
        Hi There. 
        What Do You Want ${userAcc.userName} 👀.
        you can type these command : 
        
        1- view 👀
        2- deposit 💵
    `;
  console.log(allCommandTXT);
  rl.question("pleas select one of these 🈺: ", (s) => {
    optionSelectFunc(s, userAcc);
  });
};

module.exports = {
  getAndShowCommand: getAndShowCommand,
};
