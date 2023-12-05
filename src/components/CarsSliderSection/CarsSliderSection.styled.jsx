import styled from 'styled-components';

export const SliderSection = styled.section`
    padding: 30px 20px;
    margin: 0 auto;
    
`
export const SliderWrapper = styled.div`
position: relative;
  width: 600px;
  height: 450px;
  /* height: 752px; */
  overflow: hidden;
  margin: 0 auto;
  z-index: 5;
  border-radius: 10px;
`;

export const SlideImage = styled.img`

  width: 100%; 
  height: 100%;
`;

export const SliderTittle = styled.h2`
  position: absolute;
 bottom: 10px; 
 right: 10px;
  padding: 4px 8px;
  font-size: 20px;
  color: white;
  z-index: 100;
  background-color: #ffffff7b;
`;
export const SliderText =styled.p`
max-width: 400px;
font-size: 20px;
color: var(--dropdawn);
`
// export const Description = styled.p`
//   position: absolute;
//  top: 10px; 
//  right: 20px;/* Змініть це значення за необхідності */
//   color: white;
//   background-color: #ffffff7b;
//   padding: 10px;
//   z-index: 100;
// `;