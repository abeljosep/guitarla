import Image from "next/dist/client/image";
import styles from "../../styles/GuitarStore.module.css";
import Layout from "../components/Layout";

const Guitar = ({ guitarra }) => {
  const { title, description, price, imagen } = guitarra[0];
  console.log(guitarra[0]);
  return (
    <Layout
        title={title}
    >
      <div className={styles.guitarAndText}>
        <Image src={imagen.url} width={180} height={350} layout="responsive" />
        <div>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
          
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const urlToFetch = `${process.env.API_URL}/guitars`;
  const res = await fetch(urlToFetch);
  const product = await res.json();

  const paths = product.map((products) => ({ params: { url: products.url } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const urlToFetch = `${process.env.API_URL}/guitars?url=${params.url}`;

  const res = await fetch(urlToFetch);
  const guitarra = await res.json();
  console.log(guitarra);
  return {
    props: {
      guitarra,
    },
  };
}
export default Guitar;
