import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Card from "./Card";
import orwell from "../assets/images/books/1984.jpg";

import "../assets/css/global.css";
import "../assets/css/Home.css";
import "../assets/css/CategoryBookList.css";
import "../assets/css/CategoryBookListItem.css";
import "../assets/css/CategoryNav.css";
import "../assets/css/HeaderDropdown.css";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <Hero />

      <section className="homepage-card-section grid grid-full">
        <h3 className="homepage-category-name">New Releases</h3>
        <div className="cards-container grid grid-full">
          <Card picture={orwell} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
