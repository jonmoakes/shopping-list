import styled from "styled-components";

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background-color: white;
  color: black;
  font-size: 18px;
  margin: 25px 0;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  font-family: inherit
  outline: none;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: salmon;
  }

  @media only screen and (max-width: 414px) {
    font-size: 16px;
  }
`;
