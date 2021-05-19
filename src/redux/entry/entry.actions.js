import { EntryActionTypes } from "./entry.types";

export const updateEntries = (entries) => ({
  type: EntryActionTypes.UPDATE_ENTRIES,
  payload: entries,
});

export const clearEntries = () => ({
  type: EntryActionTypes.CLEAR_ENTRIES,
});
