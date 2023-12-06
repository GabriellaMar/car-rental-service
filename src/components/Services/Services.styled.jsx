import styled from 'styled-components';

export const ServicesSection = styled.section`
padding: 40px 20px;
padding-bottom: 60px;
background: linear-gradient(
    -125deg,
    rgb(134, 135, 145) 47%,
    rgb(164, 164, 166) 98%,
    rgb(199, 199, 200) 130%
  );
    
  
`

export const ServicesItem = styled.li`
position: relative;
    width: 110px;
    height: 110px;
    
   background:  rgb(120, 122, 131) ;
   /* background:  rgb(76, 77, 87) ; */
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    overflow: hidden;
  position: relative;

    &:hover,
    &:focus {
        transform: scale(1.13);
        box-shadow: 1px 1px 8px rgba(241, 240, 240, 0.872); 
        transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--white);
    }

    .information {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  border-radius: 10px;
  display: flex;
  z-index: 2;

  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ece7e7;
  color: var(--dropdawn)
}
#serviceInfo {
  border-top: 10px solid var(--blue);
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
    font-weight: 700;
    font-size: 25px;
    color: #cfd6e7;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`