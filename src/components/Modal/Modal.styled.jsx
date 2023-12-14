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
  max-width: 300px;
  /* height: 85vh;  */

  background-color: var(--white);
  background:  rgb(212, 212, 213) ;
  border-radius: 24px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
  padding: 40px 15px; 
  overflow: hidden;
  overflow-y: scroll;
  

  @media screen and (min-width: 768px) {
    max-width: 441px;
    max-height: 752px;  
 
  }

  @media screen and (min-width: 1440px) {
    max-width: 541px;
    height: 85vh; 
    margin: 0 auto;
  }
`;

export const CloseModalBtn = styled(RxCross2)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 20px;
`