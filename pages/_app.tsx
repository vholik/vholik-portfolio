import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingStyling } from "../styles/Home";
import "../public/fonts/font1/stylesheet.css";
import "../public/fonts/font2/stylesheet.css";

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

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowContent, setIsShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShowContent(true), 4000);
    setTimeout(() => setIsLoading(false), 5000);
  });

  return (
    <>
      {isLoading && <Loading />}
      {isShowContent && <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
