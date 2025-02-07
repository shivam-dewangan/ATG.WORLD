import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./components/Footer";
import Homepage from "./Pages/HomePage";
import AllPosts from "./Pages/AllPosts";
import Article from "./Pages/Article";
import Event from "./Pages/Event";
import Education from "./Pages/Education";
import Job from "./Pages/Job";
import WritePost from "./Pages/WritePost";

import LoginPage from "./Pages/LoginModal";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="content-container">
          <Homepage />
          
          <Routes>
            <Route path="/" element={<Navigate to="/all-posts" />} />
            <Route path="/all-posts" element={<AllPosts />} />
            <Route path="/article" element={<Article />} />
            <Route path="/event" element={<Event />} />
            <Route path="/education" element={<Education />} />
            <Route path="/job" element={<Job />} />
            <Route path="/write-post" element={<WritePost />} />
            
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
