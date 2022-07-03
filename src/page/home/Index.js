import React from "react";
import ContainerNoticia from "../../components/ContainerNoticia/index";
import useFetch from "../../hooks/fetch/useFetch";
import Loading from "../../assets/loading/Index";
import Header from "../../estrutura/Header/Index";
import Footer from "../../estrutura/Footer/Index";
import Head from "../../hooks/Head/Head";
import Pagination from "../../components/Pagination/index";

const Index = () => {
  const [article, setArticle] = React.useState([]);
  const [offset, setOffset] = React.useState(1);
  const { data, loading, request, codeError, limit, articleTotal } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(`top-headlines?&page=${offset}`);
      setArticle(json.articles);
    }
    fetchData();
  }, [offset, request]);

  if (loading) return <Loading />;
  return (
    data && (
      <>
        <Header />
        <Head
          title="Portal de Notícias"
          description="Últimas notícias do Dia"
        />
        <div>
          <ContainerNoticia
            h1={`Últimas notícias`}
            page={offset}
            article={article}
            codeError={codeError}
          />
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
    )
  );
};

export default Index;
