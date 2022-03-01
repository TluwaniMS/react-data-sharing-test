import React from "react";
import "./SuperPowerTriggerDisplay.css";

const SuperPowerTriggerDisplay = ({ heroPower, triggerSuperPower }) => {
  return (
    <button className="button super-power-button" onClick={() => triggerSuperPower(heroPower)}>
      Power
    </button>
  );
};

export default SuperPowerTriggerDisplay;
