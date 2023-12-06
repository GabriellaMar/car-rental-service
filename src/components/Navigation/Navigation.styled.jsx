import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa';

export const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
`
export const NavigationItem = styled.li`
 
    display: inline-block;
`;

export const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    color: #ece9e9;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 20px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);


    &:active,
    &:hover,
    &:focus {
        transform: scale(1.1);
        text-shadow: 2px 2px 6px rgba(219, 218, 218, 0.872); 
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--white);
        span{
            color: var(--white);
            text-shadow: 2px 2px 6px rgba(219, 218, 218, 0.872);
        }
    }
    &:active{
        text-shadow: 2px 2px 6px rgba(219, 218, 218, 0.872); 
        color: var(--white);
    }
    /* text-shadow: 2px 2px 5px #000000; */
`;

export const GoBackIcon = styled(FaArrowLeft)`
  width: 13px;
  height: 13px;
  /* margin-left: 10px; */
  padding: 10px;
  color:  #e7e4e4f4;
  border-radius: 50%;
  border: 2px solid #e7e4e4f4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(188 221 244) 0px 1px 8px;
  

  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`;
export const NavigationWrapper = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`