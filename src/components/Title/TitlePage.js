import React from "react";
import styles from "./Title.module.css";

const Index = ({ text, page, verification }) => {
  const verificação = page === 1;

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className={styles.headingLineBefore}></span>
        {text}
        <span className={styles.headingLineAfter}></span>

        {verificação ? (
          <p></p>
        ) : (
          <p className={styles.page}>&nbsp;Pagina:&nbsp;{page}</p>
        )}
      </h1>
    </div>
  );
};

export default Index;
