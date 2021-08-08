import React from "react";
import "./ExperienceEntry.css";

export type ExperienceEntryType = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

type ExperienceEntryProps = {
  entry: ExperienceEntryType;
};

const ExperienceEntry = ({ entry }: ExperienceEntryProps) => {
  return (
    <div className="entry">
      <div className="title">{entry.title}</div>
      <div className="date">
        {entry.startDate} - {entry.endDate}
      </div>
      <div className="description">{entry.description}</div>

      <div id="bubble" />
    </div>
  );
};

export default ExperienceEntry;
