import React from "react";
import HomePage from "./landing-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../components/footer/Footer";

export default function Welcome() {
  return (
    <div className="main-container headerBG">
      <HomePage />
      <Footer/>
    </div>
  );
}
