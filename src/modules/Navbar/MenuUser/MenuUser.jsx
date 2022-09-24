import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/auth/auth-operations";
import { getUser } from "redux/selectors";
import { MenuUserBtn } from "./MenuUser.styled";

// import * as icon from '../../../img/sprite.svg';

const MenuUser = () => {
    const {name} = useSelector(getUser);
    console.log('name', name)
    const dispatch = useDispatch();

    const onLogOut = () => dispatch(logoutUser());

    return (
        <>
        <div>
            {/* <svg width="35" height="35">
                <use href = "${icon}#icon-user"></use>
            </svg> */}
            <span>{name}</span>
        </div>
        <MenuUserBtn type="button" onClick={onLogOut}>LogOut</MenuUserBtn>
        </>
    );
}

export default MenuUser;