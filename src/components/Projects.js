import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

// Example projects array (replace with your actual project data)
const projects = [
  {
    title: "Calculator",
    subtitle: "JavaScript, React",
    description: "A simple calculator built with React that supports basic arithmetic operations.",
    image: "https://5.imimg.com/data5/KM/QW/MY-2775075/casio-calculator.jpg", // Replace with your own image
    link: "https://link-to-your-calculator-project.com", // Replace with your project link
  },
  {
    title: "PingPong Game",
    subtitle: "JavaScript, HTML5 Canvas",
    description: "A fun PingPong game built using HTML5 Canvas and JavaScript, featuring a 2-player mode.",
    image: "https://media.istockphoto.com/id/1425158165/photo/table-tennis-ping-pong-paddles-and-white-ball-on-blue-board.jpg?s=612x612&w=0&k=20&c=KSdi4bEGoxdhaGMnl6CZaqTLbKbobArgrrpLem3oN98=", // Replace with your own image
    link: "https://drive.google.com/file/d/1eTwrNehtNFsWslw6jvUQCmK5qwUTp9I3/view", // Replace with your project link
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-pink-500 body-font">
      <div className="px-5 py-10 mx-auto text-center lg:px-40 max-w-auto">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are some of the projects I've built using various technologies.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="sm:w-1/2 w-full p-4">
              <div className="flex relative">
                <img
                  alt="project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
