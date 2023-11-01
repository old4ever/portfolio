import { useEffect } from "react";
import LinkCard from "./LinkCard";
import Flixx from "../../assets/flixx-main-page.png";

const LinksPage = () => {
  useEffect(() => {
    const navbar = document.querySelector("#navbar-links");
    navbar.children.about.classList.remove("dark:router-link-exact-active");
    navbar.children.about.classList.remove("router-link-exact-active");
    navbar.children.links.classList.add("dark:router-link-exact-active");
    navbar.children.links.classList.add("router-link-exact-active");
    navbar.children.home.classList.remove("dark:router-link-exact-active");
    navbar.children.home.classList.remove("router-link-exact-active");
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center ">
        <div className="flex flex-col justify-center">
          <div className="grid auto-rows-[6rem] grid-cols-3 gap-4 max-w-4xl mx-10 my-10 dark:text-white min-w-[20rem] sm:min-w-[30rem] lg:min-w-[40rem]">
            <LinkCard
              doubled={true}
              vertical={true}
              button={true}
              img={{ small: Flixx, medium: "", large: "" }}
            />
            <LinkCard button={true} />
            <LinkCard button={true} />
            <LinkCard />
            <LinkCard doubled={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksPage;
