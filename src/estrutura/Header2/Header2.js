import React from "react";
import styles from "./Header2.module.css";
import { Link, NavLink } from "react-router-dom";

const Header2 = () => {
  return (
    <>
      {" "}
      <header className={styles.header}>
        <div className={`container ${styles.container} `}>
          <div className={`logo ${styles.titles}`}>
            <h1>Codelândia</h1>
            <nav className={styles.menu}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/sobre">Sobre</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
