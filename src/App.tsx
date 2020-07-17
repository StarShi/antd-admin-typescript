import React from "react";
import "./App.less";
import { BrowserRouter} from "react-router-dom";
import routes from "./router";
import  { renderRoutes } from  "react-router-config";
 // import ScrollToTop from "./components/scroll_to_top/ScrollToTop";

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
