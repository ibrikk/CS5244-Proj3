import React from "react";
import { View } from "lucide-react";

interface CardProps {
  picture: string;
}

const Card: React.FC<CardProps> = ({ picture }) => {
  return (
    <div className="card">
      <div className="book-image-read-btn-container">
        <img src={picture} className="book-image" alt="1984" />
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
  );
};

export default Card;
