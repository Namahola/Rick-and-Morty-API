import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "@reach/router";

function CharList() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
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
      {characterList.map((data) => {
        return (
          <Link key={data.id} to={`/character/${data.id}`}>
            <CharacterCard data={data} />
          </Link>
        );
      })}
    </div>
  );
}

export default CharList;
