
import { Link, useOutletContext } from "react-router-dom"

function Product (props) {
  const obj = useOutletContext()
  return (
    <div>
      Product for user {obj.userId}
    </div>)
}

export default Product
