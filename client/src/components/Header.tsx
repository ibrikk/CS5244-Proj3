import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import "../assets/css/AppHeader.css";
import "../assets/css/global.css";
import profilePic from "../assets/images/site/profile-pic.svg";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <header className="grid grid-full">
      <section className="grid grid-full">
        <div className="top-container grid-full">
          {isSignedIn ? (
            <div className="signed-in-image-container" onClick={toggleSignIn}>
              <img src={profilePic} alt="Profile" />
              <div className="name-email-container">
                <p className="user-name">Ibrahim Khalilov</p>
                <p className="user-email">ibrahimk@vt.edu</p>
              </div>
            </div>
          ) : (
            <button className="sign-in-btn" onClick={toggleSignIn}>
              Sign In
            </button>
          )}

          <a href="/">
            <div className="logo-container">
              <span className="material-symbols-outlined logo pr-5">
                book_5
              </span>
              <h1>ibo.ok</h1>
            </div>
          </a>
          <a href="/" className="shopping-bag">
            <ShoppingBag color="black" />
            <span className="badge">3</span>
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
