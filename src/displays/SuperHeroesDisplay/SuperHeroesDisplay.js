import React from "react";
import { Link } from "react-router-dom";

const SuperHeroesDisplay = ({ hero }) => {
  return <Link to={'/detailed-super-hero-view'} className="">{hero.name}</Link>;
};

export default SuperHeroesDisplay;
