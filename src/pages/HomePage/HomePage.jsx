import styled from "styled-components";

const HomePage = () => {

    return (
        <div>
            <Title>This application is made for you, earthling!</Title>
            <Title>Here you can store the numbers of your friends!</Title>
            <Title>May Space help you!</Title>
        </div>

    );
}

export default HomePage;

const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: 500;
`