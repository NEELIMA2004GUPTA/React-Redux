import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducer.jsx";
import { authMidleware } from "./authMiddleware.jsx";

export const store=createStore(
    rootReducer,
    applyMiddleware(authMidleware)
)