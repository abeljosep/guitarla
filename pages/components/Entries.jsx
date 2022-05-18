import { toDate } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Entries.module.css";

const Entries = ({ results }) => {
  const { title, summary, imagen, published_at, content, id } = results;

  return (
    <article>
      <Image
        width={800}
        height={600}
        layout="responsive"
        src={imagen.url}
        alt={`imagen de ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{toDate(published_at)}</p>
        <p>{summary}</p>

        <Link href={`/blog/${id}`}>
          <a className={styles.keepreading}>Keep Reading</a>
        </Link>
      </div>
    </article>
  );
};

export default Entries;
