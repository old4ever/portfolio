import { Link } from "react-router-dom";

const Navbar = ({ darkModeHandler }) => {
  return (
    <div className="dark:text-white p-[20px] flex">
      <div className="ml-auto">
        <Link
          to="/"
          className="router-link-active router-link-exact-active font-bold"
        >
          Home
        </Link>
        {" | "}
        <Link to="/links" className="font-bold">
          Links
        </Link>
        {" | "}
        <Link to="/about" className="font-bold">
          About me
        </Link>
      </div>
      <button onClick={darkModeHandler} className="ml-auto">
        
      </button>
    </div>
  );
};

export default Navbar;
