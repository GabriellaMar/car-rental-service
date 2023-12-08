// import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../Logo/Logo.jsx"
import { NavigationItem, NavigationWrapper, NavLinkStyled, NavigationList, GoBackIcon, NavBtn } from "./Navigation.styled"
import { useLocation } from 'react-router-dom';
import useMediaQuery from "../../hooks/useMediaQuery.jsx"
import { NavMenu } from "./NavMenu/NavMenu.jsx";
import { useState } from "react";


export const Navigation = () => {
  const location = useLocation();
  const isMediumScreens = useMediaQuery("(min-width: 768px)");

  const [showNavMenu, setShowNavMenu] = useState(false);

  const pageLocation =
    location.pathname === '/catalog' || location.pathname === '/favorites';

    const toggleNavMenu = () => {
      setShowNavMenu(!showNavMenu);
      document.body.style.overflow = showNavMenu ? 'auto' : 'hidden';
    };

    const showGoBackBtn = isMediumScreens || (!isMediumScreens && showNavMenu );

  return (
    <NavigationWrapper>
      <NavLinkStyled to='/'><Logo /></NavLinkStyled>
      {isMediumScreens ? (
        <NavigationList>
          <NavigationItem>
            <NavLinkStyled to="/catalog"> Catalogue</NavLinkStyled>
          </NavigationItem>
          <NavigationItem>
            <NavLinkStyled to="/favorites"> Favorites</NavLinkStyled>
          </NavigationItem>
        </NavigationList>
        ) :
        (showNavMenu ? (<NavMenu closeNavMenu ={toggleNavMenu} />) : (<NavBtn type='button'>
            <RxHamburgerMenu color="#d4d2d2" size={25} onClick={toggleNavMenu}/>
          </NavBtn>)
        )
      }
      {pageLocation && showGoBackBtn &&  (
        <NavLinkStyled to='/'> <GoBackIcon /></NavLinkStyled>
      )}
    </NavigationWrapper>
  )
}