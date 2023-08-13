import {
  ADD_DATA,
  REMOVE_DATA,
  UPDATE_DATA,
  DataActionTypes,
} from "../Types/actionsType";

export const addNote = (data: string): DataActionTypes => ({
  type: ADD_DATA,
  payload: data,
});

export const deleteNote = (id: number): DataActionTypes => ({
  type: REMOVE_DATA,
  payload: id,
});

export const updateNote = (id: number, data: string): DataActionTypes => ({
  type: UPDATE_DATA,
  payload: {
    id,
    data,
  },
});
