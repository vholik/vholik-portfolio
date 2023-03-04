gsap.registerPlugin(ScrollTrigger);

const workLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
  scrollTrigger: {
    trigger: ".work",
    // markers: { startColor: "white", endColor: "white" },
    start: "end",
    end: "+=500",
    scrub: true,
    pin: ".work-title",
  },
});

workLine.fromTo(
  ".work-title",
  {
    fontSize: "12vw",
  },
  {
    fontSize: "3.5rem",
    duration: 3,
    ease: "Power2.easeOut",
  }
);

const works = document.querySelectorAll(".case-img");

// new hoverEffect({
//   parent: works[0],
//   intensity: 0.5,
//   image1: "./assets/images/work/monocode.jpg",
//   image2: "./assets/images/work/opal-transport.jpg",
//   displacementImage: "./assets/images/displacment.png",
// });

// new hoverEffect({
//   parent: works[1],
//   intensity: 0.5,
//   image1: "./assets/images/work/slowbee.jpg",
//   image2: "./assets/images/work/monocode.jpg",
//   displacementImage: "./assets/images/displacment.png",
// });

// new hoverEffect({
//   parent: works[2],
//   intensity: 0.5,
//   image1: "./assets/images/work/polska-unia-transportu.jpg",
//   image2: "./assets/images/work/slowbee.jpg",
//   displacementImage: "./assets/images/displacment.png",
// });

// new hoverEffect({
//   parent: works[3],
//   intensity: 0.5,
//   image1: "./assets/images/work/monoshop.jpg",
//   image2: "./assets/images/work/polska-unia-transportu.jpg",
//   displacementImage: "./assets/images/displacment.png",
// });

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-animated",
    scrub: true,
    start: "-90%",
    end: "20%",
    duration: 50,
  },
});

tlH.fromTo(
  ".text-animated span",
  {
    color: "var(--grey)",
  },
  {
    color: "var(--white)",
    stagger: 1,
  }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-animated",
    // markers: { startColor: "red", endColor: "red" },
    scrub: true,
    start: "-60%",
    end: "40%",
    duration: 50,
  },
});

tlHRemove.to(".text-animated span", {
  color: "var(--grey)",
  stagger: 1,
});

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

const tlLine = gsap.timeline({
  defaults: { duration: 1.5, ease: "Power3.easeInOut" },
});

tlLine.fromTo(
  ".loading .logo-loader .logo-wrapper",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0 }
);

tlLine.fromTo(".loading .logo-loader", { y: 0 }, { y: "-100%" });
tlLine.fromTo(".loading .logo-loader .logo-wrapper", { y: 0 }, { y: 500 }, "<");
tlLine.fromTo(".loading .sublogo-loader .logo", { y: 150 }, { y: 0 }, "<0%");
tlLine.fromTo(".loading .sublogo-loader", { y: 0 }, { y: "-100%" }, "<90%");
tlLine.fromTo(".loading .sublogo-loader .logo", { y: 0 }, { y: 400 }, "<0%");

tlLine.fromTo(
  ".hero-title span",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.05 },
  "<10%"
);

tlLine.fromTo(
  ".hero .arrow-btn",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.05 },
  "<50%"
);

const aboutLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
  scrollTrigger: {
    trigger: "#about",
    // markers: { startColor: "red", endColor: "red" },
    start: "-90%",
    end: "40%",
  },
});

aboutLine.fromTo(".about svg", { opacity: 0 }, { opacity: 1 }, "<0%");

aboutLine.fromTo(
  ".about .section-mark",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0 },
  "<0%"
);
aboutLine.fromTo(
  ".about-text span",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.05 },
  "<0%"
);

const techLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
  scrollTrigger: {
    trigger: "#technologies",
    // markers: { startColor: "red", endColor: "red" },
    start: "-60%",
    end: "40%",
  },
});

techLine.fromTo(
  ".technologies svg",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0 },
  "<0%"
);

techLine.fromTo(
  ".technologies .section-mark",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0 },
  "<0%"
);
techLine.fromTo(
  ".technologies .card",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.2 },
  "<0%"
);

techLine.fromTo(
  ".technologies .contact-btn",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.2 },
  "<40%"
);

const ctcLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
  scrollTrigger: {
    trigger: "#contact",
    start: "-90%",
    end: "40%",
  },
});

ctcLine.fromTo(
  ".contact .contact-title",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0 }
);

ctcLine.fromTo(
  ".contact .arrow-btn",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0 },
  "<40%"
);
