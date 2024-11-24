import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-white bg-pink-500">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
            I have a solid foundation in IT, with skills in web development
            (HTML, CSS, JavaScript), basic programming (Python, JavaScript),
            and version control using Git. I’m familiar with operating systems
            like Windows and Linux, as well as networking concepts.
            Additionally, I have experience with cloud platforms like AWS and
            Azure, and am comfortable working with databases such as MySQL and
            SQL.
          </p>
        </div>
      </div>
    </section>
  );
}
