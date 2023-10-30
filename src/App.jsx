import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div className="dark:text-white p-[20px] text-center">
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

              <div
                name="links"
                className="flex justify-center md:justify-start"
              >
                <div class="flex flex-row flex-wrap justify-center md:justify-start my-3">
                  <div>
                    <button className="btn btn-circle m-1 bg-black dark:bg-white ">
                      <i className="bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                      </i>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-circle m-1 bg-black dark:bg-white ">
                      <i className="bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                      </i>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-circle m-1 bg-black dark:bg-white ">
                      <i className="bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                      </i>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-circle m-1 bg-black dark:bg-white ">
                      <i className="bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              name="center"
              className="-order-3 md:-order-2 mb-5 md:mx-10 md:mb-0 text-center md:grid md:place-content-center"
            >
              <div name="avatar">
                <img
                  src="../ava.jpg"
                  alt="avatar"
                  className="rounded-full inline"
                />
              </div>
            </div>
            <div
              name="right"
              className="-order-1 md:-order-1 md:grid md:place-content-center"
            >
              <div className="border-l-2 md:border-l-0 md:border-r-2 py-2 pl-4 md:pl-0 md:pr-4 md:text-right">
                <p className="text-sm mb-2 dark:text-white">
                  A beginner fullstack <i>(but mostly front-end)</i> developer.
                  You can find the list of my projects on my Github page and in{" "}
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
              <div class="flex flex-wrap items-start gap-2 justify-end">
                <button class="link dark:text-white">Learn more→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="../bg.jpg"
        className="fixed z-[-1000] top-0 left-0 block align-middle overflow-clip  h-[100%] w-[100%]"
        style={{ overflowClipMargin: "content-box" }}
      ></img>
    </>
  );
}

export default App;
