import styled from 'styled-components';

export const ServicesSection = styled.section`
    background-color: var(--dropdawn);
`

export const ServicesItem = styled.li`
position: relative;
    width: 150px;
    height: 150px;
    background-color: var(--gray);
    border-radius: 10px;
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
  width: 60px;
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