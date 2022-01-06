const accounts = require("./account.js");
const cmd = require("./cmd");
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cerateUserFunc = function (username) {
  const newUser = new accounts.Account(username, 0);
  accounts;
  console.log(`Hey ${newUser.userName} Your Account Is Created ✅`);
  cmd.getAndShowCommand(newUser);
};

const checkUserAccountFunc = function (cAns) {
  cAns = cAns.toLocaleLowerCase();
  if (cAns == "yes" || cAns == "y") {
    rl.question("Pleas Enter Your New UserName 💋 : ", cerateUserFunc);
  } else {
    console.log("Good Bye");
  }
};

const enterUserNameFunc = function (ans) {
  const userAccount = accounts.checkAccount(ans);
  if (userAccount) {
    // show command
    console.log("You Logged In ✅");
    cmd.getAndShowCommand(userAccount);
  } else {
    rl.question(
      "You Dont Have Acc, Do You Wanna Create Account 👀 ? yes/no y/n : ",
      checkUserAccountFunc
    );
  }
};

const startMessage = function () {
  // welcome message
  console.log("Welcome To Aryan Bank ♐");

  // get user acc
  rl.question("Enter Your Account UserName 👀: ", enterUserNameFunc);
};

startMessage();
