
import { IconWrapper, NavMenuWrapper } from "./NavMenu.styled"
import { GoBackIcon, NavLinkStyled, NavigationItem, NavigationList } from "../Navigation.styled";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";


export const NavMenu = ({ closeNavMenu}) => {
    const location = useLocation();
   
    const pageLocation = location.pathname === '/catalog' || location.pathname === '/favorites';

    // const handleBodyClick = (event) => {
    //     console.log("Click, click")
    //     if (event.currentTarget === event.target) {
    //       closeNavMenu();
    //     }
    //   };
    const menuRef = useRef(null);

    useEffect(() => {
      const handleBodyClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          // Клік поза меню, закрити меню
          closeNavMenu();
        }
      };
  
      document.body.addEventListener('mousedown', handleBodyClick);

      return () => {
        document.body.removeEventListener('mousedown', handleBodyClick);
      };
    }, [closeNavMenu]);
  

    return (
        <NavMenuWrapper  ref={menuRef}> 
            <IconWrapper onClick={closeNavMenu} size={20} >
            </IconWrapper>
            <NavigationList>
                <NavigationItem>
                    <NavLinkStyled to="/catalog"> Catalogue</NavLinkStyled>
                </NavigationItem>
                <NavigationItem>
                    <NavLinkStyled to="/favorites"> Favorites</NavLinkStyled>
                </NavigationItem>
                <NavigationItem>
                    {pageLocation && <NavLinkStyled to='/'> <GoBackIcon /></NavLinkStyled>}
                </NavigationItem>
            </NavigationList>
        </NavMenuWrapper>
    )
}