import { createStore } from "@reduxjs/toolkit";
import rootReducers from "../Reducer";

const store = createStore(
    rootReducers
);
export default store;