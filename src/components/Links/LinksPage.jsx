import { useEffect } from "react";
import LinkCard from "./LinkCard";

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
        <div className="flex flex-col  mx-10 justify-center">
          <div className="mx-10 my-10 grid min-w-[20rem] max-w-4xl auto-rows-[6rem] grid-cols-3 gap-4 dark:text-white sm:min-w-[30rem] lg:min-w-[40rem]">
            <LinkCard
              doubled={true}
              vertical={true}
              button={{ exists: true, link: "https://flixx.old4ever.cyou" }}
              img={"flixx"}
              text={"Flixx"}
              buttonDark={false}
            />
            <LinkCard
              text={"Github Finder"}
              button={{
                exists: true,
                link: "https://github-finder.old4ever.cyou/",
              }}
            />
            <LinkCard
              text={"Shopping List"}
              button={{
                exists: true,
                link: "https://shopping-list.old4ever.cyou/",
              }}
            />
            <LinkCard
              text={"Chirp"}
              button={{
                exists: true,
                link: "https://chirp.old4ever.cyou/",
              }}
            />
            <LinkCard
              doubled={true}
              text={"Tracalorie"}
              button={{
                exists: true,
                link: "https://tracalorie.old4ever.cyou",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksPage;
