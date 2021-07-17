"use strict";

const beginInput = document.getElementById("begin-input");
const targetInput = document.getElementById("target-input");
const userNameInput = document.getElementById("user-name");
const moneyInput = document.getElementById("money");
const cvv2Input = document.getElementById("cvv2-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-btn");

// condition variable
let beginInputCd = false;
let targetInputCd = false;

// money valid
let moneyValid = false;

// begin user stored.
let beginUserInfo;
let targetUserInfo;

// check valid card
function validCard() {
  //check begin card
  function checkBegin() {
    for (let card of Object.values(cards)) {
      const cardsAfter = card.cardNumber.replaceAll("_", "");
      if (cardsAfter == beginInput.value) {
        // store begin card data
        beginUserInfo = card; // => beginUserInfo NOTE
        beginInputCd = true; // => begin return true for condition NOTE
        break;
      } else {
        continue;
      }
    }
  }
  // check target card
  function checkTarget() {
    for (let card of Object.values(cards)) {
      const cardsAfter = card.cardNumber.replaceAll("_", "");
      if (cardsAfter == targetInput.value) {
        // store target card data
        targetUserInfo = card; // => targetUserInfo NOTE
        targetInputCd = true; // => target return true for condition NOTE
        break;
      } else {
        continue;
      }
    }
  }

  // call functions
  checkBegin();
  checkTarget();

  // return answer
  if (beginInputCd && targetInputCd) {
    return true;
  } else if (beginInputCd == false) {
    swal({
      title: "Begin Card Is Incorrect",
      text: "",
      icon: "error",
    });
  } else if (targetInputCd == false) {
    swal({
      title: "Target Card Is Incorrect",
      text: "",
      icon: "error",
    });
  } else {
    return false;
  }
}

function checkMoney() {
  validCard();
  const beginAfter = beginUserInfo.money.replace("$", "");
  moneyValid = beginAfter > moneyInput.value;
} // => moneyValid NOTE

function cvv2Checker() {}
submitButton.addEventListener("click", function () {
  validCard();
  checkMoney();
  console.log(moneyValid);
});
