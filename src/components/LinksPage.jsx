import { useEffect } from "react";

const LinksPage = () => {
  useEffect(() => {
    const navbar = document.querySelector("#navbar-links");
    navbar.children.about.classList.remove("router-link-exact-active");
    navbar.children.links.classList.add("router-link-exact-active");
    navbar.children.home.classList.remove("router-link-exact-active");
  }, []);

  return <div className="dark:text-white">LinksPage</div>;
};

export default LinksPage;
