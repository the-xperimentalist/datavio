
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound (props) {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
      // navigate(-1) returns to the back page
      // navigate(-n) returns to the nth back page
    }, 2000)
  }, [])
  return (
    <div>NotFound</div>)
}

export default NotFound
