import { FooterStyling } from "../../styles/Home";
import Image from "next/image";
import ArrowRight from "../images/arrow-right.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

function Footer() {
  const footer = useRef(null);
  const hireSection = useRef(null);
  useEffect(() => {
    gsap.set(footer.current, { yPercent: -50 });

    const uncover = gsap.timeline({ paused: true });

    uncover.to(footer.current, { yPercent: 0, ease: "none" });

    ScrollTrigger.create({
      trigger: hireSection.current,
      start: "bottom bottom",
      end: "+=75%",
      animation: uncover,
      scrub: true,
      markers: false,
    });
  });
  return (
    <FooterStyling>
      <div className="hire-me" ref={hireSection}>
        <div className="container">
          <div className="hire-me__inner">
            <div className="left">
              <p className="link-item">
                <span className="link">project@viktorholik.com</span>
              </p>
              <p className="link-item">
                via: <span className="link">linked in</span>
              </p>
            </div>
            <div className="right">
              <h2 className="hire-me__title">
                I am always up to work and offers, hit me up!
              </h2>
              <button className="hire-me__button">
                Hire me
                <Image src={ArrowRight} height={25} width={25} alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section id="footer">
        <div className="container">
          <div className="footer" ref={footer}>
            <h1 className="footer__title">(Contacts + Social Media)</h1>
            <div className="footer__inner">
              <div className="col">
                <a
                  href="https://www.linkedin.com/in/viktorholik/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="nav-link">
                    via: <span className="link">linked in</span>
                  </p>{" "}
                </a>
              </div>
              <div className="col">
                <h2 className="col__title">Give me a call or send a message</h2>
                <a href="tel:+380665058983">
                  <p className="nav-link">tel: +38-(0)-665-505-8983</p>
                </a>
                <a href="mailto:1viktorholik@gmail.com">
                  <p className="nav-link">mail: 1viktorholik@gmail.com</p>
                </a>
              </div>
              <div className="col">
                <p className="nav-link">
                  <span className="link">Behance</span>
                </p>
                <p className="nav-link">
                  <span className="link">Instagram</span>
                </p>
                <p className="nav-link">
                  <span className="link">Facebook</span>
                </p>
                <p className="nav-link">
                  <span className="link">LinkedIn</span>
                </p>
              </div>
            </div>
            <p className="footer-bottom">
              © 2022 Viktor Holik. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </FooterStyling>
  );
}

export default Footer;
