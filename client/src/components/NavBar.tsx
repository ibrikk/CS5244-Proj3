import React from "react";

const NavBar = () => {
  return (
    <nav className="grid grid-full">
      <div className="custom-select">
        <select>
          <option value="">Categories</option>
          <option value="1">Fiction</option>
          <option value="2">Non-fiction</option>
          <option value="3">Science</option>
          <option value="4">History</option>
          <option value="5">Biography</option>
        </select>
        <div className="select-styled">Categories</div>
        <ul className="select-options">
          <a href="category.html">
            <li rel="1">Fiction</li>
          </a>
          <a href="category.html">
            <li rel="2">Non-fiction</li>
          </a>
          <a href="category.html">
            <li rel="3">Science</li>
          </a>
          <a href="category.html">
            <li rel="4">History</li>
          </a>
          <a href="category.html">
            <li rel="5">Biography</li>
          </a>
        </ul>
      </div>
      <div className="search-bar">
        <form action="/category">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <div className="homepage-categories">
        <a href="/category/Fiction" className="category-link">
          New Releases
        </a>
        <a href="/category/BestSellers" className="category-link">
          Best Sellers
        </a>
        <a href="/category/Trending" className="category-link">
          Trending
        </a>
        <a href="/category/OnSale" className="category-link">
          On Sale
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
