import React from 'react'
import { Link } from "react-router-dom";

const AboutContainer = ({ title, text }) => {
  const prefedinedTextOptions = {
    "About Me": <>
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
      </p></>,
    "My Journey": <>
      <h1 className="text-xl pb-4">My Journey</h1>
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
      </p></>,
    "My Approach": <>
      <h1 className="text-xl pb-4">My Approach</h1>
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
    </>,
    "What I Can Do": <>
      <h1 className="text-xl pb-4 ">What I Can Do</h1>
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
    </>,
    "My Portfolio": <>
      <h1 className="text-xl pb-4 ">My Portfolio</h1>
      <p>
        Take a look at <Link className="underline-offset-[0.25em] text-blue-500 underline" to="/links">my portfolio</Link> to see some of
        the projects I've been working on. Each project represents a unique
        challenge and a valuable learning experience. I'm excited to continue
        building and refining my skills and to share my journey with you.
      </p>
    </>,
    "Let's Connect": <>
      <h1 className="text-xl pb-4 ">Let's Connect</h1>
      <p>
        I'm always eager to connect with fellow developers, designers, and
        anyone who shares my passion for the web. If you're interested in
        collaborating on a project, have questions, or just want to chat, feel
        free to reach out to me. You can find me on {" "}
        <a className="underline-offset-[0.25em] text-blue-500 underline" href="https://linkedin.com/in/dmytro-stanchiev/" target="_blank">
          LinkedIn
        </a>{" "}and{" "}

        <a className="underline-offset-[0.25em] text-blue-500 underline" href="https://github.com/old4ever" target="_blank">
          GitHub
        </a>
        , or drop me an email at{" "}
        <a className="underline-offset-[0.25em] text-blue-500 underline" href="mailto:contact@dmytros.dev">contact@dmytros.dev</a>.
      </p>
      <p>
        Thank you for visiting my portfolio, and I look forward to the
        exciting opportunities that lie ahead on my journey as a front-end web
        developer!
      </p>
    </>
  }
  if (!text) {
    text = "Lores Ipsum"
  }

  return (
    <div className=" max-w-[40rem] rounded-xl border-2 dark:border-slate-400/10 border-slate-900/40 bg-neutral-100 p-4 dark:bg-neutral-900">
      {prefedinedTextOptions[title] ? prefedinedTextOptions[title] : <><h1>{title}</h1><p>{text}</p></>}
    </div>

  )
}

export default AboutContainer
