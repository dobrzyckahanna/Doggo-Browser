import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import Modal from "./Modal";

function App() {
  const [breeds, setBreeds] = useState({});
  const [chosenBreed, setChosenBreed] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://dog.ceo/api/breeds/list/all");

      setBreeds(result.data.message);
    };

    fetchData();
  }, []);

  let breedList = [];
  function getBreeds() {
    for (const [key, value] of Object.entries(breeds)) {
      if (value.length === 0) {
        breedList.push(key);
      } else {
        value.forEach(v => breedList.push(`${key} ${v}`));
      }
    }

    return breedList;
  }
  getBreeds();

  let buttonList = breedList.map(breed => (
    <Button breed={breed} setChosenBreed={setChosenBreed}></Button>
  ));
  return (
    <>
      <>{buttonList}</>
      <>{chosenBreed ? <Modal chosenBreed={chosenBreed} /> : null}</>
    </>
  );
}

export default App;
