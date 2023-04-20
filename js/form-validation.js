function formValidation(e) {
  let uname = document.querySelector(".uname-validation");
  let email = document.querySelector(".email-validation");
  let message = document.querySelector(".message-validation");

  let emailRegEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;

  let valid = true;

  if (!e.target.username.value) {
    valid = false;
    uname.innerHTML =
      '<ion-icon class="alert-icon" name="alert-circle-outline"></ion-icon> Username is required';
  } else {
    uname.textContent = "";
  }

  if (!emailRegEx.test(e.target.email.value)) {
    valid = false;
    email.innerHTML =
      '<ion-icon class="alert-icon" name="alert-circle-outline"></ion-icon> Email is not valid ';
  } else {
    email.textContent = "";
  }
  if (!e.target.message.value) {
    valid = false;
    message.innerHTML =
      '<ion-icon class="alert-icon" name="alert-circle-outline"></ion-icon> Type a message';
  } else {
    message.textContent = "";
  }

  if (!valid) e.preventDefault();
}
