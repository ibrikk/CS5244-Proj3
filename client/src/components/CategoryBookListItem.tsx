import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";

const bookImageFileName =  (book:BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.gif`;
};

function CategoryBookListItem(props:BookItem) {
return (

  <li className="book-box">
   <div className="book-image">
      <img src={require('../assets/images/books/' + bookImageFileName(props))}
        alt="book.title"
      />
    </div>
    <div className="book-title">{"title Comes here"}</div>
    <div className="book-author">{"author Comes here"}</div>
    <div className="book-price">${"price Comes here"}</div>
    <button className="button">Add to Cart</button>
    <button className="button">Read Now</button>
  </li>

)
}
export default CategoryBookListItem;
