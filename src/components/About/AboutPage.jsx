import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    const navbar = document.querySelector("#navbar-links");
    navbar.children.about.classList.add("router-link-exact-active");
    navbar.children.links.classList.remove("router-link-exact-active");
    navbar.children.home.classList.remove("router-link-exact-active");
  }, []);

  return <div className="dark:text-white">AboutPage</div>;
};

export default AboutPage;
