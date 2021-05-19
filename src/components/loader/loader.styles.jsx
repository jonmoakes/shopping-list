import styled from "styled-components";

import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";

export const LoaderDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
`;

export const LoaderIcon = styled(LoaderSVG)`
  position: fixed;
  top: 50%;
  left: 50%;
  /* below makes the image in the centre not the top left in the center */
  transform: translate(-50%, -50%);
  height: 20%;
  width: 20%;
`;
