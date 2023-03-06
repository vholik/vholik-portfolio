const themeSwitch = document.querySelector(".theme-switch");
const themeSwitchCircle = document.querySelector(".theme-switch .circle");

const themes = [
  {
    ["--black"]: "#101010",
    ["--grey-bg"]: "#171717",
    ["--stroke"]: "#363636",
    ["--white"]: "#fff",
    ["--grey"]: "#808080",
  },
  {
    ["--black"]: "#f8f8f8",
    ["--grey-bg"]: "#fff",
    ["--stroke"]: "rgba(29,29,32,.1)",
    ["--white"]: "#1d1d20",
    ["--grey"]: "#787878",
  },
];

let isLightTheme = false;

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("isLightTheme", isLightTheme);

  if (JSON.parse(storedTheme)) {
    isLightTheme = true;

    themeSwitchCircle.style.transform = "translateX(34px)";
    Object.entries(themes[1]).forEach((arr) => {
      document.documentElement.style.setProperty(arr[0], arr[1]);
    });
  } else {
    isLightTheme = false;
    themeSwitchCircle.style.transform = "translateX(0)";
    Object.entries(themes[0]).forEach((arr) => {
      document.documentElement.style.setProperty(arr[0], arr[1]);
    });
  }
});

themeSwitch.addEventListener("click", () => {
  loadTheme();
});

function loadTheme() {
  if (!isLightTheme) {
    isLightTheme = true;
    themeSwitchCircle.style.transform = "translateX(34px)";
  } else {
    isLightTheme = false;
    themeSwitchCircle.style.transform = "translateX(0)";
  }

  localStorage.setItem("isLightTheme", isLightTheme);

  Object.entries(themes[isLightTheme ? 1 : 0]).forEach((arr) => {
    document.documentElement.style.setProperty(arr[0], arr[1]);
  });
}
