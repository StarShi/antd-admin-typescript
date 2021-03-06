import React from "react";
import "./App.less";
import { BrowserRouter} from "react-router-dom";
import routes from "./router";
import  { renderRoutes } from  "react-router-config";
 // import ScrollToTop from "./components/scroll_to_top/ScrollToTop"; // 路由跳转时，实现滚动条重置，暂时不用

function App() {
  return (
    <>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </>
  );
}

export default App;
