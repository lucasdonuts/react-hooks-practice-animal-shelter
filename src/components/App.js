import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  // const [filterSelected, setFilterSelected] = useState(false);

  const updateFilters = (e) => {
    setFilters( { type: e.target.value } );
  }

  const onAdoptPet = (adoptedPetId) => {

    const updatedPets = pets.map( pet => {
      if( pet.id === adoptedPetId ) {
        pet.isAdopted = true;
      }
      return pet;
    });

    setPets(updatedPets);
  }

  const findPets = () => {
    let trailingUrl = '';

    if(filters.type !== 'all') {
      trailingUrl = `?type=${filters.type}`
    }

    fetch(`http://localhost:3001/pets${trailingUrl}`)
      .then( res => res.json() )
      .then( setPets )

  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onFindPetsClick={ findPets }
              onChangeType={ updateFilters }
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser
              pets={ pets }
              onAdoptPet={ onAdoptPet }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
