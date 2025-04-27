import { Link } from 'react-router-dom';
import './Navbar.css'; // custom girly styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        🛍️ The little Pink Store
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
