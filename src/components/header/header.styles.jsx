import styled from "styled-components";

import { ReactComponent as LogoutSVG } from "../../assets/logout.svg";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f7cf06;
  z-index: 3;
  height: 120px;
  border-bottom: 5px solid black;
`;

export const HeaderNavigationItems = styled.div`
  ul {
    list-style: none;
    margin-top: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  li {
    padding: 0rem 2rem;
    transition: all 0.5s ease-in-out;

    &:hover {
      transform: scale(1.2);

      @media screen and (max-width: 1024px) {
        transform: unset;
      }
    }
  }
`;

export const LogoutIcon = styled(LogoutSVG)`
  width: 60px;
  height: 60px;
  margin-top: 25px;

  @media screen and (max-width: 450px) {
    width: 40px;
    height: 40px;
    margin-top: 35px;
  }
`;

export const LogoutIconText = styled.p`
  text-align: center;
  width: 60px;
  color: black;
  margin-top: -6px;

  @media screen and (max-width: 450px) {
    width: 40px;
    font-size: 14px;
  }
`;
