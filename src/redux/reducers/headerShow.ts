import { SET_HEADER_SHOW } from "../constant";

interface Action {
  type: string;
  data: boolean;
}

const initState = true;

export default function headerShow(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_HEADER_SHOW:
      return data;
    default:
      return preState;
  }
}
