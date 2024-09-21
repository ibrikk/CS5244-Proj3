import React from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="grid grid-full">
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

      <section className="homepage-card-section grid grid-full">
        <h3 className="homepage-category-name">New Releases</h3>
        <div className="cards-container grid grid-full">
          {/* Example Card */}
          <div className="card">
            <div className="book-image-read-btn-container">
              <img
                src="/images/books/1984.jpg"
                className="book-image"
                alt="1984"
              />
              <button className="view-btn">
                <i data-lucide="view" className="view-icon"></i>
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
