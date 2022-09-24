// import { NavLink} from "react-router-dom";
import { MenuNavLink } from "./Menu.styled";
import { Outlet } from 'react-router-dom';

const Menu = () => {
    return (
    <>
        <MenuNavLink to="/contacts">My contacts</MenuNavLink>
        <Outlet />
    </>
    );
}

export default Menu;