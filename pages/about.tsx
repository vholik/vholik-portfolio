import { AboutStyling } from "../styles/About";
import Link from "next/link";
import Footer from "./components/Footer";
import ArrowUp from "./images/arrow-up.svg";
import Image from "next/image";
import Header from "./components/Header";
import { motion } from "framer-motion";

function About() {
  return (
    <AboutStyling>
      <main>
        <Header />
        <div className="main">
          <div className="container">
            <h1 className="main__title">/About</h1>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <div className="navbar__wrapper">
              <div className="navbar-item">
                <p className="link">(Hire me)</p>
              </div>
              <div className="navbar-item">
                <p className="navbar-item__header">Contact me</p>
                <div className="right">
                  <a href="mailto:1viktorholik@gmail.com">
                    <p className="link">1viktorholik@gmail.com</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/viktorholik/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="link">linked in</p>
                  </a>
                </div>
              </div>
              <div className="navbar-item">
                <p className="navbar-item__header">About me</p>
                <div className="right">
                  <p className="about-me">
                    Front-end developer with experience in react + redux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section id="about">
        <div className="container">
          <p className="about-text">
            <div className="line">
              <div className="space"></div>
              <div className="line-inner">
                I divide large and complex tasks into
              </div>
            </div>
            <div className="line">
              self-sufficient and trasparent stages according tocore
              competencies. After that, I combine them for the maximum possible
              result into asingle system
            </div>
          </p>
          <div className="about-subtitle">
            The design is based on deep immersion in the project, painstaking
            analysing of your niche and user needs, But that is not all
            <div className="resume-link">
              Download my resume
              <Image src={ArrowUp} alt="Download resume" />
            </div>
          </div>
          <div className="photo"></div>
        </div>
      </section>
      <Footer />
    </AboutStyling>
  );
}

export default About;
