import {
  ADD_DATA,
  UPDATE_DATA,
  REMOVE_DATA,
  Data,
  DataActionTypes,
} from "../Types/actionsType";

export interface DataState {
  payload: Data[];
}

const initialState: DataState = {
  payload: [],
};

const cmsReducer = (
  state: DataState = initialState,
  action: DataActionTypes
): DataState => {
  switch (action.type) {
    case ADD_DATA:
      const newAddedData: Data = {
        id: state.payload.length + 1,
        content: action.payload,
      };

      return {
        ...state,
        payload: [...state.payload, newAddedData],
      };

    case UPDATE_DATA:
      return {
        ...state,
        payload: state.payload.map((data) =>
          data.id === action.payload.id
            ? { ...data, content: action.payload.data }
            : data
        ),
      };

    case REMOVE_DATA:
      return {
        ...state,
        payload: state.payload.filter((data) => data.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cmsReducer;
