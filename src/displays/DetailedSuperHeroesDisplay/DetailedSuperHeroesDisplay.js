import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SuperPowerTriggerDisplay from "../SuperPowerTriggerDisplay/SuperPowerTriggerDisplay";

const DetailedSuperHeroesDisplay = () => {
  const { state: hero } = useLocation();
  const [superPowerAlert, setSuperPowerAlert] = useState("");

  const triggerSuperPower = (superPower) => {
    setSuperPowerAlert(superPower);
    alert(`${hero.name} says ${superPower}!!!`);
  };

  return (
    <div>
      <div className="hero-name-container">{hero.name}</div>
      <div>
        <SuperPowerTriggerDisplay heroPower={hero.power} triggerSuperPower={triggerSuperPower} />
      </div>
    </div>
  );
};

export default DetailedSuperHeroesDisplay;
