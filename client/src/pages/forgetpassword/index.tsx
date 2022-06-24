import React from "react";
import ForgotPassword from "../../components/forget-password/ForgetPassword";
import { NavBar } from "../../components/Nav-bar/NavBar";
import { Wave } from "../../components/wave/Wave";


export default function ForgotPasswordPage() {
  return (
    <>
      <NavBar />
      <ForgotPassword />
      <Wave />
     </>
  );
}