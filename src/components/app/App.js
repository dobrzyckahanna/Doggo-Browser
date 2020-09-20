import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "../Header";
import Button from "../Button";
import Modal from "../Modal";

const Container = styled.div`
  padding: 4rem 8rem;

  @media screen and (max-width: 1024px) {
    padding: 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem;
  }
  @media screen and (max-width: 440px) {
    padding: 2rem;
  }
`;
const ButtonListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const ButtonWrapper = styled.div`
  padding: 2em 1em;
`;

const App = () => {
  const [breeds, setBreeds] = useState({});
  const [chosenBreed, setChosenBreed] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleModal = breed => {
    setChosenBreed(breed);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setChosenBreed("");
  };

  let buttonList = breedList.map(breed => (
    <ButtonWrapper>
      <Button breed={breed} handleClick={() => handleModal(breed)}>
        {breed}
      </Button>
    </ButtonWrapper>
  ));
  return (
    <Container>
      <Header />
      <ButtonListWrapper>{buttonList}</ButtonListWrapper>
      {chosenBreed ? (
        <Modal
          chosenBreed={chosenBreed}
          showModal={showModal}
          hideModal={handleModalClose}
        />
      ) : null}
    </Container>
  );
};

export default App;
