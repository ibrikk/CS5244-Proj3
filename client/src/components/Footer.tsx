import React from "react";
import { Mail, MapPin, Facebook } from "lucide-react";
import "../assets/css/global.css";
import "../assets/css/AppHeader.css";
import "../assets/css/AppFooter.css";

const Footer = () => {
  return (
    <footer className="grid-full">
      <a href="/">
        <span className="material-symbols-outlined logo">book_5</span>
      </a>
      <p>©2024  Ibo.ok inc. All Rights Reserved</p>
      <section className="social-media-icons">
        <a href="/">
          <Mail />
        </a>
        <a href="/">
          <MapPin />
        </a>
        <a href="/">
          <Facebook />
        </a>
        <a href="/" className="x-twitter-icon">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
