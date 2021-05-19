import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 30px;
  text-shadow: none;

  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
