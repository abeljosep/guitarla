import Entries from './components/Entries'
import Layout from './components/Layout'
import styles from "../styles/Blog.module.css"

const Blog = ({result}) => {
  
  return (
    <Layout
        title="blog"
    >
        
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>

          <div className={styles.container}>
            {result.map(results =>(
              <Entries 
                key={results.id}
                results={results}
              />
            ))}
          </div>

        </main>

    </Layout>
  )
}

export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs`
  const response = await fetch(url);
  const result = await response.json();
  console.log(result)
  return{
    props: {
      result
    }
  }
}
export default Blog