import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImgWrapper = styled.img`
  width: 70%;
  max-width: 400px;
  height: auto;
  max-height: 480px;
`;

const DogImage = ({ src, alt }) => {
  return <ImgWrapper src={src} alt={alt} />;
};

DogImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default DogImage;
