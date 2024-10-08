import React from "react";
import Hero from "./Hero";
import HomeNavBar from "./HomeNavBar";
import Card from "./Card";
import { Book, Category } from "../types";

import "../assets/css/global.css";
import "../assets/css/Home.css";
import "../assets/css/CategoryBookList.css";
import "../assets/css/CategoryBookListItem.css";
import "../assets/css/CategoryNav.css";
import "../assets/css/HeaderDropdown.css";

interface HomePageProps {
  mockData: Category[];
  toggleSignIn: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ mockData, toggleSignIn }) => {
  return (
    <>
      <HomeNavBar toggleSignIn={toggleSignIn} />

      <Hero />

      <section className="grid grid-full">
        <h3 className="homepage-category-name">{mockData[0].category}</h3>
        <div className="cards-container grid grid-full">
          {mockData[0].books.map((book: Book) => (
            <Card key={book.id} book={book} isHomePage={true} />
          ))}
        </div>

        <h3 className="homepage-category-name">{mockData[1].category}</h3>
        <div className="cards-container grid grid-full">
          {mockData[1].books.map((book: Book) => (
            <Card key={book.id} book={book} isHomePage={true} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
