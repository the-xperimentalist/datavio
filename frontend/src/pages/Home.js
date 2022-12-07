
import { useLocation } from "react-router-dom"

function Home (props) {
  const location = useLocation()
  console.log(location)
  return (
    <div>Home</div>)
}

export default Home
