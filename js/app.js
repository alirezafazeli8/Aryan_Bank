"use strict";

const beginInput = document.getElementById("begin-input");
const targetInput = document.getElementById("target-input");
const userNameInput = document.querySelector(".target-user-name");
const moneyInput = document.getElementById("money");
const cvv2Input = document.getElementById("cvv2-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-btn");

// sweet alert
const sweetIncorrectCard = (message) => swal({ title: message, icon: "error" });

// information
let targetUserSave = [];

// -----------------------------------------------------

// check correct function in CardsApi
function checkCard(whichInput, variable = "ANONYMOUS") {
  for (let card of Object.values(cards)) {
    const cardsFromDB = card.cardNumber.replaceAll("_", "");
    if (whichInput.value == cardsFromDB) {
      targetUserSave.push(card);
      return true;
    } else {
      continue;
    }
  }
}

// console.log(checkCard(beginInput, beginUserInfo));
checkCard(beginInput);
console.log(targetUserSave);

// -----------------------------------------------------

// all begin card information
function allBeginInfo() {
  // begin number card
  function beginNumberCard() {
    // NOTE render incorrect number card
    if (beginInput.value == "") {
      sweetIncorrectCard("Pleas Enter Correct Number Card");
    } else {
      if (checkCard(beginInput) == undefined) {
        sweetIncorrectCard("Your Begin Card Is Incorrect");
      } else {
        checkCard(beginInput);
        console.log(targetUserSave[0].name);
      }
    }
  }

  // target number card
  function targetNumberCard() {
    // NOTE render incorrect number card
    if (targetInput.value == "") {
      sweetIncorrectCard("Pleas Enter Correct Number Card");
    } else {
      if (checkCard(targetInput) == undefined) {
        sweetIncorrectCard("Your Target Card Is Incorrect");
      } else {
        checkCard(targetInput);
        console.log(targetUserSave);
      }
    }
  }

  function similarCard() {
    if (beginInput.value != "" && targetInput.value != "") {
      if (beginInput.value == targetInput.value) {
        sweetIncorrectCard("Your Target Card is Equal To Begin");
        return false;
      } else {
        return true;
      }
    }
  }

  if (!beginNumberCard() && !targetNumberCard() && !similarCard()) {
    return false;
  } else {
    return true;
  }
}

// ----------------------------------------------------------------------------

targetInput.onblur = function () {
  userNameInput.classList.remove("hidden");
};

submitButton.addEventListener("click", function () {
  console.log(allBeginInfo());
});
