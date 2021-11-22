import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MouseMove from "./interaction/MouseMove";
import styled from "styled-components";
import Mouse from "./interaction/Mouse";
import { useSelector } from "react-redux";
import { RootReducerType } from "./store";
import MouseMoveBird from "./interaction/MouseMoveBird";

const Block = styled.div`
  width: 100vw;
  height: 100vh;
`;
function App() {
  const mouseInfo = useSelector((state: RootReducerType) => state.moveMouse);
  console.log(mouseInfo);
  return (
    <Block className="App">
      <MouseMove pointerSize="40px"></MouseMove>
      <img
        className=""
        src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/5-ac49bfdc.png"
      />
      {/* <MouseMoveBird></MouseMoveBird> */}
      {/* <Mouse></Mouse> */}
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
      <MouseMove /> */}
    </Block>
  );
}

export default App;
