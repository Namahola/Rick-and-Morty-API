import React from "react";

function CharacterCard(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <img src={props.data.image} alt="billede af karakter" />
    </div>
  );
}

export default CharacterCard;
