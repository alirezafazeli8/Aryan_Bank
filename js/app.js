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

// check card functions (begin, target) =>  and if cards is incorrect function return to me undefined if is correct , return to me correct.
function checkCard(whichCard) {
  // get card information from API
  for (let card of Object.values(cards)) {
    // get correct string with string methods
    const cardsFromDB = card.cardNumber.replaceAll("_", "");
    if (whichCard.value == cardsFromDB) {
      return true;
    } else {
      continue;
    }
  }
}

// NOTE thats my root of project is Important part of project (Process All Authentication);
function allBeginInfo() {
  // Check all Information of begin input card for money forwarding and error handling
  function beginNumberCard() {
    // EMPTY checker handler
    if (beginInput.value == "") {
      sweetIncorrectCard("Your Begin Card Is Empty");
    } else {
      // correct card check handler
      if (checkCard(beginInput) == undefined) {
        sweetIncorrectCard("Your Begin Card Is Not Correct");
        return false;
      } else {
        // check all information should be true
        for (let card of Object.values(cards)) {
          // concat string
          const cardsFromDB = card.cardNumber.replaceAll("_", "");
          if (beginInput.value == cardsFromDB) {
            // check money exist
            if (moneyInput.value >= card.money) {
              // check  cvv2
              if (cvv2Input.value == card.cvv2) {
                // check password
                if (passwordInput.value == card.password) {
                  return true;
                } else {
                  sweetIncorrectCard("Pleas Enter Correct Password");
                  return false;
                }
              } else {
                sweetIncorrectCard("Cvv2 Is Incorrect");
                return false;
              }
            } else {
              sweetIncorrectCard("You Don't Have Enough Money");
              return false;
            }
          } else {
            continue;
          }
        }
      }
    }
  }

  // target number card
  function targetNumberCard() {
    // NOTE render incorrect number card
    if (targetInput.value == "") {
      sweetIncorrectCard("Your Target Card Is Empty");
    } else {
      if (checkCard(targetInput) == undefined) {
        sweetIncorrectCard("Your Target Card Is Incorrect");
      } else {
        // checkCard(targetInput);
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

// -------------------------------------

// target onblur event listener
targetInput.onblur = function () {
  // show target person
  userNameInput.textContent = `Target Person : ${targetUserSave[0].name}`;
  // remove hidden class from username input
  userNameInput.classList.remove("hidden");
};

// submit button event listener
submitButton.addEventListener("click", function () {
  console.log(allBeginInfo());
  console.log();
});
