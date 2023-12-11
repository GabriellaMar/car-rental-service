import styled from 'styled-components';
import { ServicesTittle } from '../Services/Services.styled';

export const SliderSection = styled.section`
    padding: 30px 20px;
    padding-bottom: 35px;
    background:  rgba(205, 205, 205, 0.923) 37%;
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
    /* background: linear-gradient(
    -125deg,
    rgb(158, 159, 170) 47%,
    rgb(207, 207, 208) 98%,
    rgb(218, 218, 220) 130%
  ); */
  background: linear-gradient(
    -125deg,
    rgb(166, 167, 179) 47%,
    rgb(180, 180, 182) 98%,
    rgb(199, 199, 200) 130%
  );
     
    
`
export const SliderWrapper = styled.div`
 /* position: relative;  */
  width: 320px;
  height: 255px;
  /* height: 752px; */
  overflow: hidden;
   /* margin: 0 auto;  */
  z-index: 5;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  @media (min-width: 768px) {
    width: 300px;
  height: 200px;
  }
  @media (min-width: 1440px) {
    width: 600px;
  height: 400px;
    
  }
`;

export const SlideImage = styled.img`

  width: 100%; 
  height: 100%;
`;

export const SliderTittle = styled.h2`
  display: inline-block;
  position: absolute;
  top: -45px; 
  right: 8px;
  padding: 6px 10px;
  width: 200px;
  color: #ece9e9;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 100;
  border-radius: 10px;
  background-color: #eceaea94; 
  background-color: #d1070792; 
  /* background-color: #980d0d; */

 
  /* margin-bottom: 35px; */
  text-align: center;

  @media (min-width: 768px) {
    padding: 4px 10px;
    right: 40px;
    font-weight: 600;
    font-size: 18px;
  } 

  @media (min-width: 1440px) {
    padding: 6px 10px;
    font-size: 20px;
    width: 200px;
    top: 30px; 
    right: 120px;
    
  }

`;
export const SliderText =styled.p`
  max-width: 300px;
  height: 100px;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);

   @media (min-width: 768px) {
    max-width: 300px;
    /* height: 125px; */
    font-size: 15px;
    
  } 
  @media (min-width: 1440px) {
    max-width: 450px;
    font-size: 20px;
  }

`

export const FlexWrapper = styled.div`
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; 
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    gap: 35px;
    
  }

`

export const ArrowWrapper =styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  bottom: 0px;
  left: 10px;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 10px;
    bottom: 0px;
  left: 410px;
  }
  @media (min-width: 1440px) {
   
    
  bottom: 0px;
  left: 935px;
  }

`
export const SliderSectionTittle = styled(ServicesTittle)`
  font-size: 20px;
  color: #ece9e9;
  margin-bottom: 65px;

   @media (min-width: 768px) {
  margin-bottom: 40px;
  font-size: 22px;
  } 

   @media (min-width: 1440px) {
    font-size: 25px;
  margin-bottom: 15px;
  } 
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