import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto bg-pink-500 text-white flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Alexie Leanne L. Ramos.
            <br className="hidden lg:inline-block" />
            BSIT Student at Centro Escolar University (Manila)
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a passionate IT student with a love for K-pop, music, movies, series, and cooking. With a strong background in web development, cloud computing, and IT infrastructure, I aim to combine my technical skills with my creative interests. Whether it's building sleek websites, working with cloud services like AWS, or exploring new technologies, I am always eager to learn and innovate. When I'm not coding, you’ll find me enjoying my favorite K-pop songs or experimenting with new recipes in the kitchen. Let's collaborate and create something amazing together!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-3/4">
          <img
            className="object-cover object-center rounded-full border-4 border-white"
            alt="hero"
            src="https://lh3.googleusercontent.com/a/ACg8ocIBBHWrh8oJtaoIJJ8TKDWDFwIyM8suaBCZAJ_naVUVHhbGLm8=s192-c-rg-br100"
          />
        </div>
      </div>
    </section>
  );
}
