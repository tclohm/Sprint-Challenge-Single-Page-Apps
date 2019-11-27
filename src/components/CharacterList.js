import React, { useEffect, useState } from "react";
//import { Route } from "react-router-dom";
import axios from "axios";
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // big character list
  const [names, setNames] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios.get("https://rickandmortyapi.com/api/character/?page=3")
          .then(response => {
            let arrayOfObjects = response.data.results;

            let charDetails = arrayOfObjects.map( (object) => {
              let obj = {};
              obj["name"] = object.name;
              obj["gender"] = object.gender;
              obj["origin"] = object.origin;
              obj["status"] = object.status;
              return obj;
            });
            console.log(charDetails);
            setCharacters(charDetails);

            // names for search
            let names = arrayOfObjects.map( (object) => {
              return object.name
            })
            setNames(names);
          })
          .catch(error => {
            console.log("Error", error);
          })

  }, []);


  return (
      <section>
        <SearchForm names={names} characters={characters} />
      </section>
  );
}
