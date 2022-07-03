import React from "react";
import styles from "./Title.module.css";

const Title = ({ text, color }) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title} style={{ color: `${color}` }}>
        <span className={styles.headingLineBefore}></span>
        {text}
        <span className={styles.headingLineAfter}></span>
      </h1>
    </div>
  );
};

export default Title;
