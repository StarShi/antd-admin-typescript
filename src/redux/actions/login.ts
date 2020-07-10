/*
 * @description:
 * @author: Star Shi
 * @Date: 2020-07-09 17:17:05
 * @LastEditTime: 2020-07-09 18:27:03
 */

import {Dispatch} from "redux";
import { SET_USER_INFO } from "../constants";

export const setUserInfo = (userinfo: any) => ({
  type: SET_USER_INFO,
  userinfo,
});

export const setUserInfoAsync = (userinfo: any) => {
  return (dispatch:Dispatch) => {
    setTimeout(() => {
      dispatch(setUserInfo(userinfo));
    }, 2000);
  };
};
