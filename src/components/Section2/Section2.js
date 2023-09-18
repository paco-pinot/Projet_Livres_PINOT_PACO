import styles from "./section2.module.css"
export default function Section2(props) {
    return (
        <section className={styles.section2}>
            <div className={styles.section2Items}>
                <div className={styles.imgSection2}>
                    <img src={props.data[0].image_url} alt="bookCover" />
                </div> 
                <div className={styles.section2Text}>
                    <p className={styles.saleS2}> SALE UP TO 15% </p>
                    <p>{props.data[1].title}</p>
                    <p className={styles.startingS2}> Starting at: <span> No price</span></p>

                </div>     
            </div>
            <div className={styles.section2Items}>
                <div className={styles.imgSection2}>
                    <img src={props.data[1].image_url} alt="bookCover" />
                </div> 
                <div className={styles.section2Text}>
                    <p className={styles.saleS2}> SALE UP TO 10% </p>
                    <p>{props.data[1].title}</p>
                    <p className={styles.startingS2}> Starting at: <span> No price</span></p>

                </div>    
            </div>
        </section>
    )
  }