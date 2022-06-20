import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { LadingPage } from "../../components/LandingPage";
import { NavBar } from "../../components/nav-bar/NavBar";


const HomePage: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <NavBar />
      </header>
      <LadingPage />
    </>
  );
};
export default HomePage;
