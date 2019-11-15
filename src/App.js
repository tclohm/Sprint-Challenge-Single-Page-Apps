import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import { Link, Route } from "react-router-dom";
import { Button } from 'reactstrap';


export default function App() {
  return (
    <main>
    	<Button color="link"><Link to="/">Home</Link></Button>
	  	<Button color="link"><Link to="/characters/">Characters</Link></Button>
    	<Header />
	    <Route exact path="/" component={WelcomePage} />
	    <Route path="/characters" component={CharacterList} />
    </main>
  );
}
