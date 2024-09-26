import React from "react";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";

const CategoryNavBar = () => {
  return (
    <nav className="grid grid-full">
      <div className="search-bar">
        <form action="category.html">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <div className="homepage-categories">
        <a href="category.html?category=Fiction" className="selected-category">
          Fiction
        </a>
        <a href="category.html?category=Business" className="category-link">
          Business
        </a>
        <a href="category.html?category=Romance" className="category-link">
          Romance
        </a>
        <a href="category.html?category=Travel" className="category-link">
          Travel
        </a>
        <a href="category.html?category=Cooking" className="category-link">
          Cooking
        </a>
        <a
          href="category.html?category=Action&Adventure"
          className="category-link"
        >
          Action & Adventure
        </a>
        <a href="category.html?category=DIY" className="category-link">
          DIY
        </a>
      </div>
    </nav>
  );
};

export default CategoryNavBar;
