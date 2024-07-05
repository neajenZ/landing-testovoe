import styles from './cardFeedback.module.css'


export const CardFeedback = ({data}) => {


    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img src={data.avatar} alt=""/>
                    <div className={styles.userData}>
                        <h4>{data.name}</h4>
                        <div className={styles.userTag}>{data.userTag}</div>
                    </div>
                </div>
                <div className={styles.description}>
                    <p>
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}