import styles from './achivements.module.css'


export const Achivements = () => {
    return (
        <div className={styles.body}>
            <div className={styles.item}>
                <h4>20K+</h4>
                <p>subscribers</p>
            </div>
            <div className={styles.item}>
                <h4>19,5K</h4>
                <p>successful cases</p>
            </div>
            <div className={styles.item}>
                <h4>4.8/5</h4>
                <p>rating</p>
            </div>
        </div>
    )
}