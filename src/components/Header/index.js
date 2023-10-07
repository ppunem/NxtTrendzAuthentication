// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () =>(
          <nav className="header-container">
            <img className="logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
            <ul className="nav-options-container">
              <li className="nav-item">Home</li>
              <li className="nav-item">Products</li>
              <li className="nav-item">Cart</li>
              <li><button className="logout-button" type="button">Logout</button></li>
            </ul>
          </nav>
    )

export default Header
