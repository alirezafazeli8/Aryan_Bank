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
