import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo192.png"

function Header() {
  return (
    <div className="page-header">
      <div className="container">
        <nav className="nav-links flex justify-content-between align-items-center">
          <ul className="nav-links-list flex align-items-center">
            <li className="nav-links-item">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li className="nav-links-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-links-item">
              <Link to="/user-list">User</Link>
            </li>
            <li className="nav-links-item">
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
          <ul className="nav-links-list flex">
            <li className="nav-links-item">
              <Link to="/">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li className="nav-links-item">
              <Link to="/">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li className="nav-links-item">
              <Link to="/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
