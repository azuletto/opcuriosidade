const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const errorsParagraphs = document.querySelectorAll(".error-message");
const loginButton = document.getElementById("login-button");
import { API_URL as host } from "../config.js";

loginButton.addEventListener("click", async (event) => {
  console.log("Register button clicked");
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const passwordConfirm = passwordConfirmInput.value.trim();

  if (password !== passwordConfirm) {
    errorsParagraphs[3].textContent = "As senhas não coincidem.";
    return;
  }

  try {
    const response = await fetch(`${host}/Admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error response:", errorData);
      let errorName;
      let errorEmail;
      let errorPassword;

      if (
        (errorName = errorData.notifications.find(
          (notification) => notification.property === "name"
        ))
      ) {
        errorsParagraphs[0].textContent = errorName.message;
      }
      if (
        (errorEmail = errorData.notifications.find(
          (notification) => notification.property === "email"
        ))
      ) {
        errorsParagraphs[1].textContent = errorEmail.message;
      }
      if (
        (errorPassword = errorData.notifications.find(
          (notification) => notification.property === "password"
        ))
      ) {
        errorsParagraphs[2].textContent = errorPassword.message;
        errorsParagraphs[3].textContent = errorPassword.message ;
      }
    }
  } catch (error) {
    console.error("Error during registration:", error);
    loginErrorMessage.textContent =
      "An unexpected error occurred. Please try again.";
  }
});
