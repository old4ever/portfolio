const Navbar = ({ darkModeHandler }) => {
  return (
    <div className="dark:text-white p-[20px] flex">
      <div className="ml-auto">
        <a
          href="/"
          className="router-link-active router-link-exact-active font-bold"
        >
          Home
        </a>
        {" | "}
        <a href="/links" className="font-bold">
          Links
        </a>
        {" | "}
        <a href="/about" className="font-bold">
          About me
        </a>
      </div>
      <button onClick={darkModeHandler} className="ml-auto">
        
      </button>
    </div>
  );
};

export default Navbar;
