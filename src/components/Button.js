import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  background-color: #fafafa;
  color: #000;
  letter-spacing: 0.15rem;
  outline: none;
  font-family: "Unkempt", cursive;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  word-wrap: break-word;

  &:hover {
    background-color: #000;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }

  ${props =>
    props.modalButton
      ? "padding: 1rem 2rem;  border-radius: 45px;"
      : "box-shadow: 8px 12px 20px grey;  height: 120px;  width: 260px;  border-radius: 20px;"};

  @media screen and (max-width: 460px) {
    ${props =>
      props.modalButton
        ? "font-size: 14px; padding: 0.75rem 1.25rem"
        : "font-size: 18px"};
  }
`;

const Button = ({ handleClick, modalButton, children }) => {
  return (
    <StyledButton onClick={handleClick} modalButton={modalButton}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  handleClick: PropTypes.func.isRequired,
  modalButton: PropTypes.bool
};

export default Button;
