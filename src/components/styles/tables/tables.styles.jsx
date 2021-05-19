import styled from "styled-components";

import CustomButton from "../../custom-button/custom-button.component";

import { SearchInput } from "../../styles/search-input/search-input.styles";
import { Div } from "../../styles/div/div.styles";

export const HeaderRemoveText = styled.span`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const SearchDiv = styled(Div)`
  @media screen and (max-width: 450px) {
    padding: 20px 5px 20px 10px;
  }
`;

export const NoMatchDiv = styled(Div)`
  padding: 10px 10px 10px 10px;
  h2 {
    text-decoration: none;
    color: black;
    text-shadow: none;
  }
`;

export const TableDiv = styled.div`
  width: 100%;
  margin: 0px auto 100px auto;
`;

export const PaginationDiv = styled(Div)`
  margin: -250px auto 300px auto;
  border: none;
  box-shadow: none;
  background-color: transparent;

  @media screen and (max-width: 450px) {
    margin: -300px auto 200px auto;
  }
`;

export const PageButton = styled(CustomButton)`
  min-width: unset;
  width: 50px;
  height: 10px;
  margin: 0px 10px;
  line-height: 0px;
  font-size: 16px;
  text-shadow: none;
  padding: 10px 5px;
  background-color: #ffbd4a;
  color: black;

  @media screen and (max-width: 1024px) {
    margin: 0px 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const PaginationButton = styled.input`
  width: 50px;
  outline: none;
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 40px;
`;

export const PaginationText = styled.p`
  font-size: 16px;
`;

export const PaginationInput = styled(SearchInput)`
  width: 100px;
  height: 10px;
  font-size: 20px;
`;

export const PaginationSelect = styled.select`
  width: 200px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid black;
  outline: none;

  &:focus {
    border-color: #1d9bee;
    box-shadow: 6px 6px 6px black;
  }
`;

export const NoEntriesDiv = styled(Div)`
  @media screen and (max-width: 1024px) {
    margin: 0px auto 200px auto;
  }
`;
