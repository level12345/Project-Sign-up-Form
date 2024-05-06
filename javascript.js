let password = document.getElementById("user_password");
let passwordC = document.getElementById("confirmed_password");
let passwordWarning = document.getElementById("password-warning");

passwordC.addEventListener("keyup", () => {
  const password1 = password.value;
  const password2 = passwordC.value;

  if (password1 !== password2) {
    passwordWarning.style.display = "block";
    password.style.border = "2px solid red";
    passwordC.style.border = "2px solid red";
  } else {
    passwordWarning.style.display = "none";
    password.style.border = "1px solid black";
    passwordC.style.border = "1px solid black";
  }
});
