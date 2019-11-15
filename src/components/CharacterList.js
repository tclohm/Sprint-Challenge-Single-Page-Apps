import React, { useEffect, useState } from "react";
//import { Route } from "react-router-dom";
import axios from "axios";


export default function CharacterList() {
  // big character list
  const [characters, setCharacters] = useState([]);
    // search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
    // search
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios.get("https://rickandmortyapi.com/api/character/")
          .then(response => {
            let arrayOfObjects = response.data.results;

            let names = arrayOfObjects.map( (object) => {
              return object.name
            })
            console.log(names);
            setCharacters(names);

          })
          .catch(error => {
            console.log("Error", error);
          })

  }, [characters]);


  // search
  useEffect(() => {
    const results = characters.filter( char => {
      return char.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setSearchResults(results);
  }, [searchTerm]);
 


  return (
    <section className="character-list">
    <h1>CHARACTERS</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        ></input>


        {
          searchTerm.length == 0 ? characters.map( (character) => (
          <ul key={character}>
            <li>{character}</li>
          </ul>
          )) 
          
          :

          searchResults.map( (character) => (
          <ul key={character}>
            <li>{character}</li>
          </ul>
        ))
        }
      </div>
    </section>
  );
}
