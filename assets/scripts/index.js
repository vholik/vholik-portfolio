$(document).ready(function () {
  $(".reviews-wrapper").slick({
    prevArrow: ".arrow-left",
    nextArrow: ".arrow-right",
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    cssEase: "linear",
  });

  $(".hero-bg").slick({
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    cssEase: "linear",
    arrows: false,
  });
});

// const scrollContainer = document.querySelector("[data-scroll-container]");

// const scroll = new LocomotiveScroll({
//   el: scrollContainer,
//   smooth: true,
//   getDirection: true,
// });

// imagesLoaded(scrollContainer, { background: true }, function () {
//   scroll.update();
// });

const servicesRows = document.querySelectorAll(".services-wrapper .row");

servicesRows.forEach((row) => {
  row.addEventListener("click", () => {
    row.classList.toggle("active-row");
    locoScroll.update();
  });
});

const menuOpenBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".menu-close");
const menu = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".menu-list li");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("active-menu");
  window.style.overflow = "hidden";
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("active-menu");
  window.style.overflow = "auto";
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active-menu");
  });
});
