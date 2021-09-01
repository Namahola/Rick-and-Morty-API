import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetch() {
  const url = "https://rickandmortyapi.com/api/character";
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCharacter(response.data);
      console.log(response.data.results[0].name);
    });
  }, [url]);

  if (character) {
    return (
      <div>
        <h1>{character.results[0].name}</h1>
      </div>
    );
  }
  return <div></div>;
}

export default Datafetch;
