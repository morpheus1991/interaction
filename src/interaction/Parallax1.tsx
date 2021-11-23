import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
const Block = styled.div`
  width: 100vw;
  height: 10000px;
  background: linear-gradient(
    150deg,
    red,
    orange,
    yellow,
    green,
    indigo,
    purple,
    black
  );
`;

const Parallax1 = () => {
  return (
    <Block>
      <ProgressBar verticalMode={true}></ProgressBar>
    </Block>
  );
};

export default Parallax1;
