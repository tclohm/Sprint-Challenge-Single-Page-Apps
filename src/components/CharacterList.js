import React, { useEffect, useState } from "react";
//import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import SearchForm from "./SearchForm.js"

export default function CharacterList() {
  // big character list
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios.get("https://rickandmortyapi.com/api/character/")
          .then(response => {
            let arrayOfObjects = response.data.results;

            let names = arrayOfObjects.map( (object) => {
              return object.name
            })

            setCharacters(names);

          })
          .catch(error => {
            console.log("Error", error);
          })

  }, [characters]);

  return (
    <section className="character-list">
      <SearchForm characters={characters}/>
    </section>
  );
}
