import "./../styles/navbar.css";

const Navbar: React.FC = () => {
  return ( 
    <nav className="navbar">
        <div className="logo">Premium Restuarant</div>
        <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>    
        <li>Pages</li>
        <li>Blogs</li>
        <li>Contact Us</li>   
      </ul>
      <div className="nav-actions">
        <button className="btn-signin">Sign In</button>
      </div></nav>
  );
};

export default  Navbar;