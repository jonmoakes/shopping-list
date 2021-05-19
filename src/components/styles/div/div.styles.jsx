import styled from "styled-components";

export const Div = styled.div`
  margin: 0px auto 75px auto;
  background-color: #f7cf06;
  width: 50%;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  box-shadow: 10px 10px 10px black;
  border: 2px solid black;

  @media screen and (max-width: 1024px) {
    box-shadow: none;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: 0px auto 50px auto;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 20px 10px 20px 10px;
  }
`;

export const AddEntryDiv = styled(Div)`
  margin: 0px auto 200px auto;
`;

export const ErrorDiv = styled(Div)`
  margin: 75px auto 75px auto;
  background-color: #cc1616;

  p,
  li {
    color: whitesmoke;
    text-shadow: 1px 1px 1px black;
  }

  @media screen and (max-width: 600px) {
    margin: 50px auto 50px auto;
  }
`;
