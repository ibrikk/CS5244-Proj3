import React from "react";
import { ShoppingBag } from "lucide-react";
import "../assets/css/Home.css";

const Hero = () => {
  return (
    <div className="homepage grid grid-full">
      <section className="grid-full hero-section">
        <div className="hero-content">
          <h1>Discover pages of unknown stories and wisdom.</h1>
        </div>
        <a href="/category" className="hero-button">
          <ShoppingBag className="pr-5" />
          <p className="cta-text">Start Shopping</p>
        </a>
      </section>
    </div>
  );
};

export default Hero;
