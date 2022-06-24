import React, { FunctionComponent, useState } from "react";
import RegisterInfluencer from "../../components/influencer/RegisterInfluencer";
import { NavBar } from "../../components/Nav-bar/NavBar";
import { Wave } from "../../components/wave/Wave";

interface RegisterIncPageProps {}

const RegisterInfluencerPage: FunctionComponent<RegisterIncPageProps> = (
  props
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div>
      <NavBar />
      <RegisterInfluencer />
      <Wave />
    </div>
  );
};

export default RegisterInfluencerPage;
