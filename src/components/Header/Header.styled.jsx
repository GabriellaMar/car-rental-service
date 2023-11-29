
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  padding: 10px 25px;
  /* background: rgb(29, 32, 37); */
  /* background: linear-gradient(
    -80deg,
    rgb(23, 26, 32) 49%,
    rgba(184, 204, 225, 0.953) 100%,
    rgb(206, 206, 206) 40%
  ); */
  background: linear-gradient(
    -125deg,
    rgb(24, 27, 32) 37%,
    rgb(242, 245, 248) 98%,
    rgb(244, 246, 249) 130%
  );
  


&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px; 
  background: linear-gradient(to bottom, rgba(187, 185, 185, 0.2), transparent);
  /* box-shadow:  rgba(226, 226, 226, 0.2) */
}

`;

