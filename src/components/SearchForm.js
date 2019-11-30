import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {

	const { characters } = props
	// search
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

    // search
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
  }

  console.log("results:", results)

  useEffect(() => {

    let result = characters.filter( (person, index) => {
              return person.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setResults(result);

  }, [searchTerm]);
 
  return (
    <div className="list-and-search">
      <div className="list">
        <div className="character-list">
          {
            (searchTerm.length !== 0) ? 
              results.map( (person, index) => 
              <div>
                <CharacterCard person={person}/>
              </div> 
            )

            : 

            characters.map( (person, index) => 
              <div>
                <CharacterCard person={person}/>
              </div> 
            )
          }
        </div>
      </div>
      <div className="search-container">
        <label>
  	  	<input
          className="search-bar"
  	     	type="text"
  	     	placeholder="search"
          defaultValue={searchTerm}
  	     	onChange={handleChange}
  	    ></input>
        </label>
      </div>
    </div>
  );
}