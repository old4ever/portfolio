import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinksButtonsList from "./LinksButtonsList";
import Avatar from "./Avatar";

import { Github } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const HomePage = () => {
  useEffect(() => {
    const navbar = document.querySelector("#navbar-links");
    navbar.children.about.classList.remove("dark:router-link-exact-active");
    navbar.children.about.classList.remove("router-link-exact-active");
    navbar.children.links.classList.remove("dark:router-link-exact-active");
    navbar.children.links.classList.remove("router-link-exact-active");
    navbar.children.home.classList.add("dark:router-link-exact-active");
    navbar.children.home.classList.add("router-link-exact-active");
  }, []);

  return (
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
                icon: <Github className="fill-white dark:fill-black" />,
                link: "https://github.com/old4ever",
              },
              {
                icon: <Instagram className="fill-white dark:fill-black" />,
                link: "https://instagram.com/dm_stanchev/",
              },
              {
                icon: <Twitter className="fill-white dark:fill-black" />,
                link: "https://twitter.com/old4ever",
              },
              {
                icon: <Linkedin className="fill-white dark:fill-black" />,
                link: "https://linkedin.com/in/dmytro-stanchiev/",
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
              A beginner fullstack <i>(but mostly front-end)</i> developer. You
              can find the list of my projects on my Github page and in the{" "}
              {
                <Link
                  to="/links"
                  className="dark:text-black text-white rounded-md px-2 inline-link accent-color-bg dark:accent-color-bg"
                >
                  Links
                </Link>
              }{" "}
              section.
            </p>
            <p className="text-[0.5rem] mb-2 italic dark:text-white">
              arch user btw
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-2 justify-end">
            <button className="link dark:text-white">
              <Link to={"/links"}>Learn more →</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
