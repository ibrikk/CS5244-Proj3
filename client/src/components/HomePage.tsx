import React from "react";
import { View, ShoppingBag } from "lucide-react";
import orwell from "../assets/images/books/1984.jpg";
import "../assets/css/global.css";
import "../assets/css/Home.css";
import "../assets/css/CategoryBookList.css";
import "../assets/css/CategoryBookListItem.css";
import "../assets/css/CategoryNav.css";
import "../assets/css/HeaderDropdown.css";

const HomePage = () => {
  return (
    <div className="homepage">
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
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
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

      <div className="homepage grid grid-full">
        <section className="grid-full hero-section">
          <div className="hero-content">
            <h1>Discover pages of unknown stories and wisdom.</h1>
          </div>
          <a href="/category" className="hero-button">
            <ShoppingBag className="pr-5" />
            <p className="cta-text">Start Shopping</p>
          </a>
        </section>
      </div>

      <section className="homepage-card-section grid grid-full">
        <h3 className="homepage-category-name">New Releases</h3>
        <div className="cards-container grid grid-full">
          {/* Example Card */}
          <div className="card">
            <div className="book-image-read-btn-container">
              <img src={orwell} className="book-image" alt="1984" />
              <button className="view-btn">
                <View className="view-icon" />
              </button>
            </div>
            <div className="year-author">
              <p className="non-break">1984</p>
              <p className="book-author">George Orwell</p>
            </div>
            <div className="price-add">
              <p>$17.45</p>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          </div>
          {/* Repeat Cards */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
