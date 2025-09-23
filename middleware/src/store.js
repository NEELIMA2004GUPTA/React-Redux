import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer.js";
import { authMidleware } from "./authMiddleware.js";

export const store=createStore(
    rootReducer,
    applyMiddleware(authMidleware)
)