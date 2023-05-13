import "./index.html";
import "./style.scss";
import tippy from "tippy.js";
import "tippy.js/animations/shift-away.css";
import AOS from "aos";

tippy(".socials-btn", {
  content: document.querySelector(".socials-list"),
  interactive: true,
  animation: "shift-away",
});

AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});
