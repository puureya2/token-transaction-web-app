import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index";
import blogReducer from "./blogs/index";
import ticketReducer from "./tickets/index";
import alertReducer from "./alert/index";
import chatReducer from "./chat";
import contractReducer from "./contracts/contractsDetails"; // contract slice
import contractDBReducer from "./contracts/contractsDetailsDB"; // static contract slice
// import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    ticket: ticketReducer,
    alert: alertReducer,
    chat: chatReducer,
    contract: contractReducer,
    contractDB: contractDBReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
