import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import InfluncerLanding from "../../components/influencer/InfluencerLanding";
import { NavBar } from "../../components/Nav-bar/NavBar";
import { Wave } from "../../components/wave/Wave";

const InfluenCerLandingPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <InfluncerLanding />
      <Wave/>
    </>
  );
};
export default InfluenCerLandingPage;
