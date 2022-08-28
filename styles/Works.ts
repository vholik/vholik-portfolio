import styled from "styled-components";
import { motion } from "framer-motion";

export const WorksStyling = styled(motion.div)`
  main {
    height: 100vh;
    background-repeat: no-repeat;
    z-index: 0;
    background-size: cover;
    padding: 25px 0 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
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
        .header__description {
          font-size: 14px;
        }
        .menu {
          text-decoration: underline;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
    .main {
      &__title {
        font-family: "Neue Haas Grotesk Display Pro";
        font-weight: 500;
        font-size: 7.5vw;
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
  .work-wrapper {
    .work-title {
      font-size: 64px;
      color: var(--light);
      font-weight: 400;
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
            font-size: 64px;
            color: var(--light);
            cursor: pointer;
          }
        }
      }
    }
  }
`;
