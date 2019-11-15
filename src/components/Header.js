import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import { Button } from 'reactstrap';

import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";

import "../index.css"

export default function Header() {
  return (
  	<div>
	    <header className="ui centered">
	      <h1 className="ui centered">Rick &amp; Morty Fan Page</h1>
	    </header>
    	<div>
	    	<div className="button-links">
	      	<Link to="/welcome/" className="link-space-right"><Button outline color="success" size="lg">Home</Button></Link>
	      	<Link to="/characters/" className="link-space-left"><Button outline color="success" size="lg">Characters</Button></Link>
	      	</div>

		      <Route path="/welcome/" component={WelcomePage} />
		      <Route path="/characters/" component={CharacterList} />
	    </div>
    </div>
  );
}
