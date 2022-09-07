import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuStyling = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--dark);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .container {
    position: relative;
  }
  .menu-inner {
    .menu-button {
      padding-bottom: 20px;
      padding-top: 20px;
      position: fixed;
      top: 30px;
      right: 100px;
      cursor: pointer;

      .line {
        top: 100px;
        height: 1px;
        width: 52px;
        background-color: var(--light);
      }
      .line:nth-child(1) {
        transform: rotate(45deg);
      }
      .line:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
    .social-wrapper {
      position: fixed;
      display: flex;
      bottom: 45px;
      right: 75px;
      flex-direction: column;
      .social-link {
        cursor: pointer;
        color: var(--light);
        font-size: 21px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .link-wrapper {
      display: flex;
      flex-direction: column;
      .link {
        font-family: "Circular Air Light", serif;
        cursor: pointer;
        width: fit-content;
        padding-bottom: 25px;
        font-size: 96px;
        color: var(--light);
        transition: transform 0.2s ease, color 0.2s ease;
        &:hover {
          color: #858585;
          transform: translateX(10px);
        }
      }
    }
    .contact-link {
      position: fixed;
      bottom: 45px;
      color: var(--light);
      font-size: 18px;
      text-decoration: underline;
    }
  }
  @media (max-width: 1000px) {
    .social-wrapper {
      right: 5% !important;
    }
    .link {
      font-size: 64px !important;
    }
    .menu-button {
      top: 5% !important;
      right: 5% !important;
    }
  }
  @media (max-width: 500px) {
    .link {
      font-size: 28px !important;
    }
    .social-wrapper {
      display: none !important;
    }
  }
`;

export const LoadingStyling = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--dark);
  z-index: 100;
  animation: loading 5s ease forwards;
  @keyframes lastDotAnim {
    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes dotAnim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  .last-dot {
    animation: lastDotAnim 1s linear;
  }
  .dot {
    font-size: 5vw;
    color: var(--light);
    span {
      animation: dotAnim 1s linear;
    }
  }
  p {
    display: flex;
    padding: 23px;
    font-size: 5vw;
    color: var(--light);
  }

  @keyframes loading {
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const HomeStyling = styled(motion.div)`
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
      right: 0;
      left: 0;
      bottom: 0;
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
  #body {
    position: relative;
    background-color: var(--dark);
    /* border-radius: 100px 100px 0 0; */
  }
  .about {
    padding-top: 200px;
    &__text {
      font-size: 54px;
      width: 60%;
      color: var(--light);
      font-weight: 400;
    }
    &__link {
      display: flex;
      gap: 10px;
      color: var(--light);
      font-size: 16px;
      margin-top: 45px;
      cursor: pointer;
      transition: gap 0.1s ease;
      &:hover {
        gap: 15px;
      }
    }
  }
  .work {
    margin-top: 200px;
    color: var(--light);
    .all-works-btn {
      display: block;
      margin: 45px auto 0 auto;
      border-radius: 35px;
      background-color: transparent;
      color: var(--light);
      border: 1px solid var(--light);
      font-size: 23px;
      padding: 8px 16px;
      font-family: "Circular Air Light", serif;
      cursor: pointer;
      transition: background 0.2s linear;
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    .header {
      display: flex-;
      align-items: center;
      justify-content: space-between;
      &__link {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: gap 0.1s ease;
        span {
          transition: transform 0.2s ease;
        }
        &:hover span {
          transform: translateX(5px);
        }
      }
      &__title {
        font-size: 54px;
        /* text-transform: uppercase; */
      }
    }
    .work-wrapper {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      grid-column-gap: 50px;
      grid-row-gap: 50px;
      .case:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .case {
        height: 700px;
        padding: 35px 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        position: relative;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1;
        .case-image {
          border-radius: 30px;
          z-index: -1;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          content: "";
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          opacity: 1;
          transition: opacity 0.2s linear;
          &:hover {
            opacity: 0.6;
          }
        }
        &:hover {
          backdrop-filter: blur(10px);
        }
        &:hover .case__title {
          opacity: 1;
        }
        &:hover .tags-wrapper {
          opacity: 1;
        }
        &__title {
          transition: 0.3s ease;
          opacity: 0;
          font-size: 41px;
          text-align: center;
          font-weight: 400;
          font-family: "Circular Air Light", serif;
        }
        .tags-wrapper {
          transition: 0.3s ease;
          opacity: 0;
          display: flex;
          gap: 10px;
          .tag {
            border-radius: 20px;
            background-color: transparent;
            color: var(--light);
            border: 1px solid var(--light);
            font-size: 16px;
            font-weight: 500;
            padding: 8px 16px;
            font-family: "Circular Air Light", serif;
          }
        }
      }
    }
  }
  .animated-text {
    color: var(--light);
    font-weight: 400;
    margin-top: 200px;
    width: 70%;
    font-family: "Circular Air Light", serif;
    /* text-transform: uppercase; */
    font-size: 7vw;
    &__hidden-text {
      opacity: 0.3;
    }
  }
  .cover {
    width: 100%;
    height: 70vh;
    background-color: #2c2c2c;
    margin-top: 200px;
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

export const FooterStyling = styled.div`
  overflow: hidden;

  .hire-me {
    margin-top: 200px;
    color: var(--light);
    background-color: var(--dark);
    position: relative;
    z-index: 10;
    border-radius: 10vw !important;
    padding-bottom: 200px;
    &__title {
      font-size: 54px;
      font-family: "Circular Air Light", serif;
      font-weight: 400;
      width: 60%;
    }
    &__button {
      font-weight: 500;
      margin-top: 45px;
      border-radius: 35px;
      background-color: transparent;
      color: var(--light);
      border: 1px solid var(--light);
      font-size: 21px;
      padding: 8px 16px;
      font-family: "Circular Air Light", serif;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: background 0.2s linear;
      span {
        transition: transform 0.2s ease;
      }
      &:hover span {
        transform: translateX(5px);
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    &__inner {
      display: grid;
      grid-template-columns: 1fr 2fr;
      .link-item {
        font-size: 21px;
        .link {
          text-decoration: underline;
        }
      }
    }
  }
  #footer {
    background-color: var(--light);
  }
  .footer {
    padding-top: 100px;
    z-index: 0;
    padding-bottom: 50px;

    &__title {
      font-size: 54px;
      font-weight: 500;
      color: var(--dark);
      font-family: "Circular Air Light", serif;
    }
    &__inner {
      margin-top: 200px;
      display: grid;
      grid-column-gap: 45px;
      grid-template-columns: repeat(3, 1fr);
    }
    .col {
      color: var(--dark);
      font-size: 28px;
      .link {
        text-decoration: underline;
      }
      &__title {
        margin-bottom: 45px;
        font-weight: 500;
      }
    }
    .footer-bottom {
      color: var(--dark);
      font-size: 16px;
      margin-top: 200px;
    }
  }
  @media (max-width: 1150px) {
    .hire-me__inner {
      display: block;
      .right {
        margin-top: 25px;
      }
      .hire-me__title {
        font-size: 41px;
        width: 80%;
      }
    }
    .footer__title {
      font-size: 41px;
    }
    .footer__inner {
      margin-top: 150px;
      display: block;
      .col {
        margin-bottom: 45px;
      }
    }
  }

  @media (max-width: 700px) {
    a {
      font-size: 18px !important;
    }
    .col__title {
      font-size: 36px;
    }
  }
`;
