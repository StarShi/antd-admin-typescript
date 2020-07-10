/*
 * @description: 数据状态管理
 * @author: Star Shi
 * @Date: 2020-07-09 15:42:04
 * @LastEditTime: 2020-07-09 16:57:57
 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer";

// 增强调试
const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(
  thunk,
  logger
)));

export default store;