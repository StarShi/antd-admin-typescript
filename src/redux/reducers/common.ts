/*
 * @description: 公共的 reducer 函数
 * @author: Star Shi
 * @Date: 2020-07-09 17:22:55
 * @LastEditTime: 2020-07-13 16:23:03
 */

import { AnyAction } from "redux";
import { SET_USER_INFO } from "../constants";

const initState = {
  userInfo: {},
};
export default function (state: object = initState, action: AnyAction) {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });

    default:
      return state;
  }
}
