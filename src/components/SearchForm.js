import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import "../index.css";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter(character => character.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(info => {
        console.log(info.results);
        setData(info.results);
      });
  }, [searchTerm]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };



  return (
    <section className="search-form">
      <form>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={searchTerm}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map(character => (
          <div key={`${character.name}`}>
            <CharacterCard cardinfo={character} />
          </div>
        ))}
      </div>
    </section>
  );
}
