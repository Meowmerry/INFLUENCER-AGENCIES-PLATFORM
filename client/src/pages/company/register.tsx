import React, { FunctionComponent, useState } from "react";
import RegisterCompany from "../../components/company/RegisterCompany";
import { NavBar } from "../../components/nav-bar/NavBar";

interface RegisterPageProps {}

const RegisterPage: FunctionComponent<RegisterPageProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div>
   
      <NavBar />
      <RegisterCompany />
    </div>
  );
};

export default RegisterPage;
