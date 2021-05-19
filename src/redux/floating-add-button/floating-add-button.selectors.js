import { createSelector } from "reselect";

const selectFloatingAddButton = (state) => state.floatingAddButton;

export const selectHideFloatingAddButton = createSelector(
  [selectFloatingAddButton],
  (floatingAddButton) => floatingAddButton.showFloatingAddButton
);
