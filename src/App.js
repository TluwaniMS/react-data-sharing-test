import "./App.css";
import { Route, Routes } from "react-router-dom";
import DetailedSuperHeroesComponent from "./components/DetailedSuperHeroesComponent/DetailedSuperHeroesComponent";
import SuperHeroesComponent from "./components/SuperHeroesComponent/SuperHeroesComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SuperHeroesComponent />} />
        <Route path="/detailed-super-hero-view" element={<DetailedSuperHeroesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
