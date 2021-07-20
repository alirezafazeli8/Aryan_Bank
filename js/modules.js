"use strict";

// information
let targetUserSave = [];

// check correct function in CardsApi
// function checkCard(whichInput) {
//   for (let card of Object.values(cards)) {
//     const cardsFromDB = card.cardNumber.replaceAll("_", "");
//     if (whichInput.value == cardsFromDB) {
//       targetUserSave.push(card);
//       return true;
//     } else {
//       continue;
//     }
//   }
// }

// -----------------------------------------------------

// all begin card information
function allBeginInfo() {
  // begin number card
  function beginNumberCard() {
    // NOTE render incorrect number card
    if (beginInput.value == "") {
      sweetIncorrectCard("Pleas Enter Correct Begin Number Card");
    } else {
      // NOTE the last answer
      for (let card of Object.values(cards)) {
        const cardsFromDB = card.cardNumber.replaceAll("_", "");
        if (beginInput.value == cardsFromDB) {
          if (moneyInput.value >= card.money) {
            if (cvv2Input.value == card.cvv2) {
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

  if (beginNumberCard() == undefined) {
    sweetIncorrectCard("Pleas Enter Correct Number Card");
  }

  // target number card
  function targetNumberCard() {
    // NOTE render incorrect number card
    if (targetInput.value == "") {
      sweetIncorrectCard("Pleas Enter Correct Target Number Card");
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
