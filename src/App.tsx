import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MouseMove from "./interaction/MouseMove";
import styled from "styled-components";

const Block = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <Block className="App">
      <MouseMove
      // pointerSize=""
      // pointerColor=""
      // mouseDownEffectColor=""
      ></MouseMove>
    </Block>
  );
}

export default App;
