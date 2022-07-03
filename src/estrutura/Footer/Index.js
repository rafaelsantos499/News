import React from "react";
import SliderFooter from "../../components/slideFooter/SliderFooter";
import useFetch from "../../hooks/fetch/useFetch";
import styles from "./Footer.module.css";
import { CATEGORY } from "../../api";
import { CATEGORYSLIDE } from "../../api";

const Index = () => {
  const { request, setLimit } = useFetch();

  const [esports, setEsports] = React.useState("");
  const [entertainment, setEntertainment] = React.useState("");
  const [science, setScience] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [health, setHealth] = React.useState("");
  const [technology, setTechnology] = React.useState("");

  const pageSize = 3;

  React.useEffect(() => {
    async function fetchCategory() {
      await CATEGORY(request, "sports", setEsports);
    }
    fetchCategory();
  }, [request]);

  React.useEffect(() => {
    async function fetchCategory() {
      await CATEGORY(request, "entertainment", setEntertainment);
    }
    fetchCategory();
  }, [request]);

  ///slide

  React.useEffect(() => {
    async function fetchCategory() {
      await CATEGORYSLIDE(request, "science", setScience);
    }
    fetchCategory();
  }, [request]);

  React.useEffect(() => {
    async function fetchCategory() {
      await CATEGORYSLIDE(request, "business", setBusiness);
    }
    fetchCategory();
  }, [request]);

  React.useEffect(() => {
    async function fetchCategory() {
      await CATEGORYSLIDE(request, "health", setHealth);
    }
    fetchCategory();
  }, [request]);

  React.useEffect(() => {
    async function fetchCategory() {
      await CATEGORYSLIDE(request, "technology", setTechnology);
    }
    fetchCategory();
  }, [request]);

  return (
    <div className={styles.background}>
      {esports && (
        <div className={styles.container}>
          <div className={styles.sports}>
            <h1>Esportes</h1>
            <ul>
              {esports &&
                esports.map(({ title }) => (
                  <li key={title}>
                    <p>{title}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.sports}>
            <h1>Entretenimento</h1>
            <ul>
              {entertainment &&
                entertainment.map(({ title }) => (
                  <li key={title}>
                    <p>{title}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.slide}>
            {science && (
              <SliderFooter
                //slide 1
                slide1={science.urlToImage}
                title1={science.title}
                link1={science.url}
                //slide 2
                slide2={business.urlToImage}
                title2={business.title}
                link2={business.url}
                //slide 3
                slide3={health.urlToImage}
                title3={health.title}
                link3={health.url}
                //slide 4
                slide4={technology.urlToImage}
                title4={technology.title}
                link4={technology.url}
              />
            )}
          </div>
        </div>
      )}
      <div className={styles.reseved}>
        {" "}
        <h1 style={{ color: "white" }}>Quase Todos os direitos Reservado.</h1>
      </div>
    </div>
  );
};

export default Index;
