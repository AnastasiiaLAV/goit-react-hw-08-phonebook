import { NavLink } from "react-router-dom";
import { Wrapper, Planet } from "./Navbar.styled";
import MenuAuth from "./MenuAuth/MenuAuth";
import Menu from "./MenuNav/Menu";
import { useSelector } from "react-redux";
import { isAuth } from "redux/selectors";
import MenuUser from "./MenuUser/MenuUser";
import img from "../../img/planetMars_planet_2769.png"


const Navbar = () => {
    const isLogin = useSelector(isAuth);

    return (
        <Wrapper>
            <NavLink  to="/">
                <Planet src={img} alt="planet" width='80'/>
            </NavLink>
            {isLogin && <Menu />}
            {isLogin ? <MenuUser/> : <MenuAuth />}
        </Wrapper>
    )
}

export default Navbar;