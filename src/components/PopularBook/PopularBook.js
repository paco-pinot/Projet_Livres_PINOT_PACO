import styles from "./popularBook.module.css";
import { useState } from "react";
import Card from "../Card/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
export default function PopularBook(props) {
  const search = useSelector((state) => state.search.value)
  const [showCount, setShowCount] = useState(8);
  const [showIndex, setShowIndex] = useState(1);
  const handleShowMore = () => {
    if (showIndex >= 8) {
      setShowCount(showCount + 8);
    } else {
      setShowCount(showCount + showIndex);
    }
  };
  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  props.data.forEach(element => {
    console.log(element.rating);
  });
  const animatePresenceProps = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: {
      hidden: {
        x: '-200%',
        opacity: 0
      },
      visible: {
        x: '0%',
        opacity: 1
      }
    },
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.2
    },
    onAnimationComplete: () => {
      setShowIndex(showIndex + 1);
    }
  };

  return (
    <section className={styles.popularBook}>
      <div ref={props.idPopular} className={styles.topPopularBook}>
        <p className={styles.topBookP}>BOOKS GALLERY</p>
        <h2 className={styles.popularBookTitle}>Popular Books</h2>
        <div className={styles.linePopularBookContainer}>
          <div className={styles.linePopularBook}></div>
          <div className={styles.containerLosange}>
            <div className={styles.losange1}></div>
            <div className={styles.losange2}></div>
          </div>
        </div>
        <div className={styles.bottomPopularBook}>
        <AnimatePresence initial={false}>
  {props.data.filter(element => element.rating >= 4.40)
  .sort((a, b) => b.rating - a.rating)
  .filter(book => {
      return search === "" ? book :
      book.title.toLowerCase().includes(search.toLowerCase())
      })
  .slice(0, showCount)
  .map((element, index) => {
    {console.log(element)}
    if (index < showIndex) {
      return (
        <motion.div
          key={element.isbn13}
          {...animatePresenceProps}
          onExitComplete={() => setShowIndex(showIndex - 1)}
        >
        <div className={styles.cardContainerPopBook}>
          <Card element={element} index={index} key={index} className="card" />
        </div>
        </motion.div>
      );
    } else {
      return null;
    }
  })}
</AnimatePresence>
        </div>
        <button className={styles.loadMore} onClick={handleShowMore}>
          Load more
        </button>
      </div>
    </section>
  );
}
