import React from 'react';
import { BarLoader } from "react-spinners";
import { Wrapper } from './Loader.styled';


function Loader() {
  return (
    <Wrapper>
      <BarLoader
        color="#eb1052"
        width={700}
    />
    </Wrapper>
  );
}

export default Loader;