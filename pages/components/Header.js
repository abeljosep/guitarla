import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`contenedor`}>
            <div className={`${styles.navbar}`}>
                <Link href={`/`}>
                    <a>
                        <Image src="/img/logo.svg" width={400} height={100} alt="image logo"/>
                    </a>
                </Link>
                <nav className={styles.navigation}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">About Us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header