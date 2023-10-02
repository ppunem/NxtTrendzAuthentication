// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    return (
          <nav className="header-container">
            <img className="logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
            <div className="nav-options-container">
              <Link to="/"><p className="nav-item">Home</p></Link>
              <Link to="/product"><p className="nav-item">Products</p></Link>
              <Link to="/cart"><p className="nav-item">Cart</p></Link>
              <button className="logout-button" type="button">Logout</button>
            </div>
          </nav>
    )
}

export default Header
