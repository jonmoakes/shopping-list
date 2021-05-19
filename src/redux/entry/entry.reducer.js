import { EntryActionTypes } from "./entry.types";

const INITIAL_STATE = {
  entries: [],
};

const entryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EntryActionTypes.UPDATE_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    case EntryActionTypes.CLEAR_ENTRIES:
      return {
        ...state,
        entries: [],
      };
    default:
      return state;
  }
};

export default entryReducer;
