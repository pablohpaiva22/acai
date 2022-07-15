import React from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import About from "./About/About";

const Header = () => {
  const navigate = useNavigate();
  const { setGlobs } = React.useContext(GlobalContext);

  const handleClick = () => {
    setGlobs([]);
    navigate("/");
  };

  return (
    <header className={styles.headerBG}>
      <div className={`${styles.header} container`}>
        <h1 onClick={handleClick}>AÇAÍ</h1>

        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/sobre" path={<About />}>
                SOBRE
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
