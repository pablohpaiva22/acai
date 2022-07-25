import React from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

const Header = () => {
  const navigate = useNavigate();
  const { setGlobs } = React.useContext(GlobalContext);

  const handleClick = () => {
    setGlobs([]);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.logo} onClick={handleClick}>
          AÇAÍ
        </h1>

        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/sobre"
          >
            SOBRE
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
