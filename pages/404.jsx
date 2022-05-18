import React from 'react'
import Link from "next/link"
import Layout from "./components/Layout"
import styles from "../styles/NotFound.module.css"
const NotFound = () => {
  return (
    
        <main className='contenido'>
            <div className={styles.container}>
                <h1 className='heading'>Page Not Found</h1>
                <Link href="/">Back Home</Link>
            </div>
        </main>
    
  )
}

export default NotFound