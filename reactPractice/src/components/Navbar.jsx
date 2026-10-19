function Navbar() {
return ( 
<nav className="navbar"> 
    <a href="/" className="site-title"> 
    <span className="brand-icon">☀</span>Weatherly 
</a>

  <ul className="nav-links">
    <li><a href="#today" className="active">Today</a></li>
    <li><a href="#forecast">Forecast</a></li>
    <li><a href="#map">Weather Map</a></li>
  </ul>
</nav>

);
}
export default Navbar;