import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios.get("https://rickandmortyapi.com/api/character/")
          .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
          })
          .catch(error => {
            console.log("Error", error);
          })

  }, [characters]);

  return (
    <section className="character-list">
      <h2>The Characters!</h2>
      {characters.map( (character) => (
        <ul key={character.id}>
          <li>Name: {character.name}</li>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Status: {character.status}</li>
        </ul>
      ))}
    </section>
  );
}
