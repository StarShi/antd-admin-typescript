import React from "react";
import { Button } from "antd";
import "./App.less";
import { useSelector } from "react-redux";

function App() {
  console.log(process.env);
  const state = useSelector((state) => {
    console.log(state)
    // userinfo: state.userinfo;
  });
  return (
    <div>
      <div className="box">hello</div>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;
