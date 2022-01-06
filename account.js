"use strict";

const accJson = require("./accounts.json");

class Account {
  constructor(userName, money) {
    this.userName = userName;
    this.money = money;
  }
}

const checkAccount = function (userNameInput) {
  const answerOfAcc = accJson.acc.find((acc) => acc.userName == userNameInput);
  return answerOfAcc;
};

module.exports = {
  checkAccount: checkAccount,
  Account: Account,
};
