import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryBookList";
import Footer from "./components/Footer";

import "./assets/css/global.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* TODO: Add a functionality to the button to change on toggle to the profile pic and vice versa */}
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO: Make the Nav different than homepage */}
            {/* TODO: Render cards in Homepage Card.tsx */}
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
