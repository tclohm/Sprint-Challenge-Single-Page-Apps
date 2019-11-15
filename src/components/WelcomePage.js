import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import CharacterList from "./CharacterList";

import { Button } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header className="center col">
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <div className="center">
        <Link to="/characters/"><Button outline color="success" size="lg">Characters</Button></Link>
      </div>
      <Route path="/characters/" component={CharacterList} />
    </section>
  );
}
