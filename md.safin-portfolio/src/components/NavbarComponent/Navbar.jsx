import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <div className="flex justify-center items-center font-mono">
          <div>
            <Link to="/about" className="nav-link">
              <span data-hover="About Me">About Me</span>
            </Link>

            <Link to="/certification" className="nav-link">
              <span data-hover="Certifications">Certifications</span>
            </Link>

            <Link to="/experience_education" className="nav-link">
              <span data-hover="Experience & Education">Experience & Education</span>
            </Link>

            <Link to="/contact" className="nav-link">
              <span data-hover="Connect With Me">Connect With Me</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;