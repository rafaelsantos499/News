import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import styles from './Pagination.module.css'
import ultimasNoticias from '../../page/UltimasNoticias/Index'

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const index = ({ limit, total, offset, setOffset }) => {

    const current = offset
    const pages = Math.ceil(total / limit)
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
    );


    return (
        <nav className={styles.container}>

            <ul>
                <button
                    disabled={current === 1}
                    onClick={() => setOffset(current - 1)}
                    className={styles.navigationPrev}>
                    Anterior
                </button>
                {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                    .map((_, index) => index + first)
                    .map(page =>
                        <li key={page} className={page === current ? styles.active : ''}>
                            <button
                                className={styles.navitionPage}
                                onClick={() => {
                                    document.body.style.height = '0'
                                    setOffset(page)
                                }}
                            >
                                {page}
                            </button>
                        </li>)
                }
                <button
                    disabled={current === pages}
                    onClick={() => setOffset(current + 1)}
                    className={styles.navigationNext}>
                    Proximo
                </button>
            </ul>

        </nav>
    )
}

export default index
