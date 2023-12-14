import { Link as ScrollLink } from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <div className="flex justify-center items-center font-mono">
          <div>
            <ScrollLink to="about" smooth={true} duration={500} className="nav-link">
              <span data-hover="About Me">About Me</span>
            </ScrollLink>

            <ScrollLink to="certification" smooth={true} duration={500} className="nav-link">
              <span data-hover="Certifications">Certifications</span>
            </ScrollLink>

            <ScrollLink to="experience_education" smooth={true} duration={500} className="nav-link">
              <span data-hover="Experience & Education">Experience & Education</span>
            </ScrollLink>

            <ScrollLink to="contact" smooth={true} duration={500} className="nav-link">
              <span data-hover="Connect With Me">Connect With Me</span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;