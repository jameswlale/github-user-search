import { userReducer } from "../reducers/user.reducer";

const rootReducer = userReducer;

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
