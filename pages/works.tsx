import Link from "next/link";
import { WorksStyling } from "../styles/Works";
import Header from "./components/Header";
import Cases from "../cases";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function Works() {
  return (
    <WorksStyling>
      <main>
        <Header />
        <div className="main">
          <div className="container">
            <h1 className="main__title">/Works</h1>
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
                  <p className="link">project@viktorholik.com</p>
                  <p className="link">via: linked in</p>
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
      <section className="work-wrapper">
        <div className="container">
          <h1 className="work-title">
            Purpose driven, strategy-led presentations that people care about.{" "}
          </h1>
          <div className="work-inner">
            {Cases.map((work, index) => (
              <Link href={`/works/${work.id}`} key={index}>
                <div className="work-item" key={index}>
                  <div className="left">
                    <div
                      className="case-image"
                      style={{
                        backgroundImage: `url(${work.images[0].src})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div className="right">
                    <div className="top">({work.year})</div>
                    <div className="bottom">
                      <div className="tags-wrapper">
                        {work.tags.map((tag, index) => (
                          <div key={index} className="tag">
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="case-title">{work.name}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </WorksStyling>
  );
}

export default Works;
