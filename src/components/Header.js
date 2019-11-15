import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import WelcomePage from "./WelcomePage.js";

import "../index.css"

export default function Header() {
  return (
  	<div>
	    <header className="ui centered">
	      <h1 className="ui centered">Rick &amp; Morty Fan Page</h1>
	    </header>
		    <Route path="/" component={WelcomePage} />
	  </div>
  );
}
