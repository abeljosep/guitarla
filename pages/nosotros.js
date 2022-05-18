import React from "react";
import Layout from "./components/Layout";
import styles from "../styles/Aboutus.module.css";
import Image from "next/image";
const Nosotros = () => {
  return (
    <Layout title="About Us">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.content}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Image about us"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum posuere lectus nunc, eu pellentesque mi vestibulum non.
              Sed ut efficitur ante. Etiam nec maximus justo. Donec auctor
              tristique felis vel malesuada. Nam luctus ultricies venenatis.
              Suspendisse eu lorem at ipsum lacinia scelerisque. Fusce pretium
              sem velit, a semper nisi pharetra ut. Nam risus est, dictum vitae
              nulla sed, posuere tristique mauris. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Suspendisse potenti. Ut non tempus sem. Curabitur scelerisque
              placerat erat, tristique fringilla massa sagittis et.</p>
              
              <p>
              Vivamus suscipit interdum commodo. Sed accumsan, leo sed lobortis
              fringilla, nisi ipsum bibendum eros, non scelerisque felis ligula
              a purus. Praesent ultrices interdum vestibulum. Curabitur vel
              pretium sem. Proin condimentum, tortor a tincidunt dignissim, leo
              dolor faucibus quam, sit amet tristique purus ante ut turpis.
              Proin venenatis elit a viverra pellentesque. Vivamus eleifend
              venenatis gravida. Curabitur cursus, orci quis lacinia feugiat,
              ante purus viverra erat, eu porta eros est vitae dolor. In euismod
              lectus at nisi tristique dictum. Suspendisse potenti. Donec
              convallis eget sem sed malesuada. Mauris vulputate elementum sem
              sit amet ullamcorper. Vivamus porttitor faucibus diam. Aliquam et
              libero sed augue pharetra rhoncus. Ut egestas fermentum tortor,
              eget vulputate felis malesuada eu. Vestibulum dignissim justo a ex
              aliquam sagittis.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
