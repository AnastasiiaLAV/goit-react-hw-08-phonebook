// import { NavLink} from "react-router-dom";
import { MenuAuthNavLink } from "./MenuAuth.styled";


const MenuAuth = () => {
    return (
        <div>
            <MenuAuthNavLink  to="/register">Register</MenuAuthNavLink>
            |
            <MenuAuthNavLink to="/login">Login</MenuAuthNavLink>
        </div>
    );
}

export default MenuAuth;