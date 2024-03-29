import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import NewsLetter from '@/components/NewsLetter/NewsLetter'
import Section2 from '@/components/Section2/Section2'
import PopularBook from '@/components/PopularBook/PopularBook'
import ModalCard from '@/components/ModalCard/ModalCard'
import CarouselComponent from '@/components/Carrousel/Carrousel'
import { useSelector } from "react-redux"
import { useRef } from 'react'
export async function getStaticProps() {
  const res = await fetch("https://example-data.draftbit.com/books");
  const data = await res.json();
  const filteredData = data.filter(item => item.id <= 240);
  return{
    props: {
      data:filteredData
    }
  }
}
export default function Home({data}) {
  const idPopular = useRef()
  const bool = useSelector((state) => state.modal.value.bool)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href='https://e7.pngegg.com/pngimages/195/383/png-clipart-book-open-book-wood-desktop-wallpaper-thumbnail.png' />
      </Head>
      <main className={styles.main}>
      <Navbar idPopular={idPopular}/>
      <CarouselComponent/>
      { bool === true ? 
      <ModalCard/>
      :""}
      <Section2 data ={data}/>
      <PopularBook data={data}  idPopular={idPopular}/>
      <NewsLetter data={data}/>
      <Footer/>
      </main>
    </>
  )
}





