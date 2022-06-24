import React, { FunctionComponent, useState } from "react";
import RegisterCompany from "../../components/company/RegisterCompany";
import { NavBar } from "../../components/Nav-bar/NavBar";
import { Wave } from "../../components/wave/Wave";

interface RegisterPageProps {}

const RegisterPage: FunctionComponent<RegisterPageProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div>
      <NavBar />
      <RegisterCompany />
      <Wave />
    </div>
  );
};

export default RegisterPage;
