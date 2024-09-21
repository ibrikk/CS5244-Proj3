import HeaderDropdown from './HeaderDropdown';
import '../assets/css/global.css'
import '../assets/css/AppHeader.css';
import { Link } from 'react-router-dom';
function AppHeader(){
return(

  <header className="container">
    <section className="bookstore-logo">
      <Link to="/">
        <img
          src={require('../assets/images/site/bookstore-logo.png')}
          alt="Another Bookstore Logo"
          width="150px"
          height="auto"
        />
      </Link>
    </section>
    <section className="title-and-search-bar">
      <h1>
        <Link to="/" className="text-logo"> Another Bookstore </Link>
      </h1>
      <form action="">
        <input type="text" className="search-bar" /><br />
        <input type="submit" className="button search-button" value="Search" />
      </form>
    </section>
    <section className="header-dropdown-and-cart">
      <button className="button">cart (0)</button>
      <button className="button">login</button>
      <HeaderDropdown />
    </section>
  </header>
)
}
export default AppHeader;

