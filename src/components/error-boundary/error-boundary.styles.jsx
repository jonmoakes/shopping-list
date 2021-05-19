import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 125px;

  span {
    color: #cc1616;

    &:hover {
      color: white;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 75px;
  }
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 50vw;
  height: 95vh;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    width: 90vw;
    height: 50vh;
  }
`;

export const ErrorImageText = styled.p`
  color: black;
  text-align: center;
  padding: 5px 5px 5px 5px;
`;
