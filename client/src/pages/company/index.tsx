import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

import { NavBar } from "../../components/Nav-bar/NavBar";
import CompanyPage from "../../components/company/CompanyPage";
import { Wave } from "../../components/wave/Wave";

interface CompanyLandingProps {}

const CompanyLanding: FunctionComponent<CompanyLandingProps> = (props) => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <CompanyPage />
      <Wave />
    </>
  );
};

export default CompanyLanding;
