// import { NavLink } from "react-router-dom";
import { NavbarNavLink } from "./Navbar.styled";
import MenuAuth from "./MenuAuth/MenuAuth";
import Menu from "./MenuNav/Menu";


const Navbar = () => {


    return (
        <div >
            <NavbarNavLink  to="/">Home</NavbarNavLink>
            <Menu />
            <MenuAuth />
        </div>
    )
}

export default Navbar;