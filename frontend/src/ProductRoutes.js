
import { Route, Routes } from "react-router-dom"

import ProductLayout from "./ProductLayout"
import Product from "./pages/product/Product"
import Collection from "./pages/product/Collection"
import Keyword from "./pages/product/Keyword"

function ProductRoutes () {
  return (
    <Routes>
      <Route element={<ProductLayout />}>
        <Route path="" element={<Product />} />
        <Route path="collection" element={<Collection />} />
        <Route path="keyword" element={<Keyword />} />
      </Route>
    </Routes>)
}

export default ProductRoutes
