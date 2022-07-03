import React from 'react'
import ContainerNoticia from '../../components/ContainerNoticia/index'
import Loading from '../../assets/loading/Index'
import useFetch from '../../hooks/fetch/useFetch'
import Header from '../../estrutura/Header/Index'
import Footer from '../../estrutura/Footer/Index'
import Head from '../../hooks/Head/Head'
import Pagination from '../../components/Pagination/index'


const Index = () => {


    const [article, setArticle] = React.useState([])
    const [offset, setOffset] = React.useState(1)
    const {
        loading,
        data,
        codeError,
        articleTotal,
        limit,
        request,
    } = useFetch()



    React.useEffect(() => {

        async function fetchData() {
            const { json } = await request(`top-headlines?&page=${offset}&category=health`)
            setArticle(json.articles)
        }

        fetchData()
    }, [offset, request])

    if (loading) return <Loading />
    return (
        data && (
            <>
                <Head title='Saúde' description="Últimas notícias sobre Saúde" />
                <Header />
                <div>
                    <ContainerNoticia
                        h1={`Saúde`}
                        page={offset}
                        article={article}
                        codeError={codeError}
                    />
                    {articleTotal &&
                        <Pagination
                            limit={limit}
                            total={articleTotal}
                            offset={offset}
                            setOffset={setOffset}
                        />}
                </div>
                <Footer />
            </>


        )
    )
}

export default Index
