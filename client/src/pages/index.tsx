import React from "react";
import { useRouter } from "next/router";
import LadingPage from "./landing-page";

export default function Welcome() {
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto">HOME</div>
      <LadingPage/>
    </>
  );
}
