import {
  ADD_DATA,
  REMOVE_DATA,
  UPDATE_DATA,
  DataActionTypes,
} from "../Types/actionsType";

export const addActions = (data: string): DataActionTypes => ({
  type: ADD_DATA,
  payload: data,
});

export const deleteActions = (id: number): DataActionTypes => ({
  type: REMOVE_DATA,
  payload: id,
});

export const updateActions = (id: number, data: string): DataActionTypes => ({
  type: UPDATE_DATA,
  payload: {
    id,
    data,
  },
});
