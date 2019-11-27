import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import { Link, Route } from "react-router-dom";
import { Button } from 'reactstrap';
import "./index.css";


export default function App() {

	return (
	    <main>
	    	<div className="navigation-top">
	    		<Button color="link" className="right"><Link to="/">Home</Link></Button>
		  		<Button color="link" className="right"><Link to="/characters/">Characters</Link></Button>
		  	</div>
	    	<Header />
		    <Route exact path="/" component={WelcomePage} />
		    <Route path="/characters" component={CharacterList} />
	    </main>
	);
}
