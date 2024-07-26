import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/catergory/InputGroup";

const Location = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const { dimension, type, name } = info;
  const [number, setNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const residentData = await Promise.all(
        data.residents.map((residentUrl) => {
          return fetch(residentUrl).then((res) => res.json());
        })
      );
      setResults(residentData);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Location:{" "}
          <span className="text-primary">
            {name || "Unknown"}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension || "Unknown"}
        </h5>
        <h6 className="text-center">
          Type: {type || "Unknown"}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
