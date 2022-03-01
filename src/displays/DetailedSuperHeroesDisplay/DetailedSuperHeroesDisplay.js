import React from "react";
import { useLocation } from "react-router-dom";
import SuperPowerTriggerDisplay from "../SuperPowerTriggerDisplay/SuperPowerTriggerDisplay";

const DetailedSuperHeroesDisplay = () => {
  const { state: hero } = useLocation();

  return (
    <div>
      <div>{hero.name}</div>
      <div>
        <SuperPowerTriggerDisplay />
      </div>
    </div>
  );
};

export default DetailedSuperHeroesDisplay;
