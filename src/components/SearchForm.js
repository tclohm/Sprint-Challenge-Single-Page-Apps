import React, { useState, useEffect } from "react";

export default function SearchForm({characters}) {

	console.log(characters);

	// search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
    // search
  const handleChange = (event) => {
    setSearchResults(event.target.value)
  }
  // search
  useEffect(() => {
    const results = characters.filter( char => {
      return char.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setSearchResults(results);
  }, [searchTerm])
 
  return (
    <section className="search-form">
	  	<input
	     	type="text"
	     	placeholder="Search"
	     	defaultValue={searchTerm}
	     	onChange={handleChange}
	    ></input>
    	
       {characters.map( (name, index) => (
	        <ul key={index}>
	          <li>{name}</li>
	        </ul>
      	))}
    </section>
  );
}
