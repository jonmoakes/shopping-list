import styled from "styled-components";

export const Form = styled.form`
  padding: 30px 30px;
  margin: 0px auto;

  label {
    float: left;
    font-size: 25px;
    text-shadow: none;

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px black;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: 18px;
    height: 200px;
    outline: none;

    &:focus {
      box-shadow: 4px 4px 4px black;
      border-color: #2099f0;
    }

    @media screen and (max-width: 450px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 10px 10px;
  }

  @media screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;
