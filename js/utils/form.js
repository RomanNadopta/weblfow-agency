import { getElement } from "./utils.js";

const form = document.getElementById("form");
const messageContainer = getElement(".validator-container");
const message = document.getElementById("validator");
const selected = getElement(".select-selected");

let isValid = false;

const validateForm = () => {
  isValid = form.checkValidity();
  // if (!isValid) {
  //   message.textContent = "Please fill out all fields";
  //   messageContainer.style.display = "flex";
  //   message.style.color = "red";
  //   messageContainer.style.borderColor = "red";
  // }

  if (isValid) {
    message.textContent = "Successfully sent!";
    messageContainer.style.display = "flex";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    setTimeout(() => {
      messageContainer.style.display = "none";
    }, 3000);
  }
};

const storeFormData = () => {
  const user = {
    name: form.name.value,
    email: form.email.value,
    context: form.context.value,
    subject: selected.firstChild.wholeText,
    message: form.message.value,
  };

  console.log(user);
};

const proccesFormData = (e) => {
  e.preventDefault();
  validateForm();
  if (isValid) {
    storeFormData();
  }
};

form.addEventListener("submit", proccesFormData);
