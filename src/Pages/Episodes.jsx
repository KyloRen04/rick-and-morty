import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/catergory/InputGroup";

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { air_date, episode, name } = info;
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const characterData = await Promise.all(
        data.characters.map((characterUrl) => {
          return fetch(characterUrl).then((res) => res.json());
        })
      );
      setResults(characterData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode name:{" "}
          <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date || "Unknown"}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
