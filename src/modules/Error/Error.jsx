import { PropagateLoader } from "react-spinners";
import { ErrorSpan } from "./Error.styled";

const Error = () => {
    return (
        <>
        <p> ...load failed
            <ErrorSpan>
                <PropagateLoader
                    color="#eb1052"
                    size={10}
                />
            </ErrorSpan>
        </p>
        </>

    );
}

export default Error;



