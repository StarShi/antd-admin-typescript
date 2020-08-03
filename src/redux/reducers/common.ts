/*
 * @description: 公共的 reducer 函数
 * @author: Star Shi
 * @Date: 2020-07-09 17:22:55
 * @LastEditTime: 2020-08-03 10:34:17
 */

import { AnyAction } from "redux";
import { SET_USER_INFO , SET_TOKEN} from "../constants";

interface CommonStateType {
  userInfo?: any,
  token?: string,
}

const initState:CommonStateType = {
  userInfo: {},
  token: "",
};
export default function (state: object = initState, action: AnyAction):CommonStateType {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload,
      });
    default:
      return state;
  }
}
