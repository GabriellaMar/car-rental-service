import { NavLink } from "react-router-dom"
import { Logo } from "../Logo/Logo.jsx"
import { NavigationItem,  NavigationWrapper, NavLinkStyled, NavigationList, GoBackIcon } from "./Navigation.styled"
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

export const Navigation =() =>{
    const location = useLocation();
    const pageLocation =
      location.pathname === '/catalog' || location.pathname === '/favorites';
  
    return (
        <NavigationWrapper>
            <NavigationList>
                <NavigationItem>
                    <NavLinkStyled to='/'><Logo /></NavLinkStyled>
                </NavigationItem>
                <NavigationItem>
                <NavLinkStyled to="/catalog"> Catalogue</NavLinkStyled>
                </NavigationItem>
                <NavigationItem>
                <NavLinkStyled to="/favorites"> Favorites</NavLinkStyled>
                </NavigationItem>
            </NavigationList>
            {pageLocation && (
           <NavLinkStyled to='/'> <GoBackIcon /></NavLinkStyled> 
          )}
        </NavigationWrapper>
    )
}