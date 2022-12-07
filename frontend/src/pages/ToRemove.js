
import { Link, Navigate } from 'react-router-dom'

function SearchList (props) {
  return (
    <div>
      SearchList
      <Link to="/search/1">List 1</Link>
      <Link to="/search/2">List 2</Link>
    </div>)
}

function NoEcommPresentToDevelop (props) {
  return (
    <div>Nykaa</div>)
}


function AutoRedirect (props) {
  return (
    <Navigate to="/" />)
}


export { SearchList, NoEcommPresentToDevelop, AutoRedirect }
