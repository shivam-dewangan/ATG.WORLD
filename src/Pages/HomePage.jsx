import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "All Posts", path: "/all-posts" },
    { label: "Article", path: "/article" },
    { label: "Event", path: "/event" },
    { label: "Education", path: "/education" },
    { label: "Job", path: "/job" },
  ];

  return (
    <div className="homepage-container">
      {/* Mini Header Section */}
      <div className="mini-header">
        <ul className="mini-header-list">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className={location.pathname === tab.path ? "active" : ""}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* Buttons Section */}
        <div className="button-section">
          <button
            className="write-post-button"
            onClick={() => navigate("/write-post")}
          >
            Write a Post
          </button>
          <button
            className="leave-group-button"
            onClick={() => navigate("/leave-group")}
          >
            Leave Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
