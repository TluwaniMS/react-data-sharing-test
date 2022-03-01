import React from "react";
import "./SuperHeroesComponent.css";
import SuperHeroesDisplay from "../../displays/SuperHeroesDisplay/SuperHeroesDisplay";
import { SuperHeroes } from "../../sample-data/SuperHeroesSampleData";

const SuperHeroesComponent = () => {
  return (
    <div className="main-super-heroes-container">
      {SuperHeroes.map((hero) => (
        <div className="" key={hero._id}>
          <SuperHeroesDisplay hero={hero} />
        </div>
      ))}
    </div>
  );
};

export default SuperHeroesComponent;
