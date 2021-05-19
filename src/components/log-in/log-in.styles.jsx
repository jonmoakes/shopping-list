import styled from "styled-components";

export const Form = styled.form`
  input {
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;

    &:focus {
      border: 2px solid #1e9aef;
    }

    @media (max-width: 320px) {
      ::-webkit-input-placeholder {
        font-size: 13px;
      }
      ::-moz-placeholder {
        font-size: 13px;
      }
      :-ms-input-placeholder {
        font-size: 13px;
      }
      ::placeholder {
        font-size: 13px;
      }
    }

    @media only screen and (max-width: 280px) {
      ::-webkit-input-placeholder {
        font-size: 10px;
      }
      ::-moz-placeholder {
        font-size: 10px;
      }
      :-ms-input-placeholder {
        font-size: 10px;
      }
      ::placeholder {
        font-size: 10px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;
