import Link from "next/link";
import { useDispatch } from "react-redux";
import { HomeStyling } from "../../styles/Home";
import { showMenu } from "../redux/appSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <HomeStyling>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <Link href="/">
              <div className="logo nav-item">VIKTOR HOLIK</div>
            </Link>
            <div className="nav nav-item">
              <Link href="/">
                <p className="nav-link">Main</p>
              </Link>
              <p>/</p>
              <Link href="/works">
                <p className="nav-link">Works</p>
              </Link>
              <p>/</p>
              <Link href="/about">
                <p className="nav-link">About</p>
              </Link>
            </div>
            <div className="nav-item nav-wrapper">
              <p className="header__description">
                Front-end developer based in Poland
              </p>
              <p className="menu" onClick={() => dispatch(showMenu())}>
                MENU
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeStyling>
  );
}

export default Header;
