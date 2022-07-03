import React from 'react'
import styles from './loading.module.css'

const Index = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.container}>
                <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Index