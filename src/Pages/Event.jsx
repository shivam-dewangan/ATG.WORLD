import React from "react";
import "../style/Events.css";

const events = [
  {
    id: 1,
    title: "React Workshop",
    description: "A hands-on workshop on React basics and advanced topics.",
    date: "February 15, 2025",
    location: "Online",
  },
  {
    id: 2,
    title: "JavaScript Conference",
    description: "Explore the latest trends in JavaScript development.",
    date: "March 5, 2025",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "A beginner-friendly bootcamp covering HTML, CSS, and JS.",
    date: "April 10, 2025",
    location: "New York, NY",
  },
  {
    id: 4,
    title: "AI in Web Development",
    description: "Learn how AI is transforming modern web development.",
    date: "May 20, 2025",
    location: "London, UK",
  },
  {
    id: 5,
    title: "CSS Masterclass",
    description: "Master advanced CSS techniques and create stunning designs.",
    date: "June 12, 2025",
    location: "Online",
  },
];

function Events() {
  return (
    <div className="events-container">
      
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h2 className="event-title">{event.title}</h2>
          <p className="event-description">{event.description}</p>
          <p className="event-date-location">
            <strong>Date:</strong> {event.date} <br />
            <strong>Location:</strong> {event.location}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Events;
