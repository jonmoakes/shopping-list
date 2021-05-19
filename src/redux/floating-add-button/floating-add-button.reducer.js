import { FloatingAddButtonActionTypes } from "./floating-add-button.types";

const INITIAL_STATE = {
  showFloatingAddButton: true,
  clearFloatingAddButton: false,
};

const floatingAddButtonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FloatingAddButtonActionTypes.SHOW_FLOATING_ADD_BUTTON:
      return {
        ...state,
        showFloatingAddButton: true,
      };
    case FloatingAddButtonActionTypes.HIDE_FLOATING_ADD_BUTTON:
      return {
        ...state,
        showFloatingAddButton: false,
      };
    case FloatingAddButtonActionTypes.CLEAR_FLOATING_ADD_BUTTON:
      return {
        ...state,
        clearFloatingAddButton: true,
      };
    default:
      return state;
  }
};

export default floatingAddButtonReducer;
