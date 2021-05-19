import styled from "styled-components";

export const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
  font-size: 16px;
  color: #cc1616;
  &:focus {
    border-color: #1d9bee;
    box-shadow: 6px 6px 6px black;
  }
`;
