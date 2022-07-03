import React from "react";
import styles from "./error.module.css";
import Erro404 from "../../../images/error.png";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={Erro404} alt="404 not found" />
      </div>
      <div className={styles.text}>
        <h1>404</h1>
        <h2>AH AH! Voce esta PERDIDO.</h2>
        <p>
          A página que você está procurando não existe. Como você chegou aqui é
          um mistério. Mas você pode clicar no botão abaixo para voltar à página
          inicial.
        </p>
        <Link to="/" translate="no">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Index;
