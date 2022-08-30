import styled from "styled-components";
import { motion } from "framer-motion";

export const CaseStyling = styled(motion.div)`
  .cases-wrapper {
    margin-top: 100px;
    text-align: center;

    .case {
      margin-bottom: 100px;
    }
  }
  .header {
    margin-top: 25px;
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
  .case-header {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .case-title {
      font-family: var(--title);
      text-transform: uppercase;
      font-weight: 500;
      font-size: 120px;
      font-weight: 800;
      color: var(--light);
    }
    a {
      text-decoration: none;
    }
    .visit-btn {
      cursor: pointer;
      color: var(--light);
      display: flex;
      gap: 10px;
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid var(--light);
      transition: background 0.2s linear;
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }

  .cover-art {
    width: 100%;
    margin-top: 45px;
    height: 700px;
    background-color: #2c2c2c;
  }

  .description-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    font-size: 18px;
    color: var(--light);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .stack-wrapper {
      grid-column: 2;

      .technologies {
        margin-top: 25px;
        .technology {
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
    .case-description {
      grid-column: 1;
      width: 400px;
    }
  }
  .next-case-wrapper {
    margin-top: 100px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 60px 0;
    .next-case {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 300px;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
        }
        .bottom {
          font-size: 64px;
          color: var(--light);
        }
      }
      .right {
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        cursor: pointer;
        &:hover span {
          transform: rotate(45deg);
        }
        span {
          transition: transform 0.4s ease;
          top: calc(50% - 50px);
          left: calc(50% - 50px);
        }
      }
    }
  }
`;
