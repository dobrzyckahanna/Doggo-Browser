import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "./Button";
import DogImage from "./DogImage";

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
      <DogImage src={breedUrl} alt={chosenBreed} />
      <Button handleClick={() => fetchData()}>
        More pics of {chosenBreed}
      </Button>
    </>
  );
};

Modal.propTypes = {
  chosenBreed: PropTypes.string.isRequired
};

export default Modal;
