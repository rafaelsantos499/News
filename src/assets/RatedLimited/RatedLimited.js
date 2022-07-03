import React from "react";
import styles from "./rateLimited.module.css";
import Titles from "../../components/Title/Title";
import { Link } from "react-router-dom";

import Github from "../../images/SocialMedia/github.svg";
import Linkedin from "../../images/SocialMedia/linkedin.svg";

const Index = () => {
  return (
    <div className={styles.rateLimited}>
      <div className={styles.content}>
        <Titles text={"limite de Acesso"} />
        <div className={styles.text}>
          <p>Infelizmente a Api possui um limite de Acesso diario.</p>
          <p>
            Veja mais sobre o Site
            <Link style={{ color: "blue" }} to="/sobre">
              {" "}
              AQUI
            </Link>
          </p>
          <br />
          <p>Qual quer duvida entre em contato: </p>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://github.com/rafaelsantos499" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-santos-21a504217/"
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
