import { SET_MODE } from '../constant';

interface Action {
  type: string;
  data: boolean;
}

const initState = 0;

export default function mode(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_MODE:
      return data;
    default:
      return preState;
  }
}
