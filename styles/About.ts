import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutStyling = styled(motion.div)`
  main {
    height: 100vh;
    background-repeat: no-repeat;
    z-index: 0;
    background-size: cover;
    padding: 25px 0 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .button-wrapper {
      display: flex;
      justify-content: end;
      gap: 25px;
    }
    .main-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
    }
    video {
      object-fit: cover;
      opacity: 0.3;
      position: absolute;
      top: 0;
      z-index: -10;
      min-width: 100%;
      height: 100%;
    }
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
          .nav-link {
            cursor: pointer;
          }
        }
        .menu {
          padding-bottom: 10px;
          padding-top: 10px;
          &:hover .menu-line {
            background-color: var(--dark);
          }
          .menu-line {
            height: 1px;
            width: 52px;
            background-color: var(--light);
            transition: background 0.3s linear;
            &:nth-child(2) {
              margin-top: 10px;
            }
          }
        }
      }
    }
    .main {
      &__title {
        /* font-family: var(--title); */
        font-size: 54px;
        font-family: "Circular Air Light", serif;
        color: var(--light);
        width: 50%;
        .highlight {
          text-decoration: underline;
          color: var(--light) !important;
        }
      }
    }
  }
  #about {
    margin-top: 100px;
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
