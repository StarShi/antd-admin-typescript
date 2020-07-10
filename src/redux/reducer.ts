/*
 * @description: 
 * @author: Star Shi
 * @Date: 2020-07-09 16:40:01
 * @LastEditTime: 2020-07-09 18:50:21
 */ 

 import { combineReducers } from "redux";
 import thunkReducer from "./reducers";


 const rootReducer = combineReducers({
   ...thunkReducer
 });

 export default rootReducer;