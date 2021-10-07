const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

getField = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1);

checkRequired = (inputArr) => {
  let isRequired = false;
  inputArr.map((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getField(input)} is Required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
};

checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getField(input)} must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getField(input)} must be less than ${max} characters`);
  } else {
    showSuccess();
  }
};

checkPasswordMatch = (password, confirmPassword) => {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, `Password does not match`);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!checkRequired([username, email, password, confirmPassword])) {
    checkEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordMatch(password, confirmPassword);
  }
});
