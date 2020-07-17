import React from "react";
import "./Home.less";
import { renderRoutes } from "react-router-config";
import { RouteConfigComponentProps, RouteConfig } from "react-router-config";

interface IProps extends RouteConfigComponentProps{
}

function Home(props: IProps) {
  const { route,match } = props;
  console.log(match)
  return (
    <div>
      首页
      {renderRoutes((route) ? (route.routes ? route.routes : [] ):[])}
    </div>
  );
}

export default Home;
