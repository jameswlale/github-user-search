import { AnyAction, applyMiddleware, createStore } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import reducers, { AppState } from "./reducers";

export type ReduxAction = ThunkAction<void, AppState, null, AnyAction>;
export type ReduxDispatch = ThunkDispatch<{}, {}, any>;

export default createStore(reducers, applyMiddleware(thunk));
