import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="dark:text-white flex justify-center">
      <div className=" max-w-[40rem] rounded-xl border-2 border-slate-400/10 dark:hover:border-slate-100/20 bg-neutral-100 p-4 dark:bg-neutral-900">
        <h1 className="text-xl pb-4">About Me</h1>
        <p>
          Hello! I'm Dmytro Stanchiev, and I'm passionate about creating
          beautiful and user-friendly websites. As a beginner front-end web
          developer, I'm on an exciting journey to explore the endless
          possibilities of web design and development.
        </p>
        <p>
          I'm constantly inspired by the ever-evolving nature of the web, and
          I'm dedicated to honing my skills to stay at the forefront of this
          dynamic field.
        </p>
        <h1 className="text-xl pb-4 pt-8">My Journey</h1>
        <p>
          I'm relatively new to web development, but I've already come a long
          way. My journey began with a curiosity to understand how the websites
          we interact with every day are built. I started by learning HTML and
          CSS, the building blocks of the web, and I was immediately hooked. The
          power of crafting something from scratch and watching it come to life
          is truly mesmerizing.
        </p>
        <p>
          I've since expanded my knowledge and now feel comfortable working with
          JavaScript and various popular libraries and frameworks. With each
          project I take on, I gain a deeper understanding of front-end
          development and design principles. I believe that every project is an
          opportunity to learn and grow.
        </p>
        <h1 className="text-xl pb-4 pt-8">My Approach</h1>
        <p>
          I'm dedicated to creating visually appealing, responsive, and
          accessible websites. I believe in the importance of user-centered
          design and pay close attention to the user experience. Ensuring that
          websites are not only aesthetically pleasing but also easy to navigate
          and use is one of my top priorities.
        </p>
        <p>
          I also stay up-to-date with the latest web technologies and best
          practices, as I understand the web is a constantly evolving ecosystem.
          I'm excited to take on new challenges and adapt to the ever-changing
          landscape of web development.
        </p>
        <h1 className="text-xl pb-4 pt-8">What I Can Do</h1>
        <p>
          While I'm still on my journey as a beginner front-end web developer,
          I'm proud of the work I've done so far. Here are some of the skills
          and tools I've been working with:
        </p>
        <ul className="list-disc px-8">
          <li>HTML5, CSS3, and JavaScript</li>
          <li>Responsive web design</li>
          <li>
            Front-end libraries and frameworks (e.g., Bootstrap, React,
            Tailwind)
          </li>
          <li>Version control with Git</li>
          <li>Web accessibility and SEO best practices</li>
          <li>Debugging and problem-solving skills</li>
        </ul>
        <h1 className="text-xl pb-4 pt-8">My Portfolio</h1>
        <p>
          Take a look at <Link className="underline-offset-[0.25em] text-blue-500 underline" to="/links">my portfolio</Link> to see some of
          the projects I've been working on. Each project represents a unique
          challenge and a valuable learning experience. I'm excited to continue
          building and refining my skills and to share my journey with you.
        </p>
        <h1 className="text-xl pb-4 pt-8">Let's Connect</h1>
        <p>
          I'm always eager to connect with fellow developers, designers, and
          anyone who shares my passion for the web. If you're interested in
          collaborating on a project, have questions, or just want to chat, feel
          free to reach out to me. You can find me on LinkedIn and{" "}
          <a className="underline-offset-[0.25em] text-blue-500 underline" href="https://github.com/old4ever" target="_blank">
            GitHub
          </a>
          , or drop me an email at{" "}
          <a className="underline-offset-[0.25em] text-blue-500 underline" href="mailto:contact@old4ever.cyou">contact@old4ever.cyou</a>.
        </p>
        <p>
          Thank you for visiting my portfolio, and I look forward to the
          exciting opportunities that lie ahead on my journey as a front-end web
          developer!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
