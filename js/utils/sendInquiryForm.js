import { getElement } from "./utils.js";

const sendInquiryForm = document.getElementById("inquiry");

let isValid = false;

const validateForm = () => {
  isValid = sendInquiryForm.checkValidity();
};

const storeFormdata = () => {
  const user = {
    name: sendInquiryForm.name.value,
    email: sendInquiryForm.email.value,
    website: sendInquiryForm.website.value,
  };
  console.log(user);
};

const proccesFormData = (e) => {
  e.preventDefault();
  validateForm();
  if (isValid) {
    storeFormdata();
  }
};

sendInquiryForm.addEventListener("submit", proccesFormData);
