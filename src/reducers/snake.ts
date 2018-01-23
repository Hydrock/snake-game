import * as c from '../constants';

interface StateDef {
  number: number;
}

type Action = {
  type: string,
  payload: object
};

let initState = {
  number: 10,
  positionX: 4,
  positionY: 4,
  verticalVector: c.SNAKE_VERTICAL_VECTOR_UP,
  horizontalVector: c.SNAKE_HORIZONTAL_VECTOR_RIGHT,
};

export default function snake(state: StateDef = initState, action: Action) {
  switch (action.type) {
    case c.SET_SNAKE_DATA:
      state = Object.assign({}, state, action.payload);
      return state;
    default:
      return state;
  }
}