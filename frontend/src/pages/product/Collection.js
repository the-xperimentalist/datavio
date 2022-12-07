
import { useOutletContext } from "react-router-dom"

function Collection (props) {
  const obj = useOutletContext()
  return (
    <div>Collection for user Id {obj.userId}</div>)
}

export default Collection
