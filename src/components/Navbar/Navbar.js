import styles from "./navbar.module.css"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import  { RxCross1 } from "react-icons/rx";
import { FiTrash } from "react-icons/fi";
import { useRouter } from "next/router";
import { searchAction } from "@/features/SearchSlice";
import { supprimerAll,supprimer } from "@/features/FavoriteSlice";
import  { AiOutlineStar}  from "react-icons/ai";
export default function Navbar(props) {
    const router = useRouter()
    const dispatch = useDispatch()
    const search = useSelector((state) => state.search.value)
    const panier = useSelector((state) => state.fav.value)
    let [classSidebar, setclassSidebar] = useState(false);
    let [classSidebarRight, setclassSidebarRight] = useState(false);
    const scrollDownToPop = () => {
        window.scrollTo({
            top: props.idPopular.current.offsetTop,
            behavior: 'smooth'
        });
    }
    return (
    <div className="lol">
     <div className={classSidebarRight===false ? `${styles.containerDropdownNavbarRight}` :`${styles.dropdownOpenRight}` }>
            <div className={styles.topDropdown}>
                <div className={styles.crossDropdown} onClick={()=>{setclassSidebarRight(classSidebarRight =! classSidebarRight)}} ><RxCross1/></div>
                <div>Bookshelf</div>
            </div>
            {panier.length === 0 ? (
  <div className={styles.panierVide}>
   <div>Votre Panier est vide</div>  
    <AiOutlineStar className={styles.starPanier}/>
  </div>
) : (
  <div className={`${styles.bottomDropdown} ${styles.dropDownScroll}`}>
    {panier.map((element, index) => {
      return (
        <div className={styles.itemPanier}>
          <div className={styles.imgItemPanier}>
            <img src={element.element.image_url} alt="book cover" />
          </div>
          <div className={styles.rightPartItemPanier}>
            <div className={styles.titleItemPanier}>
              {element.element.title}
            </div>
            <div className={styles.ratingItemPanier}>
              Rating : {element.element.rating}
            </div>
            <div
              onClick={() => {
                dispatch(supprimer(element));
              }}
              className={styles.poub}
            >
              <FiTrash />
            </div>
          </div>
        </div>
      );
    })}
  </div>
)}
                
            <div className={styles.containerRemoveFav}>
              <div onClick={()=>{dispatch(supprimerAll())}} className={styles.removeFav}>Remove Fav</div>
            </div>
        </div>
        <div className={ classSidebar===false ? `${styles.containerDropdownNavbar}` : `${styles.dropdownOpen}` }>
            <div className={styles.topDropdown}>
                <div>Bookshelf</div>
                <div className={styles.crossDropdown} onClick={()=>{setclassSidebar(classSidebar =! classSidebar)}} ><RxCross1/></div>
            </div>
            <div className={styles.bottomDropdown}>
                <div onClick={()=>{router.push("/")}} className={styles.dropdownItems}>Bookshelf Minimal</div>
                <div onClick={()=>{router.push("/")}} className={styles.dropdownItems}>Bookshelf Modern</div>
                <div onClick={()=>{router.push("/")}} className={styles.dropdownItems}>Bookshelf Modern</div>
                <div onClick={()=>{router.push("/allBooks")}} className={styles.dropdownItems}>All Books</div>
            </div>
        </div>
        <nav>
        <div className={`${styles.navitem} ${styles.leftNavbar}` }>
            <div onClick={()=>{setclassSidebar(classSidebar =! classSidebar)}} className={styles.burgerNav}>
               <div className={styles.burgerHaut}></div>
               <div className={styles.burgerMilieu}></div>
               <div className={styles.burgerBas}></div>
            </div>
            <div className={styles.titleNav}>
                <h2>BOOKSHELF.</h2>
            </div>
        </div>
       {router.pathname==="/" ? <div className={`${styles.navitem} ${styles.input}` }>
            <div className={styles.glassNav}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={styles.inputNav}>
                <input value={search} onChange={(e)=>{dispatch(searchAction(e.target.value))}} type="text" onFocus={()=>{scrollDownToPop()}} placeholder="Search your book here" />
            </div>
        </div>: <div className={`${styles.navitem} ${styles.input}`}></div> }
        <div className={`${styles.navitem} ${styles.rightNav}`}>
            <div onClick={()=>{router.push("/Login")}} className={styles.log}>Log In/Subscribe</div>
            <div className={styles.phoneNav}>
                <i class="fa-solid fa-phone-volume"></i>
                <span> 01234567890</span>
            </div>
            <div onClick={()=>{setclassSidebarRight(classSidebarRight =! classSidebarRight)}}  className={styles.bookNav}>
                <i class="fa-regular fa-star"></i>
                <div className={styles.favoritesNav}>
                    {panier.length}
                </div>
            </div>
        </div>
        </nav>
       
    </div>
    )
  }