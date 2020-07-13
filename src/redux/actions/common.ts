/*
 * @description: redux 的 actions 配置
 * @author: Star Shi
 * @Date: 2020-07-09 17:17:05
 * @LastEditTime: 2020-07-13 16:08:32
 */

import { Dispatch } from "redux";
import { SET_USER_INFO } from "../constants";

export const setUserInfo = (userInfo: any) => ({
  type: SET_USER_INFO,
  payload: userInfo,
});

export const setUserInfoAsync = (userInfo: any) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(setUserInfo(userInfo));
    }, 2000);
  };
};
