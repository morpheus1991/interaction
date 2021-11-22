import { Action, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const MOVEMOUSE = "MOVEMOUSE";

interface State {
  moveMouse: {
    x: number;
    y: number;
  };
}

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
const initialState = {
  moveMouse: {
    x: 0,
    y: 0,
  },
};
function myEvent(state: State = initialState, action: EventDispatchType) {
  console.log("myEvent");
  switch (action.type) {
    case MOVEMOUSE:
      console.log("MOVEMOUSE");
      console.log(action.payload);
      const { x, y } = action.payload.moveMouse;
      console.log(state);
      return {
        ...state,
        moveMouse: { x, y },
      };

    default:
      return { ...state };
  }
}

export const store = createStore(myEvent, applyMiddleware(thunk));
export type RootReducerType = ReturnType<typeof myEvent>;
