import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LinksPage from "./components/LinksPage";
import AboutPage from "./components/AboutPage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("true");

  useEffect(() => {
    const storageDarkMode = JSON.parse(localStorage.getItem("darkmode"));
    setDarkMode(storageDarkMode);

    if (storageDarkMode === false) {
      itsLight();
    } else {
      itsDark();
    }
  }, []);

  const itsDark = () => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
  };

  const itsLight = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleDarkModeClick = (darkModeState) => {
    darkModeState = JSON.parse(darkModeState);
    switch (true) {
      case darkModeState === true:
        itsLight();
        setDarkMode(false);
        localStorage.setItem("darkmode", JSON.stringify(false));

        break;
      case darkModeState === false:
        itsDark();
        setDarkMode(true);
        localStorage.setItem("darkmode", JSON.stringify(true));

      default:
        break;
    }
  };

  return (
    <>
      <Navbar darkModeHandler={() => handleDarkModeClick(darkMode)} />
      <div className="z-0">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/links" element={<LinksPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>
      {darkMode ? (
        <img
          src="/src/assets/bg.jpg"
          id="background-dark"
          className="fixed z-[-1000] top-0 left-0 block align-middle overflow-clip  h-[100%] w-[100%]"
          style={{ overflowClipMargin: "content-box" }}
        ></img>
      ) : (
        <div
          id="background-light"
          className="fixed z-[-1000] top-0 left-0 block align-middle overflow-clip  h-[100%] w-[100%] bg-purple-200"
        ></div>
      )}
    </>
  );
}

export default App;
