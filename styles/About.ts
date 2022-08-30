import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutStyling = styled(motion.div)`
  main {
    height: 100vh;
    padding: 25px 0 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
      &__inner {
        display: grid;
        color: var(--light);
        grid-template-columns: 1fr 1fr 1fr;

        .logo {
          font-size: 28px;
          cursor: pointer;
        }
        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
        }
        .header__description {
          font-size: 14px;
        }
        .menu {
          text-decoration: underline;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
    .main {
      &__title {
        font-family: var(--title);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 8vw;
        font-weight: 800;
        margin-top: 4vw;
        color: var(--light);
      }
    }
    .navbar {
      .navbar__wrapper {
        color: var(--light);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .navbar-item {
        display: flex;
        gap: 45px;
        .about-me {
          font-size: 1.5vw;
        }
        .link {
          text-decoration: underline;
          font-size: 1.5vw;
        }
        &__header {
          font-size: 14px;
          color: rgba(241, 241, 241, 0.6);
          min-width: fit-content;
        }
      }
    }
  }
  #about {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .about-text {
        color: var(--light);
        grid-column: 1/4;
        .line:first-child {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          .line-inner {
            grid-column: 2/4;
          }
          .space {
            grid-column: 1;
          }
        }
        font-size: 64px;
      }
    }
    .about-subtitle {
      margin-top: 45px;
      grid-column: 2;
      width: 300px;
      color: rgba(255, 255, 255, 0.6);
      .resume-link {
        cursor: pointer;
        margin-top: 25px;
        color: var(--light);
        span {
          left: 10px;
        }
      }
    }
    .photo {
      grid-column: 3;
      min-height: 600px;
      background-color: var(--light);
    }
  }
`;
