import * as c from '../constants';
import store from '../store';

export function setFormSize(obj: object) {
  store.dispatch({
    type: c.SET_SIZE,
    payload: obj
  });
}

export function setSnakeData(obj: object) {
  store.dispatch({
    type: c.SET_SNAKE_DATA,
    payload: obj
  });
}