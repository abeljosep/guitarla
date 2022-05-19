import React from "react";
import GuitarStore from "./components/GuitarStore";
import Layout from "./components/Layout";
import styles from "../styles/GuitarStore.module.css";

const Store = ({ guitarList }) => {
  console.log(guitarList);
  return (
    <Layout title={"Store"}>
      <main className="contenedor">
        <h1 className="heading">Our Guitars</h1>

        <GuitarStore 
          guitarList={guitarList} 
        />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const urlToFetch = `${process.env.API_URL}/guitars`;
  const response = await fetch(urlToFetch);
  const guitarList = await response.json();

  return {
    props: {
      guitarList,
    },
  };
}
export default Store;
