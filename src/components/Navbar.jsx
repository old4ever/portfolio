import { Link } from "react-router-dom";
import { Moon } from "react-bootstrap-icons";

const Navbar = ({ darkModeHandler }) => {
  return (
    <div className="dark:text-white p-[20px] flex">
      <div className="ml-auto" id="navbar-links">
        <Link to="/" className="router-link-exact-active font-bold" id="home">
          Home
        </Link>
        {" | "}
        <Link to="/links" className="font-bold" id="links">
          Links
        </Link>
        {" | "}
        <Link to="/about" className="font-bold" id="about">
          About me
        </Link>
      </div>
      <button onClick={darkModeHandler} className="ml-auto">
        <Moon />
      </button>
    </div>
  );
};

export default Navbar;
