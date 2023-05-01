import "./index.html";
import "./style.scss";
import { Expo, gsap } from "gsap";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

var slider = new KeenSlider(".slider", {
  loop: false,
  mode: "free-snap",
  slides: {
    perView: 3,
    spacing: 15,
  },
  breakpoints: {
    "(max-width: 768px)": {
      slides: {
        perView: 1,
        spacing: 10,
      },
    },
  },
});

class Menu {
  constructor(button, menu, triggers) {
    this.button = document.querySelector(button);
    this.menu = document.querySelector(menu);
    this.button.addEventListener("click", this.onTrigger.bind(this));
    const triggerFun = this.onTrigger.bind(this);
    document.querySelectorAll(triggers).forEach(function (it) {
      it.addEventListener("click", triggerFun);
    });
  }

  onTrigger() {
    if (this.isOpen) {
      this.onLeave();
    } else {
      this.onEnter();
    }

    this.isOpen = !this.isOpen;
  }

  onEnter(callback) {
    if (callback) {
      return (this.onEnterCallback = callback);
    }

    if (this.onEnterCallback) {
      this.onEnterCallback(this.menu, this.button);
    }
  }

  onLeave(callback) {
    if (callback) {
      return (this.onLeaveCallback = callback);
    }

    if (this.onLeaveCallback) {
      this.onLeaveCallback(this.menu, this.button);
    }
  }
}

const vm = new Menu(".menu-btn", ".menu", ".menu__nav-list li");

vm.onEnter((menu, btn) => {
  const ln = gsap.timeline({
    defaults: { duration: 1.5, ease: Expo.easeInOut },
  });

  document.querySelector("body").style.overflowY = "hidden";

  menu.style.pointerEvents = "all";

  ln.fromTo(
    ".menu",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
    }
  );

  ln.fromTo(
    ".menu__nav-list li",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.05,
    },
    "<20%"
  );

  ln.fromTo(
    ".menu .btn",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
    },
    "<10%"
  );

  ln.fromTo(
    ".menu__link-list li",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
    },
    "<20%"
  );

  btn.classList.add("active-menu-btn");
});

vm.onLeave((menu, btn) => {
  btn.classList.remove("active-menu-btn");

  document.querySelector("body").style.overflowY = "auto";

  menu.style.pointerEvents = "none";

  const ln = gsap.timeline({
    defaults: { duration: 1.5, ease: Expo.easeInOut },
  });

  ln.fromTo(
    ".menu__nav-list li",
    {
      opacity: 1,
      x: 0,
    },
    {
      opacity: 0,
      x: -100,
      stagger: 0.05,
    },
    "<20%"
  );

  ln.fromTo(
    ".menu .btn",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: 20,
    },
    "<10%"
  );

  ln.fromTo(
    ".menu__link-list li",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: 20,
      stagger: 0.05,
    },
    "<20%"
  );

  ln.fromTo(
    ".menu",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.5,
    },
    "<20%"
  );
});
