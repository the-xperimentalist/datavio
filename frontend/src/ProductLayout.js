
import { Link, Outlet } from "react-router-dom"
// maybe useSearchParams can be useful somewhere as well

function ProductLayout (props) {
  return (
    <>
      <Link to="/product/collection">Collection</Link><br/>
      <Link to="/product/keyword">Keyword</Link><br />
      <Outlet context={{ userId: "1" }} />
    </>)
}

export default ProductLayout
