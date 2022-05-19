import Image from "next/image"
import Link from "next/dist/client/link"
import styles from "../../styles/GuitarStore.module.css"
import GuitarList from "./GuitarList"

const GuitarStore = ({guitarList}) => {

    return (
    <div className={styles.guitarsContainer}>
      {guitarList.map(guitars=>(
          <GuitarList
            key={guitars.id}
            guitars={guitars}
          />
      ))}
    </div>
  )
}

export default GuitarStore