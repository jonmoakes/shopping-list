import styled, { keyframes } from "styled-components";
import { zoomInRight, pulse } from "react-animations";

import CustomButton from "../../../custom-button/custom-button.component";

const zoomInRightAnimation = keyframes`${zoomInRight}`;
const PulseAnimation = keyframes`${pulse}`;

export const ButtonDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  @media screen and (max-width: 1024px) {
    margin: -20px auto 0px auto;
  }
  @media screen and (max-width: 450px) {
    margin: 0px auto 0px auto;
  }
`;

export const RemoveEntryButton = styled(CustomButton)`
  background-color: #cc1616;
  animation: 1s ${zoomInRightAnimation};
  margin: 10px;

  &:hover {
    background-color: #cc1616;
    color: whitesmoke;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 10px;
  }
`;

export const ClearEntriesButton = styled(RemoveEntryButton)`
  background-color: whitesmoke;
  color: black;
  text-shadow: none;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

export const SaveButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 150px;
  background-color: #00ff00;
  border: 2px solid black;
  border-radius: 50px;

  font-weight: bold;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};

  @media screen and (max-width: 800px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: 10px;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;

export const ReturnButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 240px;
  background-color: red;
  border: 2px solid black;
  border-radius: 50px;
  color: whitesmoke;
  font-weight: bold;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};
  text-align: center;

  @media screen and (max-width: 800px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: 10px;

    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
    top: 220px;
  }
`;
