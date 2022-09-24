// import { NavLink} from "react-router-dom";
import { MenuAuthNavLink } from "./MenuAuth.styled";


const MenuAuth = () => {
    return (
        <>
            <MenuAuthNavLink  to="/register">Register</MenuAuthNavLink>
            or
            <MenuAuthNavLink to="/login">Login</MenuAuthNavLink>
        </>
    );
}

export default MenuAuth;