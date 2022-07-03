import styles from './Carroucel.module.css'
import React from 'react'
import useFetch from '../../hooks/fetch/useFetch'

const Index = (props) => {

    const { request } = useFetch()

    const [article, setArticle] = React.useState([])
    const [pixel, setPixel] = React.useState(0)

    const carrousel = React.useRef(null)
    const containerCarroucel = React.useRef(null)

    React.useEffect(() => {

        const category = ['science', 'entertainment', 'sports', 'business', 'health', 'technology']
        const categoryRandon = category[Math.floor(Math.random() * category.length)]


        async function fetchData() {
            const { json } = await request(`top-headlines?pageSize=5&country=br&category=${categoryRandon}`)
            const allDate = json.articles

            const teste = allDate.map(({ title, url }) =>
                <li ref={carrousel} key={title}><a href={url} target='_blank'>{title}</a></li>
            )
            setArticle(teste)
        }
        fetchData()
    }, [])



    // React.useEffect(() => {

    // })

    // const time = setInterval(() => {
    //     setPixel(pixel + 0.3)
    // }, 15)

    // if (pixel === 375.6000000000085) {
    //     clearInterval(time)
    //     setPixel(0)
    // }

    // console.log(pixel);







    return (
        <div className={styles.container}>
            <div >
                <div>
                    <ul ref={containerCarroucel} className={styles.carrousel} style={{ transform: `translateX(-${pixel}px)`, transition: 'linear' }}  >
                        {article}
                    </ul>
                </div>

            </div>
        </div>


    )
}

export default Index
