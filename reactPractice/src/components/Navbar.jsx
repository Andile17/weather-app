import { Link } from "react-router-dom"; // 👈 Import Link
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar"> 
      {/* Clicking this takes you back to the home route */}
      <Link to="/" className="site-title"> 
        <span className="brand-icon">☀</span>Weatherly 
      </Link>

      <ul className="nav-links">
        {/* 'to' points directly to the paths you set up in your router array */}
        <li><Link to="/">Today</Link></li>
        <li><Link to="/forecast">Forecast</Link></li>
        <li><Link to="/map">WeatherMap</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;