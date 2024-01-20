import * as combineReducer from "redux";
import { ProductReducer } from "./ProductReducer";

 const reducers = combineReducer({
    AllProdocts:ProductReducer,
});

export default reducers;
