
import { useOutletContext } from "react-router-dom"

function Keyword (props) {
  const obj = useOutletContext()
  return (
    <div>Keyword for user id: {obj.userId}</div>)
}

export default Keyword
