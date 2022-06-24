import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import { NavBar } from "../../components/Nav-bar/NavBar";
import { Wave } from "../../components/wave/Wave";




const HomePage: NextPage = () => {

  return (
    <>
      <NavBar />
      <Login />
      <Wave />
    </>
  );
};
export default HomePage;
