import React from "react";
import { useLocation } from "react-router-dom";

const DetailedSuperHeroesDisplay = () => {
  const { state: hero } = useLocation();

  return <div>Detailed display works.!!</div>;
};

export default DetailedSuperHeroesDisplay;
