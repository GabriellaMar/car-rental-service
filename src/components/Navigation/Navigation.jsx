import { NavLink } from "react-router-dom"
import { Logo } from "../Logo/Logo.jsx"
import { NavigationList } from "./Navigation.styled"

export const Navigation =() =>{
    return (
        <nav>
            <NavigationList>
                <li>
                    <NavLink to='/'>
                        <Logo />
                        </NavLink>
                </li>
                <li>
                <NavLink to="/catalog"> Catalogue</NavLink>
                </li>
                <li>
                <NavLink to="/favorites"> Favorites</NavLink>
                </li>
            </NavigationList>
        </nav>
    )
}