import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import entryReducer from "./entry/entry.reducer";
import floatingAddButtonReducer from "./floating-add-button/floating-add-button.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entry", "floatingAddButton"],
};

const rootReducer = combineReducers({
  user: userReducer,
  entry: entryReducer,
  floatingAddButton: floatingAddButtonReducer,
});

export default persistReducer(persistConfig, rootReducer);
