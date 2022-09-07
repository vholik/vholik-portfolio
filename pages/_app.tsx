import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingStyling, MenuStyling } from "../styles/Home";
import "../public/fonts/font1/stylesheet.css";
import "../public/fonts/font2/stylesheet.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { showMenu } from "../redux/appSlice";
import Link from "next/link";

function Loading() {
  const [dots, setDots] = useState(0);
  setTimeout(() => {
    if (dots === 3) {
      setDots(0);
    } else {
      setDots(dots + 1);
    }
  }, 500);
  return (
    <LoadingStyling>
      {/* <div className="text-line">V</div>
      <div className="text-line">H</div> */}
      <p className="loading-text">
        Loading experience
        {dots === 1 && (
          <div className="dot">
            <span>.</span>
          </div>
        )}
        {dots === 2 && (
          <div className="dot">
            .<span>.</span>
          </div>
        )}
        {dots === 3 && (
          <div className="dot last-dot">
            ..<span>.</span>
          </div>
        )}
      </p>
    </LoadingStyling>
  );
}

const Menu = () => {
  const dispatch = useDispatch();
  return (
    // style={isShowMenu ? { display: "block" } : { display: "none" }}
    <div>
      <MenuStyling>
        <div className="container">
          <div className="menu-inner">
            <div className="menu-button" onClick={() => dispatch(showMenu())}>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="link-wrapper">
              <Link href={"/"}>
                <span className="link" onClick={() => dispatch(showMenu())}>
                  HOME
                </span>
              </Link>
              <Link href={"/about"}>
                <span className="link" onClick={() => dispatch(showMenu())}>
                  ABOUT
                </span>
              </Link>
              <Link href={"/works"}>
                <span className="link" onClick={() => dispatch(showMenu())}>
                  WORKS
                </span>
              </Link>
            </div>
            <p className="contact-link">Lets work together</p>
            <div className="social-wrapper">
              <span className="social-link">INSTAGRAM</span>
              <span className="social-link">LINKEDIN</span>
              <span className="social-link">FACEBOOK</span>
            </div>
          </div>
        </div>
      </MenuStyling>
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowContent, setIsShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShowContent(true), 4000);
    setTimeout(() => setIsLoading(false), 5000);
  });
  return (
    <Provider store={store}>
      <>
        <App />
        {isLoading && <Loading />}
        {isShowContent && <Component {...pageProps} />}
      </>
    </Provider>
  );
}

function App() {
  const isMenuShown = useSelector((state: RootState) => state.menu);
  console.log(isMenuShown);

  return <>{isMenuShown && <Menu />}</>;
}

export default MyApp;
