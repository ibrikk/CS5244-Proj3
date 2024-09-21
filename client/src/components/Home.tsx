
import HomeCategoryList from './HomeCategoryList';
import '../assets/css/global.css';
import '../assets/css/Home.css'



function Home() {
    return (

        <div className="home-pages">
            <div className="welcome-text flow-content container dark-background">
                <h2>Welcome to Another Bookstore</h2>
                <p>
                    Another Bookstore is a client-side application written using Vue
                    components.
                </p>
                <p>
                    It includes a home page and a category page. Both pages have the same
                    header and footer.
                </p>
                <p>
                    You can navigate to the category page by choosing any category from the
                    dropdown menu in the header. You can navigate to the home page by
                    clicking on the logo in the header.
                </p>
                <p>Take some time and explore the code.</p>
            </div>
            <div className="category-images container">
               <HomeCategoryList />
            </div>
        </div>
    )
}

export default Home;
