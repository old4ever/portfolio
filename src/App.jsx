import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import LinksPage from "./components/Links/LinksPage";
import AboutPage from "./components/About/AboutPage";
import BackgroundDark from "./assets/bg.jpg";
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
        break;
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
        <div
          className="fixed bottom-0 left-0 z-[-1000] block h-[100%] w-[100%] overflow-clip align-middle"
          style={{
            background: `url(${BackgroundDark}) no-repeat center fixed`,
            backgroundSize: "cover",
          }}
        ></div>
      ) : (
        <div
          id="background-light"
          className="fixed left-0 top-0 z-[-1000] block h-[100%] w-[100%]  overflow-clip bg-cyan-100 align-middle"
        ></div>
      )}
    </>
  );
}

export default App;
