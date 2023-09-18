import styles from "./card2.module.css";
import { motion } from "framer-motion";
import  {AiOutlineFullscreen, AiOutlineStar,AiFillStar}  from "react-icons/ai";
import { useDispatch } from "react-redux"
import { modalRecup } from "@/features/BookModalSlice";
import { favoriteAction } from "@/features/FavoriteSlice";
import { useSelector } from "react-redux";
import Link from "next/link";
const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};
export default function Card2({ element, index , info }) {
    const dispatch = useDispatch();

  return (
    <motion.div
      className={styles.card2}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      key={element.isbn}
    >
      <div className={styles.topCard2}>
      <Link href={`/Book/${element.title}`}>
        <img src={element.image_url} alt="BookCover" />
      </Link>
      </div>
      <div className={styles.bottomCard2}>
        <p className={styles.bookTitleCard2}>{element.title}</p>
        <p className={styles.bookAuthors2}>
          By : <span>{element.authors}</span>
        </p>
        <div className={`${styles.bookAuthors2} ${styles.genreNone}`}>
          Genres : <span>{element.genres}</span>
        </div>
        <div onClick={()=>{dispatch(favoriteAction({element}))}} className={styles.addFavCard2}><AiOutlineStar/> Add Fav</div>
      </div>
        
    </motion.div>
  );
}