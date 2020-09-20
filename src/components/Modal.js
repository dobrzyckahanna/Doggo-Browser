import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import DogImage from "./DogImage";

const ModalWrapper = styled.div`
  display: ${props => (props.showModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 70%;
  height: auto;
  max-height: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 360px) {
    width: 90%;
  }
`;

const CloseButton = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #000;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  padding: 0 16px;

  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 4rem;

  @media screen and (max-width: 460px) {
    padding: 2rem;
  }
`;

const Modal = ({ chosenBreed, hideModal, showModal }) => {
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
    <ModalWrapper showModal={showModal}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={() => hideModal()}>&times;</CloseButton>
        </ModalHeader>
        <ModalImage>
          <DogImage src={breedUrl} alt={chosenBreed} />
        </ModalImage>
        <ModalFooter>
          <Button handleClick={() => fetchData()} modalButton={true}>
            More pics of {chosenBreed}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  chosenBreed: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};

export default Modal;
