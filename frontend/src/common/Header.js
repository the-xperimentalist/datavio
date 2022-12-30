
import logo from "../static/imgs/logo-test.png"

function Header (props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a style={{ background: `url(${logo}) no-repeat 10% 50%` }}>
            <span>DataVio</span>
          </a>
          <span>Home</span>
        </h1>
      </div>
    </header>)
}

export default Header
