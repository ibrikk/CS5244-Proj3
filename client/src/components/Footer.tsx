import React from "react";

const Footer = () => {
  return (
    <footer className="grid-full">
      <a href="/">
        <span className="material-symbols-outlined logo">book_5</span>
      </a>
      <p>©2024  Ibo.ok inc. All Rights Reserved</p>
      <section className="social-media-icons">
        <a href="/">
          <i data-lucide="mail"></i>
        </a>
        <a href="/">
          <i data-lucide="map-pin"></i>
        </a>
        <a href="/">
          <i data-lucide="facebook"></i>
        </a>
        <a href="/" className="x-twitter-icon">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
