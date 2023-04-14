import styles from "./newsletter.module.css"
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
export default function NewsLetter(props) {
    return (
    <section className={styles.sectionNewsletter}>
        <div className={styles.newsletterContainer}>
            <div className={styles.leftNewsLetter}>
                <img src={props.data[4].image_url} alt="" />
            </div>
            <div className={styles.rightNewsLetter}>
                <h3>Join Our Community</h3>
                <p>Sign up & get 10% of your first books. </p>
                <div className={styles.inputNewsletter}>
                    <form action="">
                        <input type="email" placeholder="Your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className={styles.reseauxNewsLetter}>
                    <FaFacebookF className={styles.reseauxItems}/>
                    <FaTwitter className={styles.reseauxItems}/>
                    <FaInstagram className={styles.reseauxItems}/>
                    <FaLinkedinIn className={styles.reseauxItems}/>
                    <FaYoutube className={styles.reseauxItems}/>
                </div>
            </div>
        </div>
    </section>
    )
  }