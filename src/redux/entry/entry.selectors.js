import { createSelector } from "reselect";

const selectEntry = (state) => state.entry;

export const selectEntries = createSelector([selectEntry], (entry) =>
  entry ? entry.entries : null
);
