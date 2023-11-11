import { useEffect } from "react";
import AboutContainer from "./AboutContainer";

const AboutPage = () => {
  useEffect(() => {
    const navbar = document.querySelector("#navbar-links");
    navbar.children.about.classList.add("dark:router-link-exact-active");
    navbar.children.about.classList.add("router-link-exact-active");
    navbar.children.links.classList.remove("dark:router-link-exact-active");
    navbar.children.links.classList.remove("router-link-exact-active");
    navbar.children.home.classList.remove("dark:router-link-exact-active");
    navbar.children.home.classList.remove("router-link-exact-active");
  }, []);

  return (
    <>
      <div className="dark:text-white flex justify-center flex-col items-center gap-12">
        <AboutContainer title={"About Me"}></AboutContainer>
        <AboutContainer title={"My Journey"}></AboutContainer>
        <AboutContainer title={"My Approach"}></AboutContainer>
        <AboutContainer title={"What I Can Do"}></AboutContainer>
        <AboutContainer title={"My Portfolio"}></AboutContainer>
        <AboutContainer title={"Let's Connect"}></AboutContainer>

      </div>
    </>
  );
};

export default AboutPage;
