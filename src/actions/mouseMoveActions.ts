import React, { Dispatch } from "react";
import { MOVEMOUSE } from "../store";
import { MoveMouseDispatch } from "./mouseMoveActionsType";

export const MoveMouse =
  (e: globalThis.MouseEvent) => (dispatch: Dispatch<MoveMouseDispatch>) => {
    console.log("MoveMouse디스패치 실행", e);
    console.log(e);
    const { clientX: x, clientY: y } = e;
    dispatch({
      type: MOVEMOUSE,
      payload: {
        moveMouse: {
          x,
          y,
        },
      },
    });
  };
