import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <div className="flex justify-center items-center font-mono">
          <div>
            <a href="#about" className="nav-link">
              <span data-hover="About Me">About Me</span>
            </a>

            <a href="#certification" className="nav-link">
              <span data-hover="Certifications">Certifications</span>
            </a>

            <a href="#experience_education" className="nav-link">
              <span data-hover="Experience & Education">Experience & Education</span>
            </a>

            <a href="#contact" className="nav-link">
              <span data-hover="Connect With Me">Connect With Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;