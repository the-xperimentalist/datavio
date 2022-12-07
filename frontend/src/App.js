
import { NavLink, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Search from "./pages/Search"
import { SearchList, NoEcommPresentToDevelop, AutoRedirect } from "./pages/ToRemove"
import Tools from "./pages/Tools"
import NotFound from "./pages/NotFound"
import ProductRoutes from "./ProductRoutes"

// Other method to handle active is have a class with .active and related styling

function App() {
  return (
    <>
      <Routes>
        <Route path="/searchlist" element={<h1>Test additional content for search list</h1>} />
      </Routes>
      <nav>
        <ul>
          <li><NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red'} : {}
            }}
            to="/"
          >
            {({ isActive }) => {
              return isActive ? "Active Home" : "Home"
            }}
          </NavLink></li>
          <li><NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red'} : {}
            }} to="/contact">Contact</NavLink></li>
          <li><NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red'} : {}
            }} to="/about">About</NavLink></li>
          <li><NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red'} : {}
            }} to="/searchlist">Search List</NavLink></li>
          <li><NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red'} : {}
            }} to="/tools">Tools</NavLink></li>
          <li><NavLink
            style={({ isActive }) => {
              return isActive ? { color: 'red'} : {}
            }} to="/product">Product</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:url" element={<Search />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/search/nykaa" element={<NoEcommPresentToDevelop />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/*" element={<ProductRoutes />} />
        <Route path="/redirect-test" element={<AutoRedirect />} />
      </Routes>
    </>
    );
}

export default App;
