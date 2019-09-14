import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(info => {
        console.log(info.results);
        setData(info.results);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>
        {data.map(character => (
          <div key={`${character.name}`}>Name: {`${character.name}`}</div>
        ))}
      </h2>
    </section>
  );
}
