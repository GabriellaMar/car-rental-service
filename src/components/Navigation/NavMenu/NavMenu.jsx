
import { IconWrapper, NavMenuWrapper } from "./NavMenu.styled"
// import { MdOutlineClose } from "react-icons/md";
import { GoBackIcon, NavLinkStyled, NavigationItem, NavigationList } from "../Navigation.styled";
import { useLocation } from "react-router-dom";


export const NavMenu = ({ closeNavMenu }) => {
    const location = useLocation();

    const pageLocation =
        location.pathname === '/catalog' || location.pathname === '/favorites';

    return (
        <NavMenuWrapper >
            <IconWrapper onClick={closeNavMenu} size={20}>
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