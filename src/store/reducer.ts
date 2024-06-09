import { combineReducers } from "redux";
import memuSlice from "../slices/memuSlice";

const rootReducer = combineReducers({
    menuReducer: memuSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;