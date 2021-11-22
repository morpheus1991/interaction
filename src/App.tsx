import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MouseMove from "./interaction/MouseMove";
import styled from "styled-components";
import Mouse from "./interaction/Mouse";
import { useSelector } from "react-redux";
import { RootReducerType } from "./store";

const Block = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  const mouseInfo = useSelector((state: RootReducerType) => state.moveMouse);
  console.log(mouseInfo);
  return (
    <Block className="App">
      <Mouse></Mouse>
      {/* <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove />
      <MouseMove /> */}
    </Block>
  );
}

export default App;
