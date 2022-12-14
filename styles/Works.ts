import styled from "styled-components";
import { motion } from "framer-motion";

export const WorksStyling = styled(motion.div)`
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
  .work-wrapper {
    .work-title {
      font-size: 64px;
      color: var(--light);
      font-weight: 500;
    }
    .work-inner {
      margin-top: 100px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      .work-item {
        padding: 60px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 60px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .left {
          width: 100%;
          .case-image {
            background-color: #2c2c2c;
            border-radius: 30px;
            height: 500px;
            width: 100%;
            background-size: cover;
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .top {
            font-size: 32px;
            color: rgba(241, 241, 241, 0.6);
          }
          .tags-wrapper {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
            .tag {
              text-transform: uppercase;
              padding: 8px 16px;
              color: var(--light);
              border-radius: 20px;
              border: 1px solid var(--light);
            }
          }
          .case-title {
            font-family: "Circular Air Light", serif;
            text-transform: uppercase;
            font-size: 41px;
            font-weight: 800;
            margin-top: 25px;
            color: var(--light);
            cursor: pointer;
          }
        }
      }
    }
  }
  @media (max-width: 1500px) {
    .main__title {
      font-size: 41px !important;
      width: 60%;
    }
    .about__text {
      font-size: 41px !important;
      width: 80%;
    }
    .header__title {
      font-size: 41px !important;
    }
  }
  @media (max-width: 1300px) {
    .nav {
      opacity: 0;
      pointer-events: none;
    }
    .case {
      height: 500px !important;
      &__title {
        font-size: 28px !important;
      }
    }
  }
  @media (max-width: 1000px) {
    .work-item {
      display: block !important;

      .right {
        margin-top: 45px;
        .top {
          display: none !important;
        }
      }
    }
    .animated-text {
      font-size: 8vw;
      width: 80%;
    }
    .main__title {
      font-size: 36px !important;
      width: 80% !important;
      margin-bottom: 45px;
    }
    .about__text {
      font-size: 36px !important;
      width: 100%;
    }
    .button-wrapper {
      justify-content: left !important;
    }
    .case {
      padding: 25px 15px !important ;
      height: 400px !important;
      grid-column-start: 1 !important;
      grid-column-end: 3 !important;
    }
  }
  @media (max-width: 600px) {
    .case-image {
      height: 300px !important;
    }
    .header__title {
      font-size: 36px !important;
    }
    .main__title {
      width: 100% !important;
    }
    main {
      justify-content: none;
    }
    .header__link {
      display: none !important;
    }
    .animated-text {
      font-size: 10vw;
      width: 80%;
    }
  }
  @media (max-width: 500px) {
    .logo {
      width: 50% !important;
    }
    .header__inner {
      display: flex !important;
      justify-content: space-between;
    }
    .main__title {
      font-size: 28px !important;
    }
    .nav {
      display: none !important;
    }
    .about__text {
      font-size: 28px !important;
    }
    .animated-text {
      font-size: 14vw;
    }
  }
`;
