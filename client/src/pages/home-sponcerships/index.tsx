import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { NavProfile } from "../../components/Nav-bar/Nav-Profile";
import { HomeSponcerships } from "../../components/sponcership/Sponcership";

const HomeSponcerShipsPage: NextPage = () => {
  return (
    <div className="bg-sponcer-home">
        <header className="sticky bg-[#4998DD] shadow-md shadow-[#9de5fd] top-0 z-50">
        <NavProfile />
      </header>
      <HomeSponcerships />
    </div>
  );
};
export default HomeSponcerShipsPage;
