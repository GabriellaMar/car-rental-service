import styled from 'styled-components';
import heroImg from '../../images/CardCars/home-banner@2x.jpg'
export const HeroTittle = styled.h1`
      color: #fff;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #5c5757;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 86px;
    line-height: 1.2;
    font-weight: 900;
  }
`
export const HeroText= styled.p`
     /* color: #b0bbd6; */
     color: blue;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 1.6;
  }

`
export const HeroSubtittle =styled.p`
   color: #b0bbd6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

`
export const HeroBtn  = styled.button`
    padding: 10px 20px ;
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
`;