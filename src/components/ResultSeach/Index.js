import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/fetch/useFetch";
import Header from "../../estrutura/Header/Index";
import Footer from "../../estrutura/Footer/Index";
import ContainerNoticia from "../ContainerNoticia/index";
import Loading from "../../assets/loading/Index";
import Pagination from "../Pagination/index";

const Index = () => {
  const params = useParams();
  const [article, setArticle] = React.useState([]);
  const [offset, setOffset] = React.useState(1);
  const { resultSeach, data, loading, codeError, limit, articleTotal } =
    useFetch();

  React.useEffect(() => {
    setOffset(1);
  }, [params]);

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await resultSeach(
        `everything?q=${params.id}&page=${offset}&sortBy=publishedAt`
      );
      setArticle(json.articles);
    }
    fetchData();
  }, [params, offset, resultSeach]);

  if (loading) return <Loading />;
  return (
    <>
      <Header />
      <div>
        {data && (
          <ContainerNoticia
            h1={`Pesquisa: ${params.id} `}
            page={offset}
            article={article}
            codeError={codeError}
          />
        )}
        {articleTotal && (
          <Pagination
            limit={limit}
            total={articleTotal}
            offset={offset}
            setOffset={setOffset}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Index;
