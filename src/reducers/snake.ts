import * as c from '../constants';

interface StateDef {
  number: number;
}

type Action = {
  type: string,
  payload: object
};

let initState = {
  number: 12,
  positionX: 2,
  positionY: 2,
  direction: c.SNAKE_HORIZONTAL_VECTOR_RIGHT,
  tailLength: 8,
  tailData: []
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