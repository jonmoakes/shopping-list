import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const PulseAnimation = keyframes`${pulse}`;

export const AddButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 160px;
  background-color: transparent;
  border: none;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};

  @media screen and (max-width: 800px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: -10px;
    top: 140px;
  }

  @media screen and (max-width: 450px) {
    right: 5px;
    top: 130px;
  }
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  background-color: transparent;
  position: relative;
  right: 6px;
  top: -1px;

  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;
