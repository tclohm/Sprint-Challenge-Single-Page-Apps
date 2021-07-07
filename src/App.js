import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import Residents from "./components/Residents.js";
import { Link, Route } from "react-router-dom";
import { Button } from 'reactstrap';
import "./index.css";
import logo from "./RickAndMortyCardImage.png";


export default function App() {


	const [locations, setLocations] = useState([]);

	 useEffect(() => {

		axios.get("https://rickandmortyapi.com/api/location/")
			 .then(response => {
			 	let arrayOfObjects = response.data.results;
			 	// console.log(arrayOfObjects);
			 	setLocations(arrayOfObjects);
			 })
			 .catch(error => {
			 	console.log("Error", error);
			 })

	}, [])

	return (
	    <main>
	    	<div className="navigation-top">
	    		<div className="navigation-left">
	    			<img src={logo} alt="rick and morty" height="50px"></img>
	    		</div>
	    		<div className="navigation-right">
	    			<Button color="link" className="right"><Link to="/">Home</Link></Button>
		  			<Button color="link" className="right"><Link to="/characters">Characters</Link></Button>
		  			<Button color="link" className="right"><Link to="/locations">Locations</Link></Button>
		  		</div>
		  	</div>
	    	<Header />
		    <Route exact path="/" component={WelcomePage} />
		    <Route path="/characters" component={CharacterList} />
		    <Route exact path="/locations" 
		    	render={(props) => (
		    		<LocationsList {...props} locations={locations} />
		    		)} 
		    />
		    <Route path="/locations/:id" 
		    	render={(props) => (
		    		<Residents {...props} locations={locations} />
		    		)} 
		    />
	    </main>
	);
}
