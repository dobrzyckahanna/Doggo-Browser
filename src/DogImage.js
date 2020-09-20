import React from "react";
import PropTypes from "prop-types";

const DogImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

DogImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default DogImage;
