gsap
  .timeline()
  .set(".projects-list", { autoAlpha: 1 })
  .from(".wrapper li .inner", {
    duration: 0,
    xPercent: 25,
    yPercent: 125,
    stagger: 0.095,
    skewY: gsap.utils.wrap([-8, 8]),
    ease: "expo.out",
  })
  .set(".projects-list", { pointerEvents: "all" });

gsap.defaults({
  duration: 0.55,
  ease: "expo.out",
});

const menuItems = document.querySelectorAll(".projects-list li ");

menuItems.forEach((item) => {
  const imageWrapper = item.querySelector(".image-wrapper");
  const imageWrapperBounds = imageWrapper.getBoundingClientRect();
  let itemBounds = item.getBoundingClientRect();

  const onMouseEnter = () => {
    gsap.set(imageWrapper, {
      scale: 0.8,
      xPercent: 25,
      yPercent: 50,
      rotation: -15,
    });
    gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
  };

  const onMouseLeave = () => {
    gsap.to(imageWrapper, {
      opacity: 0,
      yPercent: -50,
      xPercent: 25,
      scale: 0.8,
      rotation: -15,
    });
  };

  const onMouseMove = ({ x, y }) => {
    let yOffset = itemBounds.top / imageWrapperBounds.height;
    yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
    gsap.to(imageWrapper, {
      duration: 1.25,
      x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
      y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
    });
  };

  item.addEventListener("mouseenter", onMouseEnter);
  item.addEventListener("mouseleave", onMouseLeave);
  item.addEventListener("mousemove", onMouseMove);
});
