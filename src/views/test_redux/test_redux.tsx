import React from "react";
import { Button } from "antd";
import "./test_redux.less";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setUserInfoAsync } from "../../redux/actions/common";
import { IState } from "../../interface/redux";

function TestRedux() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: IState) => state.commonReducer);
  // 同步状态管理
  const handleUserInfo = () => {
    let userInfo:any = {
      name: "同步",
      age: 18,
    };
    dispatch(setUserInfo(userInfo));
  };
  // 异步状态管理
  const handleUserInfoAsync = () => {
    let userInfo:any = {
      name: "异步",
      age: 81,
    };
    dispatch(setUserInfoAsync(userInfo));
  };
  return (
    <div>
      <Button type="primary" onClick={handleUserInfo}>展示数据</Button>
      <Button type="primary" onClick={handleUserInfoAsync}>异步展示数据</Button>
      <p>姓名:{userInfo.name}</p>
      <p>年龄:{userInfo.age}</p>
    </div>
  );
}

export default TestRedux;
