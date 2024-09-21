import "../assets/css/CategoryBookListItem.css";
import "../assets/css/global.css";
import "../types";
import "../types";
import { BookItem } from "../types";
import { View } from "lucide-react";
import orwell from "../assets/images/books/1984.jpg";

const bookImageFileName = (book: BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.gif`;
};

function CategoryBookListItem(props: BookItem) {
  return (
    <li className="book-box">
      <div className="book-image">
        <img
          src={require("../assets/images/books/" + bookImageFileName(props))}
          alt="book.title"
        />
      </div>
      <div className="book-title">{"title Comes here"}</div>
      <div className="book-author">{"author Comes here"}</div>
      <div className="book-price">${"price Comes here"}</div>
      <button className="button">Add to Cart</button>
      <button className="button">Read Now</button>
    </li>
  );
}

{
  /* <div className="card">
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
</div>; */
}
export default CategoryBookListItem;
