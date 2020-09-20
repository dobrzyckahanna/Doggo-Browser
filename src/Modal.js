import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const Modal = ({ chosenBreed }) => {
  const [breedUrl, setBreedUrl] = useState("");

  const fetchData = async () => {
    let breedName = chosenBreed.split(" ").join("/");
    const result = await axios(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    setBreedUrl(result.data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <img src={breedUrl} alt={chosenBreed} />
      <Button breed={chosenBreed} handleClick={() => fetchData()}>
        More pics of {chosenBreed}
      </Button>
    </>
  );
};

export default Modal;
