import React from "react";
import styles from "./index.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Index";
import Search from "../../components/Seach/Seach";
import Brazil from "../../assets/icons/brasil.png";
import USA from "../../assets/icons/USA.png";
import useMedia from "../../hooks/useMedia";
import Negocios from "../../page/Negocios/Index";
import Title from "../../components/Title/Title";

const Index = () => {
  const mobile = useMedia("(max-width: 40rem");
  const [btnMobile, setBtnMobile] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setBtnMobile(false);
  }, [pathname]);

  // <header className={`${btnMobile ? styles.headerMobile : styles.header}`}></header>

  return (
    <>
      <header className={styles.header}>
        <div className={styles.Container}>
          {/* <img src={Brazil} alt="Brazil" />
      <img src={USA} alt="USA" />
      <img src={Brazil} />
      <img src={Brazil} />
      <img src={Brazil} /> */}
          {/* <Carrousel /> */}
          <div className={styles.Titles}>
            <h1>Codelândia</h1>
            <nav className={styles.menu}>
              <ul>
                <li>
                  <NavLink end to="/" translate="no">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sobre">Sobre</NavLink>
                </li>
                <li>
                  {mobile && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBtnMobile(!btnMobile);
                      }}
                      className={`${styles.mobileButton} ${
                        btnMobile && styles.btnMobileActive
                      }`}
                    ></button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <Search />

          {
            <nav
              className={`${mobile ? styles.navMobile : styles.nav} ${
                btnMobile && styles.btnMobileActive
              }`}
              onClick={() => {
                if (!mobile) setBtnMobile(false);
                else if (setBtnMobile(!btnMobile));
              }}
            >
              <div className={`${btnMobile && styles.links}`}>
                <NavLink to="/ultimasnoticias">- Últimas notícias</NavLink>

                <NavLink to="/negocios">- Negócios</NavLink>

                <NavLink to="/esporte">- Esporte</NavLink>

                <NavLink to="/tecnologia">- Tecnologia</NavLink>

                <NavLink to="/entretenimento">- Entretenimento</NavLink>

                <NavLink to="/saude">- Saúde</NavLink>

                <NavLink to="/ciencia">- Ciência</NavLink>
              </div>
            </nav>
          }
        </div>
      </header>
    </>
  );
};

export default React.memo(Index);
