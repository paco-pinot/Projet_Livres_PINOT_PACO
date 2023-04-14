import styles from "./card.module.css";
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
export default function Card({ element, index , info }) {
    const dispatch = useDispatch();

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      key={element.isbn}
    >
      <div className={styles.topCard}>
      <Link href={`/Book/${element.title}`}>
        <img src={element.image_url} alt="BookCover" />
      </Link>
      </div>
      <div className={styles.bottomCard}>
        <p className={styles.bookTitleCard}>{element.title}</p>
        <p className={styles.bookAuthors}>
          By : <span>{element.authors}</span>
        </p>
        <div onClick={()=>{dispatch(favoriteAction({element}))}} className={styles.addFavCard}><AiOutlineStar/> Add Fav</div>
      </div>
        <div className={styles.logoHoverCard}>
            <AiOutlineStar onClick={()=>{dispatch(favoriteAction({element}))}} className={styles.logoCard}/>
            <AiOutlineFullscreen onClick={()=>{dispatch(modalRecup({element}))}} className={styles.logoCard}/>
        </div>
        <div className={styles.bookRating}> {element.rating}</div>
    </motion.div>
  );
}