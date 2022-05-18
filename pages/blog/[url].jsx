import Layout from "../components/Layout";
import Image from "next/image";
import { toDate } from "../helpers";
import styles from "../../styles/Entries.module.css"
const BlogEntrie = ({ post }) => {
  const { title, summary, content, published_at, imagen } = post[0];
  console.log(title);
  return (
    <Layout>
      <main className="contenedor">
        <h3 className="heading">{title}</h3>
        <article className={styles.blog_entrie}>
          <Image
            priority
            src={imagen.url}
            width={800}
            height={600}
            layout="responsive"
            alt={`Image for ${title}`}
          />
          <div className={styles.blog_content}>
            <p>{toDate(published_at)}</p>
            <p>{content}</p>
          </div>
        </article>
        
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const urlToFetch = `${process.env.API_URL}/blogs`;
  const res = await fetch(urlToFetch);
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { url: post.url } }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.API_URL}/blogs?url=${params.url}`);
  const post = await res.json();

  return {
    props: { post },

    revalidate: 1,
  };
}

export default BlogEntrie;
