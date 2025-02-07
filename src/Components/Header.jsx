import React, { useState } from "react";
import "./Header.css";
import Profile from "../assets/profile.jpg";
import LoginModal from "../Pages/LoginModal";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <h2>ATG.WORLD</h2>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>

      <div className="profile-section">
        {isLoggedIn ? (
          <>
            <img src={Profile} alt="Profile" className="profile-image" />
            <span className="profile-name">Shivam Dewangan</span>
          </>
        ) : (
          <button className="create-account-btn" onClick={handleLoginClick}>
            Create Account, It's Free!
          </button>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLoginSuccess} />
      )}
    </header>
  );
}

export default Header;
