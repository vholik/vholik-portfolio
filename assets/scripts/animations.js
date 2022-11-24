const tlLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
});

tlLine.fromTo(
  ".line-inner",
  { translateY: "100%" },
  { translateY: "0%", stagger: 0.2, delay: 0.5 }
);

tlLine.fromTo(
  ".fade",
  {
    opacity: 0,
  },
  { opacity: 1, stagger: 0.2, duration: 2, ease: "Power2.easeOut" },
  "<0%"
);

tlLine.fromTo(
  ".webglholder",
  {
    opacity: 0,
  },
  { opacity: 1, duration: 2, ease: "Power2.easeOut" },
  "<10%"
);

const skillsLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
  scrollTrigger: {
    trigger: ".skills",
    // markers: { startColor: "white", endColor: "white" },
    start: "-20%",
  },
});

const carouselLine = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
  scrollTrigger: {
    trigger: ".work",
    // markers: { startColor: "white", endColor: "white" },
    start: "-30%",
    end: "50%",
    scrub: true,
  },
});

carouselLine.fromTo(
  ".section-carousel__inner",
  {
    x: -800,
  },
  {
    x: -400,
    duration: 2,
    ease: "Power2.easeOut",
  }
);

skillsLine.fromTo(
  ".border",
  {
    width: "0%",
    opacity: 0,
  },
  {
    opacity: 1,
    width: "100%",
    duration: 2,
    ease: "Power2.easeOut",
  }
);

skillsLine.fromTo(
  ".animated",
  {
    y: "20px",
    opacity: 0,
  },
  {
    opacity: 1,
    y: "0px",
    duration: 1,
    ease: "Power2.easeOut",
  },
  "<0%"
);
