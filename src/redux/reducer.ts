/*
 * @description: 合并多个模块的 reducer 函数
 * @author: Star Shi
 * @Date: 2020-07-09 16:40:01
 * @LastEditTime: 2020-07-13 16:23:31
 */ 

 import { combineReducers } from "redux";
 import thunkReducer from "./reducers";


 const rootReducer = combineReducers({
   ...thunkReducer
 });

 export default rootReducer;