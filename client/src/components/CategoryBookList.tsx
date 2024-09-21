import React from "react";

const CategoryPage = () => {
  return (
    <div className="category-page grid grid-full">
      <h3 className="category-name">Fiction</h3>
      <div className="cards-container grid grid-full">
        {/* Example Card */}
        <div className="card">
          <div className="book-image-read-btn-container">
            <img
              src="/images/books/great-gratsby.jpg"
              className="book-image"
              alt="The Great Gatsby"
            />
            <button className="view-btn">
              <i data-lucide="view" className="view-icon"></i>
            </button>
          </div>
          <div className="year-author">
            <p className="non-break">The Great Gatsby</p>
            <p className="book-author">F-Scott Fitzgerald</p>
          </div>
          <div className="price-add">
            <p>$15.99</p>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        </div>
        {/* Repeat Cards */}
      </div>
    </div>
  );
};

export default CategoryPage;
