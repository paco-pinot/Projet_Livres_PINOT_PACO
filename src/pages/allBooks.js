import styles from "../styles/allBooks.module.css"
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";
import { modalRecup } from "@/features/BookModalSlice";
import { favoriteAction } from "@/features/FavoriteSlice";
import ModalCard from "@/components/ModalCard/ModalCard";
import { useSelector,useDispatch } from "react-redux";
import { HiOutlineViewList,HiOutlineViewGrid } from "react-icons/hi";
import { listAction,listAction2 } from "@/features/ListStyleSlice";
import { useState } from "react";
import { searchAction } from "@/features/SearchSlice";
export default function AllBooks({data,allAuthors}) {
    const search = useSelector((state) => state.search.value)
    const [color, setcolor] = useState(false);
    const [category, setcategory] = useState("All");
    const [Authors, setAuthors] = useState("All");
    const [avaibleProd, setavaibleProd] = useState(208);
    const boolList = useSelector((state) => state.list.value)
    const bool = useSelector((state) => state.modal.value.bool)
    const dispatch = useDispatch()
    const allAuthorsTab = ["All", ...allAuthors.sort()];
    const categoriesTab = [
        "All",
        "Animals",
        "Biography",
        "Classics",
        "Fantasy",
        "Fiction",
        "Historical",
        "Horror",
        "Inspirational",
        "Paranormal",
        "Romance",
        "Science Fiction",
        "War",
        "Young Adult"
    ];
    return (
        <section className={styles.allBooks}>
            <Navbar/>
            { bool === true ? 
                <ModalCard/>
            :""}
            <section className={styles.allBooksContainer}>
                <div className={styles.leftSideBarAllBooks}>
                    <div className={styles.inputAllBooks}>
                        <input type="text" placeholder="Search"  value={search} onChange={(e)=>{dispatch(searchAction(e.target.value))}} />
                    </div>
                    <div className={styles.categoryFilters}>
                        <div className={styles.categoryItems}>Category</div>

                        {
                            categoriesTab.map((element)=>{
                                return(
                                    <div >
                                        <div onClick={()=>{setcategory(element)}} className={category===element ? `${styles.categoryItems}  ${styles.green}`  :`${styles.categoryItems} `}> {element}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.dropdownAuthors}>
                        {allAuthorsTab.map((element)=>{
                            return(
                            <div onClick={()=>{setAuthors(element)}} className={styles.authors}>{element}</div>
                            )})}
                    </div>
                    <div className={styles.authorsFilter}>

                    </div>
                </div>
                <div className={styles.rightPartAllBooks}>
                    <div className={styles.topRightPartAllBooks}>
                    <div className={styles.topRightItemsLogo}>
                         <div onClick={()=>{dispatch(listAction2())}} ><HiOutlineViewGrid/></div>
                         <div onClick={()=>{dispatch(listAction())}} ><HiOutlineViewList/></div> 
                    </div>
                    <div className={styles.topRightItems}><span> {   data
                                    .filter(book => {
                                        return (
                                            search === "" ? book :
                                                book.title ?
                                                    book.title.toLowerCase().includes(search.toLowerCase())
                                                    : ""
                                        )
                                    }).length} </span>Products Avaible </div>
                    <div className={styles.topRightItems}>Price(lowest)</div>
                    </div>
                    <div className={boolList===false?`${styles.bottomRightPartAllBooks}`:`${styles.bottomRightPartAllBooksSecond}`}>
                    {category == "All" ?
                            Authors == "All" ?
                                data
                                    .filter(book => {
                                        return (
                                            search === "" ? book :
                                                book.title ?
                                                    book.title.toLowerCase().includes(search.toLowerCase())
                                                    : ""
                                        )
                                    })
                                    .map((element,index) => {
                                        return (
                                            <div className={boolList===false?`${styles.cardContainer}`:`${styles.cardContainer2}`}>
                                          <Card element={element}/>
                                          </div>
                                        )
                                    }) :
                                data
                                    .filter((item) => {
                                        return (
                                            item.authors ?
                                                item.authors.includes(Authors)
                                                : ""
                                        )
                                    })
                                    .filter(book => {
                                        return (
                                            search === "" ? book :
                                                book.title ?
                                                    book.title.toLowerCase().includes(search.toLowerCase())
                                                    : ""
                                        )
                                    })
                                    .map((element,index) => {
                                        return (
                                            <div className={boolList===false?`${styles.cardContainer}`:`${styles.cardContainer2}`}>
                                          <Card element={element}/>
                                          </div>
                                        )
                                    })

                            :
                            Authors == "All" ?
                                data
                                    .filter((item) => {
                                        return (
                                            item.genres ?
                                                item.genres.includes(category)
                                                : ""
                                        )
                                    })
                                    .filter(book => {
                                        return (
                                            search === "" ? book :
                                                book.title ?
                                                    book.title.toLowerCase().includes(search.toLowerCase())
                                                    : ""
                                        )
                                    })
                                    .map((element,index) => {
                                        return (
                                            <div className={boolList===false?`${styles.cardContainer}`:`${styles.cardContainer2}`}>
                                          <Card element={element}/>
                                          </div>
                                        )
                                    }) :
                                data
                                    .filter((item) => {
                                        return (
                                            item.genres ?
                                                item.genres.includes(category) &&
                                                item.authors.includes(Authors)
                                                : ""
                                        )
                                    })
                                    .filter(book => {
                                        return (
                                            search === "" ? book :
                                                book.title ?
                                                    book.title.toLowerCase().includes(search.toLowerCase())
                                                    : ""
                                        )
                                    })
                                    .map((element,index) => {
                                        return (
                                            <div className={boolList===false?`${styles.cardContainer}`:`${styles.cardContainer2}`}>
                                          <Card element={element}/>
                                          </div>
                                        )
                                    })
                        }








                        {/* { data.map((element,index)=>{
                            return(
                                <div className={boolList===false?`${styles.cardContainer}`:`${styles.cardContainer2}`}>
                                    <Card element={element}/> 
                                </div>
                            )
                        })
                            
                        } */}
                    </div>
                </div>
            </section>
        </section>
    )
  }

export async function getStaticProps() {
    const res = await fetch("https://example-data.draftbit.com/books");
    const data = await res.json();  
    const allAuthors = [...new Set(data.filter(book => book.authors).map(book => book.authors))];  
    return {
        props:{
            data ,
            allAuthors
        }
       
    }
}