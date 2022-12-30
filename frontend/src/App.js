
import { Route, Routes } from "react-router-dom"

import Header from "./common/Header"
import Footer from "./common/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import AnalyzeView from "./pages/AnalyzeView"

function App() {
  return (
    <div className="home-page">
      <Header
        key="header"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze/:url" element={<AnalyzeView />} />
      </Routes>
      <Footer
        key="footer"
      />
    </div>)
}

export default App

