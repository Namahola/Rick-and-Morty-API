import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

function CharList() {
  const url = "https://rickandmortyapi.com/api/character";
  const [CharacterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setCharacterList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {CharacterList.map((chars, id) => {
        return <CharacterCard key={id} chars={chars} />;
      })}
    </div>
  );
}

export default CharList;
