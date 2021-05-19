import { FloatingAddButtonActionTypes } from "./floating-add-button.types";

export const showFloatingAddButton = () => ({
  type: FloatingAddButtonActionTypes.SHOW_FLOATING_ADD_BUTTON,
});

export const hideFloatingAddButton = () => ({
  type: FloatingAddButtonActionTypes.HIDE_FLOATING_ADD_BUTTON,
});

export const clearFloatingAddButton = () => ({
  type: FloatingAddButtonActionTypes.CLEAR_FLOATING_ADD_BUTTON,
});
