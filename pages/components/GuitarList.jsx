import React from 'react'
import Image from 'next/dist/client/image'
import Link from "next/link"
import styles from "../../styles/GuitarStore.module.css"
const GuitarList = ({guitars}) => {
    const {description, title, imagen, price, url} = guitars
    console.log(title)
  return (
    <div className={styles.guitarAndText}>
        <Image src={imagen.url} width={180} height={350} layout="responsive" />
        <div>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}</p>
            <Link href={`/guitars/${url}`}>
               <a className={styles.readMore}>Read More</a>
            </Link>
        </div>
    </div>
  )
}

export default GuitarList