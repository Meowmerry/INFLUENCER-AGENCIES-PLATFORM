import React from "react";
import { useRouter } from "next/router";
import HomePage from "./landing-page";

export default function Welcome() {
  const router = useRouter();

  return (
    <div className="main-container headerBG">
      <HomePage />
</div>
  );
}
