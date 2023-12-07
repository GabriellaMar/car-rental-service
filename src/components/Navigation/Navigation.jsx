// import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../Logo/Logo.jsx"
import { NavigationItem,  NavigationWrapper, NavLinkStyled, NavigationList, GoBackIcon, NavBtn } from "./Navigation.styled"
import { useLocation } from 'react-router-dom';
import useMediaQuery from "../../hooks/useMediaQuery.jsx"
// import { Navigate } from "react-router-dom";

export const Navigation =() =>{
    const location = useLocation();
    const isMediumScreens = useMediaQuery("(min-width: 768px)");
    const pageLocation =
      location.pathname === '/catalog' || location.pathname === '/favorites';
  
    return (
        <NavigationWrapper>
            {/* <NavigationItem> */}
                    <NavLinkStyled to='/'><Logo /></NavLinkStyled>
                {/* </NavigationItem> */}
                {isMediumScreens ?  (
            <NavigationList>
                <NavigationItem>
                <NavLinkStyled to="/catalog"> Catalogue</NavLinkStyled>
                </NavigationItem>
                <NavigationItem>
                <NavLinkStyled to="/favorites"> Favorites</NavLinkStyled>
                </NavigationItem>
            </NavigationList>) :
            (
              <NavBtn type='button'>
              <RxHamburgerMenu color="#FFFFFF" size={25} />
              </NavBtn>
            ) 
          }
            {/* <RxHamburgerMenu color="#FFFFFF" size={25} /> */}
            {pageLocation && (
           <NavLinkStyled to='/'> <GoBackIcon /></NavLinkStyled> 
          )}
        </NavigationWrapper>
    )
}