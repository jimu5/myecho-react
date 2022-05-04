import {
  SET_HEADER_SHOW,
  SET_MODE
} from "./constant";

export const setHeaderShow = (data: boolean) => ({
  type: SET_HEADER_SHOW,
  data
});

export const setMode = (data: number) => ({
  type: SET_MODE,
  data
});