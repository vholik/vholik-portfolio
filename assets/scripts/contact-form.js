const form = document.querySelector(".contact-form");
const btn = document.querySelector(".contact-btn");
const email = document.querySelector(".email-input");
const msg = document.querySelector(".msg-input");
const emailError = document.querySelector(".email-error");
const msgError = document.querySelector(".msg-error");

const successHex = "#4BB543";
const errorHex = "#cc0000";
let isDone = false;

const randomBool = () => {
  return Math.random() < 0.5;
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const clearErrorMsg = (input, error) => {
  input.classList.remove("error-input");
  error.style.display = "none";
};

const showError = (input, msgInput, msg) => {
  input.classList.add("error-input");

  msgInput.innerHTML = msg;
  msgInput.style.display = "block";
};

// Clear email input error on change
email.addEventListener("change", () => {
  clearErrorMsg(email, emailError);
});

// Clear message input error on change
msg.addEventListener("change", () => {
  clearErrorMsg(msg, msgError);
});

const checkErrors = () => {
  let error = null;

  if (!email.value) {
    showError(email, emailError, "Please enter email");
    error = true;
  } else if (!validateEmail(email.value)) {
    showError(email, emailError, "Please enter valid email");
    error = true;
  }

  if (msg.value > 255) {
    showError(msg, msgError, "Message is too big");
    error = true;
  } else if (!msg.value) {
    showError(msg, msgError, "Message can not be empty");
    error = true;
  }

  return error;
};

// Form handler
btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isDone) {
    return;
  }

  if (checkErrors()) {
    return;
  }

  const tlLine = gsap.timeline({
    defaults: { duration: 0.2, ease: "none" },
  });

  tlLine.fromTo(".contact-btn .inner", { opacity: 1 }, { opacity: 0 });
  tlLine.fromTo(
    ".contact-btn .inner",
    { display: "flex" },
    { display: "none" },
    "<100%"
  );

  tlLine.fromTo(
    ".contact-btn .loader",
    { display: "none" },
    { display: "block" },
    "<100%"
  );
  tlLine.fromTo(
    ".contact-btn .loader",
    { opacity: 0 },
    { opacity: 1 },
    "<100%"
  );

  tlLine.to(".contact-btn .loader", { opacity: 0, delay: 3 });

  tlLine.to(".contact-btn .loader", { display: "none" });

  if (randomBool()) {
    tlLine.to(".error-status", { display: "flex" });
    tlLine.to(".error-status", { opacity: 1 });
    tlLine.to(".contact-btn", { backgroundColor: errorHex }, "<0%");
  } else {
    tlLine.to(".success-status", { display: "flex" });
    tlLine.to(".success-status", { opacity: 1 });
    tlLine.to(".contact-btn", { backgroundColor: successHex }, "<0%");
  }

  isDone = true;
});
