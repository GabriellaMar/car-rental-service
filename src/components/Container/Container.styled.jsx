import styled from 'styled-components';

export const StyledContainer = styled.div`
 display: flex;
flex-direction: column;
align-items: center; 
    width: 320px;
    padding: 0 10px;
    margin: 0 auto;
    border: 1px solid red;
   

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
  }
`