import React from "react";
import { Link, Router } from "@reach/router";
import SingleCharacter from "./SingleCharacter";

function CharacterCard(props) {
  return (
    <div>
      <Link to="/SingleCharacter">
        <h1>{props.chars.name}</h1>
        <img src={props.chars.image} alt="billede af karakter" />
      </Link>

      <Router>
        <SingleCharacter path="/SingleCharacter/:id" />
      </Router>
    </div>
  );
}

export default CharacterCard;
