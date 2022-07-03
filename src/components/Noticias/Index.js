import React from "react";
import styles from "./index.module.css";

const Index = ({ data, title, content, urlImg, url }) => {
  const horaString = data.split("").slice(11, 16).join("");
  const DataString = data
    .split("")
    .slice(0, 10)
    .join("")
    .replace(/-/g, "/")
    .split("/")
    .reverse()
    .join("/");

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <a href={url} rel="noreferrer" target="_blank">
          <img src={urlImg} alt={title} />
        </a>
      </div>
      <div className={styles.text}>
        <p className={styles.data}>{`${DataString} | ${horaString}`}</p>
        <h1 className={styles.title}>
          <a rel="noreferrer" href={url} target="_blank">
            {title}
          </a>
        </h1>
        <p className={styles.paragraph}>{content}</p>
      </div>
    </div>
  );
};

export default Index;
