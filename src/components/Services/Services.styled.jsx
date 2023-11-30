import styled from 'styled-components';

export const ServicesSection = styled.section`
padding: 30px 20px;
background: linear-gradient(
    -125deg,
    rgb(75, 77, 86) 47%,
    rgb(142, 142, 143) 98%,
    rgb(179, 179, 180) 130%
  );
    background-color:  rgb(96, 98, 109) ; 
  
`

export const ServicesItem = styled.li`
position: relative;
    width: 120px;
    height: 120px;
    
   background:  rgb(65, 67, 76) ;
   /* background:  rgb(76, 77, 87) ; */
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

    &:hover,
    &:focus {
        transform: scale(1.08);
        box-shadow: 1px 1px 8px rgba(174, 173, 173, 0.872); 
        transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--white);
    }
`
export const ServicesList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
`

export const ServicesImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: block;
  margin: 0 auto;
  padding: 0;
  width: 70px;
  transform: translate(-50% -50%);

  @media (min-width: 768px) {
    display: block;
    /* width: 40%; */
  }
  @media (min-width: 1440px) {
    display: block;
    /* width: 30%; */
  }
`;

export const ServicesTittle = styled.h2`
  
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 25px;
    /* text-align: center; */
    color: #b7bed0;
    margin-bottom: 20px;
`