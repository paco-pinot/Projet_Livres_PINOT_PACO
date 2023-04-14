import styles from "./footer.module.css"
import { IoHelpBuoy } from "react-icons/io5";
export default function Footer() {
    return (
    
       <footer>
       <div className={styles.footerContainer}>
            <div className={styles.topFooter}>
                <div className={styles.topFooterItem}>
                    <div className={styles.imgFooter}>
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div className={styles.textFooter}>
                        <h3>Book Information?</h3>
                        <p>Please send us an email at support@gmail.com</p>
                    </div>
                </div>
                <div className={styles.topFooterItem}>
                    <div className={styles.imgFooter}>
                        <IoHelpBuoy/>
                    </div>
                    <div className={styles.textFooter}>
                        <h3>Need Help?</h3>
                        <p>Please call us at 0123456789</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.bottomFooterItem}>
                    <h2>Bookshelf</h2>
                </div>
                <div className={styles.bottomFooterItem}>
                    <p> © 2023 All right reserved. Made with love by ❤ ThemeAtelier </p>
                </div>
            </div>
        </div>
       </footer> 
    
    )
  }