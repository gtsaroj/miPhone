import React from "react";
import "./Skills.css";
import Frontend from "./Skill.Card";
import Backend from "./Backend";
import SkillCard from "./Skill.Card";

const Skills = () => {
  const skills = [
    { title: "HTML5", subtitle: "Advanced" },
    { title: "CSS3", subtitle: "Advanced" },
    { title: "Javascript", subtitle: "Advanced" },
    { title: "Sass", subtitle: "Advanced" },
    { title: "Redux", subtitle: "Advanced" },
    { title: "Git", subtitle: "Advanced" },
    { title: "React Js", subtitle: "Intermediate" },
    { title: "Typescript", subtitle: "Advanced" },
    { title: "Tailwind CSS", subtitle: "Advanced" },
  ];

  const frontendSkills = {
    title: "Frontend Skills",
    skills: skills,
  };

  const backendSkills = {
    title: "Backend Skills",
    skills: [
      { title: "Node Js", subtitle: "Intermediate" },
      { title: "Mongo DB", subtitle: "Intermediate" },
      { title: "Cloudinary", subtitle: "Intermediate" },
      { title: "Express Js", subtitle: "Intermediate" },
      { title: "Postgresql", subtitle: "Intermediate" },
      { title: "Firebase", subtitle: "Intermediate" },
      { title: "Redis", subtitle: "Intermediate" },
    ],
  };

  return (
    <section
      className="w-full py-5 flex flex-col items-center justify-center"
      id="skills"
    >
      <h2 className=" text-[var(--primary-text)] tracking-wider text-lg ">
        Skills
      </h2>
      <span className=" text-xl tracking-wider text-[var(--secondary-text)] ">
        MY technical level
      </span>

      <div className="mt-10 flex  md:flex-row flex-col items-center lg:items-start gap-5 justify-center">
        <SkillCard
          skills={frontendSkills.skills}
          title={frontendSkills.title}
        />
        <SkillCard skills={backendSkills.skills} title={backendSkills.title} />
      </div>
    </section>
  );
};

export default Skills;
