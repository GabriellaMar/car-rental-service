import styled from 'styled-components';
import heroImg from '../../images/CardCars/BMW.jpg'
// import heroMobileImg from '../../images/CardCars/BMW-mobile.jpg'
//  import heroTabletImg from '../../images/CardCars/BMW-tablet.jpg'
// import { RentalCarBtn } from '../../components/RentalBtn/RentalCarBtn';
// import heroImg from '../../images/CardCars/home-banner@2x.jpg'
export const HeroTittle = styled.h1`
  
  font-weight: bold;
  font-size: 35px;
  line-height: 1.6;
  /* text-align: right; */
  text-shadow: 1px 1px 2px #5c5757;
  color: #e1e0e0;
  /* margin-left: auto; */
  margin-bottom: 15px;


  @media (min-width: 768px) {
    font-size: 53px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 66px;
    line-height: 1.2;
    font-weight: 700;
  }
`
export const HeroText= styled.p`
  color: var(--blue);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
   /* text-align: right;  */
  margin-bottom: 13px;
  

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.6;
  }
`
export const HeroSubtittle =styled.p`
   color: #c3cee9;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 6px;
  /* width: 900px; */
  /* text-align: right; */
  /* margin-left: auto; */
  
  
  @media (min-width: 768px) {
    color: #b0bbd6;
    font-size: 18px;
    line-height: 1.6;
   
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    line-height: 1.6;
    /* margin-left: auto; */

  }

`
export const HeroRentalBtn  = styled.a`
display: block;
padding: 12px 50px;
max-width: 90px;
text-align: center;
background-color: #980d0dd3;
color:  #eceaea;
border-color: transparent;
border-radius: 12px;
margin-top: 276px;
margin-left: auto;
/* margin-right: 20px; */
/* margin-bottom: 15px; */
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover,
&:focus {
  transform: scale(1.05);

  background-color: #8f0c0cd2;
}

@media (min-width: 768px) {
  margin-top: 36px;
  margin-bottom: 15px;
  max-width: 100px;
  }
@media (min-width: 1440px) {
  margin-top: 26px;
  margin-bottom: 15px;

  }

`

export const Hero = styled.div`
  padding: 25px 0px;
  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${heroImg});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  min-height: 450px;
  z-index: 100;
  margin: 0 auto;


  

  @media (min-width: 1440px) {
    padding: 35px 0px;
    /* background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 600px;
  } */}
`;
export const TextWrapper = styled.div`
 text-align: center; 

   .textWrapper {
    display: block;
    margin-left: auto;
   } 
   @media (min-width: 768px) {
    text-align: end; 
  } 
  

  @media (min-width: 1440px) {
  }
    
`
