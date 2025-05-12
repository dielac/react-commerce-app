// Import the Link component to move between pages
import { Link } from 'react-router-dom';

//  Pull in our navbar styles
import './Navbar.css'; // custom girly styles

const Navbar = () => {
  return (
    // The main top bar that holds everything
    <nav className="navbar">
      
      {/* Store name on the left side */}
      <div className="navbar-title">
        🛍️ The little Pink Store
      </div>

      {/*  Links to other pages on the right side */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};


export default Navbar;
