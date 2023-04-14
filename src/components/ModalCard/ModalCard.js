import styles from "./modalcard.module.css"
import style from "../PopularBook/popularBook.module.css"
import { useSelector } from "react-redux"
import  { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { modalRecup } from "@/features/BookModalSlice";
import { favoriteAction } from "@/features/FavoriteSlice";
import  { AiOutlineStar}  from "react-icons/ai";
export default function ModalCard() {
    const card = useSelector((state) => state.modal.value.elem)
    const bool = useSelector((state) => state.modal.value.bool)
    const dispatch = useDispatch();
    console.log(card);
    return (
        <div className={styles.backgroundModal} >
            <div className={`${styles.modalCard} ${bool ? styles.flex : styles.none}`}>
                <div className={styles.titleModalCard}>
                    <p>{card.element.title}</p>
                    <RxCross1 onClick={()=>{dispatch(modalRecup())}} className={styles.crossModal} />
                    
                </div>
                <div className={styles.bottomModalCard}>
                    <div className={styles.leftBottomModal}>
                        <img src={card.element.image_url} alt="BookCover" />
                    </div>
                    <div className={styles.rightBottomModal}>
                        <div className={styles.loremModal}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapientmdolore ad debitis sint deleniti? Illum!</p>
                        </div>
                        <div className={styles.infosCard}>
                            <ul>
                                <li>Category : {card.element.genres} </li>
                                <li>Author : {card.element.authors}</li>
                                <li>Language : Language</li>
                                <li>Total Pages : {card.element.num_pages}</li>
                                <li>Price : Price</li>
                                <li>Offer Price : Offer Price</li>
                                <li>Edition : {card.element.edition}</li>
                                <li>Format : {card.element.format}</li>
                                <li>ID : {card.element.id}</li>
                            </ul>
                        </div>
                        <div>
                            <button onClick={()=>{dispatch(favoriteAction({element : card.element}))}} className={styles.addFav} >Add Fav</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   )
}