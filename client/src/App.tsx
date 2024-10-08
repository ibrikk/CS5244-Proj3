import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mockData from "./types";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryBookList";
import Footer from "./components/Footer";

import "./assets/css/global.css";
import "./App.css";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignedIn(true);
  };
  return (
    <Router basename="IbrahimBookstoreReact">
      <div className="app-container">
        {/* TODO: Add a functionality to the button to change on toggle to the profile pic and vice versa */}
        <Header isSignedIn={isSignedIn} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage mockData={mockData} toggleSignIn={toggleSignIn} />
              }
            />
            {/* TODO: Make the Nav different than homepage */}
            <Route
              path="/category/:categoryName"
              element={
                <CategoryPage mockData={mockData} toggleSignIn={toggleSignIn} />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
