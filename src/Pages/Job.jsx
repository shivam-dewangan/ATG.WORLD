import React from "react";
import "../style/Job.css";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2023 - Present",
    description:
      "Developing and optimizing user interfaces using React, ensuring responsive and interactive experiences.",
  },
  {
    id: 2,
    title: "Intern - Software Engineer",
    company: "Innovate Labs",
    duration: "June 2022 - Dec 2022",
    description:
      "Worked on full-stack development projects, including REST API integrations and database management.",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2021 - 2022",
    description:
      "Designed and developed custom websites for small businesses using HTML, CSS, and JavaScript.",
  },
];

function Job() {
  return (
    <div className="job-container">
      
      {jobData.map((job) => (
        <div key={job.id} className="job-card">
          <h2 className="job-title">{job.title}</h2>
          <p className="company">{job.company}</p>
          <p className="duration">{job.duration}</p>
          <p className="description">{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Job;
