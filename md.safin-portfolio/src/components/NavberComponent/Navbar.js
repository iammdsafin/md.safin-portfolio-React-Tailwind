import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <div className="flex justify-center items-center font-mono">
          <div>
            <a href="#about" className="navbar-link">
              About Me
            </a>

            <a href="#certification" className="navbar-link">
              Certifications
            </a>

            <a href="#experience_education" className="navbar-link">
              Experience & Education
            </a>

            <a href="#contact" className="navbar-link">
              Connect With Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
