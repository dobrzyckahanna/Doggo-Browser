import React from "react";
import PropTypes from "prop-types";

const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
