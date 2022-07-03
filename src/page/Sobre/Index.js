import React from "react";
import Header2 from "../../estrutura/Header2/Header2";
import styles from "./Sobre.module.css";
import Head from "../../hooks/Head/Head";
import Title from "../../components/Title/Title";

const Index = () => {
  return (
    <>
      <Head
        title="Sobre o Projeto"
        description="Esse Projeto foi feito para Estudos. 
         A fim de melhorar o conhecimentos em React. "
      />
      <Header2 />
      <div className={`container ${styles.sobre}`}>
        <Title text="Sobre o Projeto" />
      </div>
    </>
  );
};

export default Index;
