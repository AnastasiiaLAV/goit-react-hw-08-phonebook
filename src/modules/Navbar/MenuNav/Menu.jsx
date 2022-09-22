// import { NavLink} from "react-router-dom";
import { MenuUl, MenuLi, MenuNavLink } from "./Menu.styled";
import { Outlet } from 'react-router-dom';

const Menu = () => {
    return (
    <>
        <MenuUl>
            {/* <MenuLi>
                <MenuNavLink to="/">Home</MenuNavLink>
            </MenuLi> */}
            {/* <MenuLi>
                <MenuNavLink to="/singin">Sing in</MenuNavLink>
            </MenuLi> */}
            <MenuLi>
                <MenuNavLink to="/contacts">My contacts</MenuNavLink>
            </MenuLi>
        </MenuUl>
        <Outlet />
    </>
    );
}

export default Menu;