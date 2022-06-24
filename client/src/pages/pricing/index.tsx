import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/Nav-bar/NavBar";
import Pricing from "../../components/Pricing/Pricing";
import { Wave } from "../../components/wave/Wave";



const HomePage: NextPage = () => {

  return (
    <>
      <NavBar />
      <Pricing />
      <Wave />
    </>
  );
};
export default HomePage;
