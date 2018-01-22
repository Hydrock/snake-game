import * as c from '../constants';

interface StateDef {
  width: number;
  height: number;
}

type Action = {
  type: string,
  payload: object
};

let initState = {
  width: 10,
  height: 10
};

export default function size(state: StateDef = initState, action: Action) {
  switch (action.type) {
    case c.SET_SIZE:
      state = Object.assign({}, state, action.payload);
      return state;
    default:
      return state;
  }
}