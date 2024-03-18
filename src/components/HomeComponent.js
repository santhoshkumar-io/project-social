import React from "react";
import Container from "./Container";
import Navigation from "./Navigation";
export default function HomeComponent() {
  return (
    <div className="text-dm flex flex-row w-fit">
      <Navigation />
      <Container />
    </div>
  );
}
