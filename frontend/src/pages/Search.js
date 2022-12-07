
import { useParams } from "react-router-dom"

function Search (props) {
  const { url } = useParams()
  return (
    <div>Search {url}</div>)
}

export default Search
