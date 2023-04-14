import styles from "../../styles/book.module.css"
import Navbar from "@/components/Navbar/Navbar";
import { useEffect,useState } from "react";
export default function BookDynamic({bookSelected}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    },[])
  
    if (loading) {
      return (
        <div className={styles.bgLoader}>
          <div className="loader">
              <svg viewBox="0 0 80 80">
                  <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
          </div>
  
          <div className="loader triangle">
              <svg viewBox="0 0 86 80">
                  <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
          </div>
  
          <div className="loader">
              <svg viewBox="0 0 80 80">
                  <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
          </div>
        </div>
      )
    }
    return (
        <section className={styles.dynamicBook}>
          <Navbar/>
                <h2>{bookSelected.title}</h2>
                <div className={styles.containerBook}>
                    <div className={styles.leftPartBook}>
                        <img src={bookSelected.image_url} alt="Book Cover" />
                    </div>
                    <div className={styles.rightPartBook}>
                        <div className={styles.dynamicItemBook}> <span className={styles.spanItemBook}>ID : </span> <span className={styles.textBookItem}> {bookSelected.id}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Title : </span><span className={styles.textBookItem}>{bookSelected.title}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Authors : </span><span className={styles.textBookItem}>{bookSelected.authors}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Edition : </span><span className={styles.textBookItem}>{bookSelected.edition}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Format : </span><span className={styles.textBookItem}>{bookSelected.format}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Numer of pages : </span><span className={styles.textBookItem}>{bookSelected.num_pages}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Rating : </span><span className={styles.textBookItem}>{bookSelected.rating}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Genres : </span><span className={styles.textBookItem}>{bookSelected.genres}</span></div>
                        <div className={styles.dynamicItemBook}><span className={styles.spanItemBook}>Description : </span><span className={styles.textBookItem}>{bookSelected.description}</span></div>
                    </div>
                </div>
        </section>
    )
  }   
 

  export async function getStaticProps(context) {
    const slug = context.params.book;

    const res = await fetch("https://example-data.draftbit.com/books");
    const data = await res.json();
    
    const bookSelected = data.find(item => item.title === slug);

    return {
        props: {
            bookSelected
        }
    }
}


export async function getStaticPaths() {
    const res = await fetch("https://example-data.draftbit.com/books");
    const data = await res.json();

    const paths = data.filter((element) => element.title).map((element) => ({ params: {book: element.title} }))
    
    return {
        paths,
        fallback: false
    }
}