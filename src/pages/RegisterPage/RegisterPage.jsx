import RegisterForm from "modules/RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuthError, isAuth } from "redux/selectors";

const RegisterPage = () => {
    const {status, message} = useSelector(getAuthError);
    const isLogin = useSelector(isAuth);
        if(isLogin) {
            return <Navigate to="/contacts" />
        }
        
    return (
        <>
        <RegisterForm/>
        {status && <p style={{color: "#eb1052"}}>{message}</p>}
        </>
    );
}

export default RegisterPage;