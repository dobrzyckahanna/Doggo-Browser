import React, { useState, useEffect } from "react";
import axios from "axios";

function Modal({ chosenBreed }) {
  const [breedUrl, setBreedUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let breedName = chosenBreed.split(" ").join("/");
      const result = await axios(
        `https://dog.ceo/api/breed/${breedName}/images/random`
      );
      setBreedUrl(result.data.message);
    };

    fetchData();
  }, [chosenBreed]);

  return (
    <>
      <div>{chosenBreed}</div>
      <img src={breedUrl} alt={chosenBreed} />
    </>
  );
}

export default Modal;
