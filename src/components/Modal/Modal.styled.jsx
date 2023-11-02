import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 5;
`;

export const ModalContent = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  max-width: 541px;
 max-height: 752px;
  background-color: var(--white);
  border-radius: 24px;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
   padding: 40px; 
  overflow: hidden;

  @media screen and (max-width: 374px) {
    /* width: 90vw; */
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    /* width: 90vw; */
    /* max-width: 468px; */
    /* padding: 32px; */
  }

  @media screen and (min-width: 768px) {
    /* width: 468px; */
    margin: 0 auto;
    /* padding: 32px; */
  }
`;

export const CloseModalBtn = styled(RxCross2)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`