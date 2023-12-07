import styled from 'styled-components';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const FooterWrapper = styled.footer`
display: flex;

    width: 100%;
    height: 100%;
    background: linear-gradient(
    -125deg,
    rgb(21, 20, 25) 37%,
    /* rgb(242, 245, 248) 98%, */
    rgb(191, 195, 199) 98%,
    rgb(244, 246, 249) 130%
  );
`
export const ContactWrapper = styled.div`
  display: flex;
  padding: 30px, 35px; 
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactTitle = styled.h2`
     display: inline-block;
    color: #ece9e9;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 20px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
  @media (min-width: 1440px) {
    font-size: 25px;
  }
  
`;

export const ContactText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  color: #fff;
  opacity: 0.6;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const TelIcon = styled(BsFillTelephoneInboundFill)`
  width: 15px;
  height: 15px;
  margin: 0;
  color: #fff;
  opacity: 0.6;
  
`;
export const EmailIcon = styled(MdEmail)`
  width: 15px;
  height: 15px;
  margin: 0;
  color: #fff;
  opacity: 0.6;
`;
export const CarImg = styled.img`
width: 170px;

@media (min-width: 768px) {
  width: 220px;
  }
  @media (min-width: 1440px) {
    width: 280px;
  }

`
export const FooterContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
`