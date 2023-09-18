import car1 from "../../../public/hero.png"
import car2 from "../../../public/hero2.png"
import car3 from "../../../public/hero3.png"
import car4 from "../../../public/hero4.png"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import styles from "./carrousel.module.css"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const CarouselComponent = () => {
    const carouselData = [
        {
            imageUrl: car1,
        },
        {
            imageUrl: car2,
        },
        {
            imageUrl: car3,
        },
        {
            imageUrl: car4,
        },
    ];

    return (
        <div className="divCarouselRelative">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={2000}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        
                        <div
                            className={hasPrev ? `${styles.previous} ${styles.absolute}` : `${styles.dNone} ${styles.previous}`}
                            onClick={clickHandler}
                        >
                            <div className={styles.bgArrow}>
                                <FaAngleLeft className={styles.arrow} />
                            </div>
                            
                        </div>
                    );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <div
                            className={hasNext ?`${styles.next} ${styles.absolute}` : `${styles.dNone} ${styles.next}`}
                            onClick={clickHandler}
                        >
                            <div className={styles.bgArrow}>
                                <FaAngleRight className={styles.arrow} />
                            </div>
                            
                        </div>
                    );
                }}
            >
            
                {
                    carouselData.map((slide, index) => (
                        <div key={index} className={styles.carouselContainer}>
                            <div className={styles.leftCarousel}>
                                <div className={styles.leftCarouselTop}>
                                    <div className={styles.divInvest}>
                                        LET'S MAKE THE BEST INVESTMENT
                                    </div>
                                    <div className={styles.divFriend}>
                                        There Is No Friend As <br />
                                        Loyal As A Book
                                    </div>
                                </div>
                                <div className={styles.leftCarouselLorem}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                                    Atque ipsum natus quis quam dolores.
                                </div>
                                <div>
                                    <button className={styles.carouBtn}>
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div className={styles.rightCarousel}>
                                <div className={styles.divImgCarou}>
                                    <Image src={slide.imageUrl} alt={`Slide ${index + 1}`} />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Carousel>
        </div>
    );
};

export default CarouselComponent;


