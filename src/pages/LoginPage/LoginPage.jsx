import LoginForm from "modules/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { getAuthError} from "redux/selectors";

const LoginPage = () => {
    const {status, message} = useSelector(getAuthError);

    return (
        <>
        <LoginForm/>
        {status && <p style={{color: "#eb1052"}}>{message}</p>}
        </>
    );
}

export default LoginPage;