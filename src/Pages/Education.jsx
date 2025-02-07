import React from "react";
import "../style/Education.css";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    year: "2021 - 2025",
    description: "Focused on software development, algorithms, and data structures.",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "Green Valley High School",
    year: "2019 - 2021",
    description: "Specialized in science with mathematics and computer science.",
  },
  {
    id: 3,
    degree: "Online Certificate in Web Development",
    institution: "Coursera",
    year: "2023",
    description: "Completed full-stack web development program.",
  },
];

function Education() {
  return (
    <div className="education-container">
      
      {educationData.map((edu) => (
        <div key={edu.id} className="education-card">
          <h2 className="degree">{edu.degree}</h2>
          <p className="institution">{edu.institution}</p>
          <p className="year">{edu.year}</p>
          <p className="description">{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
