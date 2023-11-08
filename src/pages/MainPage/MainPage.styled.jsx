import styled from 'styled-components';
import heroImg from '../../images/CardCars/BMW.jpg'
import { RentalCarBtn } from '../../components/RentalBtn/RentalCarBtn';
// import heroImg from '../../images/CardCars/home-banner@2x.jpg'
export const HeroTittle = styled.h1`
   color: #e1e0e0;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.6;
  text-align: right;
  text-shadow: 1px 1px 2px #5c5757;
  margin-left:  400px;
  margin: 0 auto;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 66px;
    line-height: 1.2;
    font-weight: 700;
     padding-top: 15px; 
  }
`
export const HeroText= styled.p`
  color: var(--blue);
  font-weight: 600;
  font-size: 26px;
  line-height: 1.2;
  text-align: right;
  margin-bottom: 13px;
  

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.6;
  }
`
export const HeroSubtittle =styled.p`
   color: #b0bbd6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  width: 900px;
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    line-height: 1.6;
    margin-left: auto;

  }

`
export const HeroRentalBtn  = styled.a`
display: block;
padding: 12px 50px;
max-width: 100px;
text-align: center;
background-color: #980d0dd3;
color:  #eceaea;
border-color: transparent;
border-radius: 12px;
margin-top: 16px;
margin-left: auto;
margin-right: 20px;
margin-bottom: 15px;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover,
&:focus {
  transform: scale(1.05);

  background-color: #8f0c0cd2;
}
    

`

export const Hero = styled.div`

  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${heroImg});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;
export const TextWrapper = styled.div`
    /* padding-top: 100px; */
   
`
export const StyledTextWrapper = styled.div`
 max-width: 700px; 

`

export const CatalogPageWrapper = styled.div`
height: 100%;
 background: linear-gradient(
    -60deg,
    rgb(23, 26, 32) 49%,
    rgb(187, 206, 226) 100%,
    rgb(206, 206, 206) 70%
  );
 
`