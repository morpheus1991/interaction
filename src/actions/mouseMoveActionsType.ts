import { MOVEMOUSE } from "../store";
export interface MoveMouseDispatch {
  type: typeof MOVEMOUSE;
  payload: {
    moveMouse: {
      x: number;
      y: number;
    };
  };
}

export type EventDispatchType = MoveMouseDispatch;
