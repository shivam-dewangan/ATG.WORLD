import React, { useState } from "react";
import "./LoginModal.css";
import loginImage from "../assets/login.png";

function LoginModal() {
  const [isOpen, setIsOpen] = useState(true); // Modal open state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
    setIsOpen(false); // Close modal after form submission
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={closeModal}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          ✕
        </button>
        <div className="left-side">
          <h2>Sign In</h2>
          <p>Let’s learn, share & inspire each other!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </form>
          <button className="social-btn facebook">Sign in with Facebook</button>
          <button className="social-btn google">Sign in with Google</button>
        </div>
        <div className="right-side">
          <img src={loginImage} alt="Login Illustration" className="login-image" />
          <p className="signup-link">
            Don’t have an account? <a href="/">Create new for free!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
