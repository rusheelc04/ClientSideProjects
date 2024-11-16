import React, { useState } from "react";
import { AboutNav, BreedNav } from "./Navigation.js";
import PetList from "./PetList.js";

function App(props) {
  const pets = props.pets;
  const [petsState, setPets] = useState(pets);
  const uniqueBreeds = Array.from(new Set(petsState.map(pet => pet.breed)));
  const mainTitle = "Adopt a Pet";

  const adoptPet = (petName) => {
    const updatedPets = petsState.map(pet => {
      if (pet.name === petName) {
        return { ...pet, adopted: true };
      }
      return pet;
    });
    setPets(updatedPets);
  };

  return (
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>{mainTitle}</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <AboutNav />
            <BreedNav breeds={uniqueBreeds} />
          </div>
          <div id="petList" className="col-9">
            <PetList pets={petsState} adoptCallback={adoptPet} />
          </div>
        </div>
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;