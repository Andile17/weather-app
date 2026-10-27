import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
return ( 
<nav className="navbar"> 
    <Link to="/" className="site-title"> 
        <span className="brand-icon">☀</span>Weatherly 
    </Link>

  <ul className="nav-links">
    <li><Link to="/">Today</Link></li>
    <li><Link to="/forecast">Forecast</Link></li>
    <li><Link to="/map">WeatherMap</Link></li>
  </ul>
</nav>

);
}
export default Navbar;