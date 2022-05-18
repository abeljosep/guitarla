import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, title}) => {
  return (
    <>
        <Head> 
            <title>GuitarLA - {title}</title>
            <meta name="description" content="Buy Guitars" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        {children}

        <Footer/>
    </>  
    
  )
}

export default Layout