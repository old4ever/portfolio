import Navbar from "./components/Navbar";
import LinksButtonsList from "./components/LinksButtonsList";
import Avatar from "./components/Avatar";
import ListIcon from "../public/list.svg";
import { useEffect, useState } from "react";

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
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
          <div className="flex flex-col px-10 md:px-36 md:grid md:grid-rows-none md:grid-cols-3 justify-center">
            <div
              name="left"
              className="-order-2 md:-order-3 md:grid md:place-content-center"
            >
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Hello!
              </h1>
              <h1 className="dark:text-white text-3xl md:text-5xl font-bold">
                {"I am "}
                <span className="dark:text-white fancy">{"old4ever"}</span>
              </h1>

              <LinksButtonsList
                icons={[
                  {
                    icon: ListIcon,
                    link: "https://google.com",
                  },
                ]}
              />
            </div>
            <div
              name="center"
              className="-order-3 md:-order-2 mb-5 md:mx-10 md:mb-0 text-center md:grid md:place-content-center"
            >
              <Avatar />
            </div>
            <div
              name="right"
              className="-order-1 md:-order-1 md:grid md:place-content-center"
            >
              <div className="border-l-2 md:border-l-0 md:border-r-2 py-2 pl-4 md:pl-0 md:pr-4 md:text-right">
                <p className="text-sm mb-2 dark:text-white">
                  A beginner fullstack <i>(but mostly front-end)</i> developer.
                  You can find the list of my projects on my Github page and in
                  the{" "}
                  {
                    <a
                      href="/links"
                      className="dark:accent-color-bg dark:text-black rounded-md px-2 inline-link"
                    >
                      Links
                    </a>
                  }{" "}
                  section.
                </p>
                <p className="text-[0.5rem] mb-2 italic dark:text-white">
                  arch user btw
                </p>
              </div>
              <div className="flex flex-wrap items-start gap-2 justify-end">
                <button className="link dark:text-white">Learn more→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {darkMode ? (
        <img
          src="../bg.jpg"
          id="background-dark"
          className="fixed z-[-1000] top-0 left-0 block align-middle overflow-clip  h-[100%] w-[100%]"
          style={{ overflowClipMargin: "content-box" }}
        ></img>
      ) : (
        <div
          id="background-light"
          className="fixed z-[-1000] top-0 left-0 block align-middle overflow-clip  h-[100%] w-[100%]"
        ></div>
      )}
    </>
  );
}

export default App;
