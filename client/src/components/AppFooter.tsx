import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";


function AppFooter(){
return(
  <footer className="container">
    <section className="links">
      <Link to="/">about</Link>
      <Link to="/">contact</Link>
      <Link to="/">directions</Link>
    </section>
    <section className="social-media-icons">
      <Link to="/" className="button">Facebook</Link>
      <Link to="/" className="button">Twitter</Link>
    </section>
  </footer>
)
}
export default AppFooter;
