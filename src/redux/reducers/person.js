/* eslint-disable import/no-anonymous-default-export */
import {
  DATA_LOADED,
  DATA_ERROR
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DATA_LOADED:
      return [
        ...state,
        payload
      ];

    case DATA_ERROR:
      return [
        ...state
      ]
      default:
        return state;
    }
}
