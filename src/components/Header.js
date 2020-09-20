import React from "react";
import styled from "styled-components";
import { ReactComponent as Claw } from "../assets/claw.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem 4rem;

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    padding: 0 2rem 3.5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem 3rem;
  }
  @media screen and (max-width: 440px) {
    padding: 1rem;
    flex-direction: column;
  }
`;
const StyledHeader = styled.div`
  font-family: "Unkempt", cursive;
  font-size: 48px;
  letter-spacing: 0.15rem;
  text-align: center;
  text-transform: uppercase;
  vertical-align: baseline;
  font-weight: 600;
  text-shadow: 5px 5px 10px grey;

  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 440px) {
    font-size: 40px;
  }
`;
const ClawWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    width: 36px;
    height: 36px;
    padding: 0.5rem;
  }
  @media screen and (max-width: 1024px) {
    width: 32px;
    height: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ClawWrapper>
        <Claw />
      </ClawWrapper>
      <StyledHeader>Doggo Images Library</StyledHeader>
      <ClawWrapper>
        <Claw />
      </ClawWrapper>
    </HeaderWrapper>
  );
};

export default Header;
