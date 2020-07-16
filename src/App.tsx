import React from "react";
import "./App.less";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return <Route path={route.path} exact component={route.component} key={index}></Route>;
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
