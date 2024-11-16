import React from "react";

function PetCard(props) {
    const petData = props.petData;
    const adoptCallback = props.adoptCallback;

    let displayedName;
    if (petData.adopted) {
        displayedName = petData.name + " (Adopted)";
    } else {
        displayedName = petData.name;
    }

    const handleAdopt = () => {
        adoptCallback(petData.name);
    };

    return (
        <div className="card" onClick={handleAdopt}>
            <img className="card-img-top" src={petData.img} alt={petData.name} />
            <div className="card-body">
                <h3 className="card-title">{displayedName}</h3>
                <p className="card-text">{petData.sex} {petData.breed}</p>
            </div>
        </div>
    );
}

export default function PetList(props) {
    const pets = props.pets;
    const adoptCallback = props.adoptCallback;
    const title = "Dogs for Adoption";
    const arrayPetCards = pets.map((pet) => {
        return <PetCard key={pet.name} petData={pet} adoptCallback={adoptCallback} />
    });

    return (
        <div>
            <h2>{title}</h2>
            <div className="card-deck">
                {arrayPetCards}
            </div>
        </div>
    );
}