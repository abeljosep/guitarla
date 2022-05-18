import {toDate} from "../helpers"

const Entries = ({results}) => {
    const {title, summary, imagen, published_at} = results
    
  return (
    <article>
        <div>
            <h3>{title}</h3>
            <p>{toDate(published_at)}</p>
        </div>
    </article>
  )
}

export default Entries