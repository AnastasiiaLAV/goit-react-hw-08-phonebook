import RegisterForm from "modules/RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import { getAuthError} from "redux/selectors";

const RegisterPage = () => {
    const {status, message} = useSelector(getAuthError);
        
    return (
        <>
        <RegisterForm/>
        {status && <p style={{color: "#eb1052"}}>{message}</p>}
        </>
    );
}

export default RegisterPage;