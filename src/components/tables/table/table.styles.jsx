import styled, { keyframes } from "styled-components";

import { zoomInLeft } from "react-animations";

const zoomInLeftAnimation = keyframes`${zoomInLeft}`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 50px auto 300px auto;
  background-color: pink;
  text-shadow: none;
  white-space: pre-line;
  box-shadow: 10px 10px 10px black;
  width: 70%;

  th {
    font-size: 18px;
    background-color: #f7cf06;
    padding: 20px 10px;
    border: 3px solid black;
    color: black;
    text-shadow: none;

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  tr {
    background-color: #bababa;

    &:nth-child(even) {
      background-color: pink;
    }
  }

  td {
    border: 3px solid black;
    padding: 20px 5px;
    word-break: break-word;
    padding: 20px 10px;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  td:nth-child(1) {
    width: 90%;

    @media screen and (max-width: 600px) {
      padding: 10px 10px;
    }
  }

  td:nth-child(2) {
    width: auto;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
    box-shadow: none;
  }
`;

export const HelpText = styled.p`
  animation: 1s ${zoomInLeftAnimation};
`;
