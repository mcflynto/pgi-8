import React from "react";
import { Link } from "react-router-dom";
import ExperienceEntry from "../../ui-components/ExperienceEntry/ExperienceEntry";
import "./About.css";

import experienceEntries from "../../data/experienceEntries.json";
import educationEntries from "../../data/educationEntries.json";

const About = () => {
  return (
    <div className="about">
      <h1>Julian Treutler</h1>
      <div className="experience">
        <h2>Experience</h2>
        {experienceEntries.map((experienceEntry, i) => {
          return <ExperienceEntry entry={experienceEntry} key={`entry-${i}`} />;
        })}
      </div>

      <div className="education">
        <h2>Education</h2>
        {educationEntries.map((educationEntry, i) => {
          return (
            <ExperienceEntry entry={educationEntry} key={`edu-entry-${i}`} />
          );
        })}
      </div>

      <div className="projects">
        <h2>Noticeable Projects</h2>

        <h3>
          <s>Redacted</s> (Automotive industry client)
        </h3>
        <p>
          Responsible for a project with over $1MM in total budget, working
          together with six team members on a highly responsive full stack
          application for a client from the German automotive industry.
        </p>

        <h3>Ausbildung.de</h3>
        <p>
          Actively worked on ‘Ausbildung.de’, the biggest platform for the
          German apprenticeship system based on Ruby on Rails with over 300k
          pageviews a day.
        </p>
      </div>

      <Link to="/">{">"} Home</Link>
    </div>
  );
};

export default About;
