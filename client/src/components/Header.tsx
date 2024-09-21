import React from "react";
import { ShoppingBag } from "lucide-react";
import "../assets/css/AppHeader.css";
import "../assets/css/global.css";

const Header = () => {
  return (
    <header className="grid grid-full">
      <section className="grid grid-full">
        <div className="top-container grid-full">
          <button className="sign-in-btn">Sign In</button>
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
