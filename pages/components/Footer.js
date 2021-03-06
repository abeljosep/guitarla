import styles from "../../styles/Footer.module.css";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.content}`}>
            <nav className={styles.navigation}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">About Us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/store">Store</Link>
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados</p>
        </div>
       
    </footer>
  )
}

export default Footer