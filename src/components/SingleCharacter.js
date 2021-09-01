import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function SingleCharacter(props) {
  const id = props.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <CharacterCard data={data} />
      <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default SingleCharacter;
