import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import InfluncerLanding from "../../components/influencer/InfluencerLanding";
import { NavProfile } from "../../components/Nav-bar/Nav-Profile";
import { NavBar } from "../../components/Nav-bar/NavBar";
import { HomeSponcerships } from "../../components/sponcership/Sponcership";

const HomeSponcerShipsPage: NextPage = () => {
  return (
    <div className="bg-sponcer-home">
     <NavProfile />
      <HomeSponcerships />
    </div>
  );
};
export default HomeSponcerShipsPage;
