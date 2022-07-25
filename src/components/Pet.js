import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, name, type, gender, age, weight, isAdopted } = pet;

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          { name }{ gender ==='male' ? '♂' : '♀'}
        </span>
        <div className="meta">
          <span className="date">{ type.charAt(0).toUpperCase() + type.slice(1) }</span>
        </div>
        <div className="description">
          <p>Age: { age } years old</p>
          <p>Weight: { weight } lbs</p>
        </div>
      </div>
      <div className="extra content">
        {
          isAdopted
            ? <button className="ui disabled button">Already adopted</button>
            : <button
                className="ui primary button"
                onClick={ () => onAdoptPet(id) }
              >
                Adopt pet
              </button>
        }
      </div>
    </div>
  );
}

export default Pet;
