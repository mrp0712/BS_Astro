const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const forgotBtn = document.querySelector("#forgot");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const loginForm = document.querySelector(".login_form");
const signupForm = document.querySelector(".signup_form");
const forgotForm = document.querySelector(".forgot_form");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  loginForm.style.display = "none";
  forgotForm.style.display = "none";
  signupForm.style.display = "block";
});

forgotBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  loginForm.style.display = "none";
  signupForm.style.display = "none";
  forgotForm.style.display = "block";
});

loginBtn.addEventListener("click", (e) => {
  formContainer.classList.remove("active");
  e.preventDefault();
  formContainer.classList.add("active");
  signupForm.style.display = "none";
  forgotForm.style.display = "none";
  loginForm.style.display = "block";
});

const backToLoginBtn = document.querySelector("#back-to-login");

backToLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  forgotForm.style.display = "none";
  loginForm.style.display = "block";
});
