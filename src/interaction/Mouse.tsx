import React, { MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoveMouse } from "../actions/mouseMoveActions";
import { RootReducerType } from "../store";

const Mouse = () => {
  const dispatch = useDispatch();
  const mouseInfo = useSelector((state: any) => {
    console.log(state);
    return { moveMouse: state.MoveMouse.moveMouse };
  });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log("실행");

      dispatch(MoveMouse(e));
      console.log(mouseInfo, "mouseInfo");
    });
  }, []);
  return <div></div>;
};

export default Mouse;
