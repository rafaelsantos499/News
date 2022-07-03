import styles from "./index.module.css";
import React from "react";
import Titles from "../Title/TitlePage";
import Noticias from "../../components/Noticias/Index";
import RatedLimited from "../../assets/RatedLimited/RatedLimited";

const index = ({ h1, page, article, codeError, offSet }) => {
  if (codeError === 429) return <RatedLimited />;
  return (
    <main className={styles.notice}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Titles text={h1} page={page} offSet={offSet} verification={true} />
        </div>
        {article.length === 0 && (
          <div
            className={styles.container}
            style={{ textAlign: "center", paddingTop: "20px" }}
          >
            <h2>Infelizmente não Achamos nada</h2>
            <p style={{ fontSize: "100px" }}>&#128533;</p>
          </div>
        )}
        {article &&
          article.map(
            ({ title, publishedAt, description, urlToImage, url }) => (
              <Noticias
                key={title}
                data={publishedAt}
                title={title}
                content={description}
                urlImg={urlToImage}
                url={url}
              />
            )
          )}
      </div>
    </main>
  );
};

export default index;
