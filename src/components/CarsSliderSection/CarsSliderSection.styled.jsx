import styled from 'styled-components';
import { ServicesTittle } from '../Services/Services.styled';

export const SliderSection = styled.section`
    padding: 30px 20px;
    padding-bottom: 35px;
    background:  rgba(205, 205, 205, 0.923) 37%;
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
    background: linear-gradient(
    -125deg,
    rgb(158, 159, 170) 47%,
    rgb(207, 207, 208) 98%,
    rgb(218, 218, 220) 130%
  );
     
    
`
export const SliderWrapper = styled.div`
 /* position: relative;  */
  width: 600px;
  height: 400px;
  /* height: 752px; */
  overflow: hidden;
   /* margin: 0 auto;  */
  z-index: 5;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
`;

export const SlideImage = styled.img`

  width: 100%; 
  height: 100%;
`;

export const SliderTittle = styled.h2`
  display: inline-block;
  position: absolute;
  top: 30px; 
  right: 120px;
  padding: 4px 10px;
  width: 200px;
  color: #ece9e9;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 100;
  border-radius: 10px;
   background-color: #eceaea94; 
  margin-bottom: 35px;
  text-align: center;
`;
export const SliderText =styled.p`
  max-width: 450px;
  font-weight: 500;
  font-size: 20px;
  color: var(--text-color);
`

export const FlexWrapper = styled.div`
  display:  flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  gap: 35px;

`

export const ArrowWrapper =styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  bottom: 0px;
  left: 920px;
  margin-top: 10px;

`
export const SliderSectionTittle = styled(ServicesTittle)`
   color: #ece9e9;
   margin-bottom: 15px;
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