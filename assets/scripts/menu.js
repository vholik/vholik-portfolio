let isOpen = false;

const burger = document.querySelector(".burger-menu");

const menuLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power3.easeInOut" },
});

burger.addEventListener("click", () => {
  if (isOpen) {
    menuLine.to(".menu-list li", { opacity: 0, y: -20 });
    menuLine.to(
      ".menu .bottom .links",
      { opacity: 0, y: -40, stagger: 0.05 },
      "<0%"
    );

    menuLine.to(".menu .bottom .loop-row", { opacity: 0 }, "<0%");

    menuLine.to(
      ".menu",
      {
        y: "-100%",
        onComplete: () => {
          document.querySelector("html").style.overflowY = "auto";
        },
      },
      "<50%"
    );

    burger.classList.remove("active-burger");
  } else {
    menuLine.fromTo(".menu", { y: "-100%" }, { y: 0 });
    burger.classList.add("active-burger");
    document.querySelector("html").style.overflowY = "hidden";

    menuLine.fromTo(
      ".menu-list li",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "<40%"
    );

    menuLine.fromTo(
      ".menu .bottom .links",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "<40%"
    );

    menuLine.fromTo(
      ".menu .bottom .loop-row",
      { opacity: 0 },
      { opacity: 1 },
      "<20%"
    );
  }

  isOpen = !isOpen;
});
