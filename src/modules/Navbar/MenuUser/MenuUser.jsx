import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/auth/auth-operations";
import { getUser } from "redux/selectors";
import { MenuUserBtn, MenuUserName, MenuUserWrapp } from "./MenuUser.styled";
import svg from './sprite.svg'

const svgAdress = svg + "#icon-user";

const MenuUser = () => {
    const {name} = useSelector(getUser);

    const dispatch = useDispatch();

    const onLogOut = () => dispatch(logoutUser());

    return (
        <>
        <MenuUserWrapp>
            <svg width="70" height="70">
                <use href={svgAdress} />
            </svg>
            <MenuUserName>Hello, {name.toUpperCase()}</MenuUserName>
        </MenuUserWrapp>
        <MenuUserBtn type="button" onClick={onLogOut}>LogOut</MenuUserBtn>
        </>
    );
}

export default MenuUser;