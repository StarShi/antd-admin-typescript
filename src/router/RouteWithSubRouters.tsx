/**
 * @description: 返回具体的路由导航
 * @author: Star Shi
 * @Date: 2020-07-17 11:12:43
 * @LastEditTime: 2020-08-03 10:40:43
 **/

import React from "react";
import { Switch, Route } from "react-router-dom";
// import { RouteConfig } from "../interface/router";
import { RouteConfigComponentProps, RouteConfig } from "react-router-config";

// 处理子路由的组件 返回具体的路由导航
const RouteWithSubRouters = (props: RouteConfigComponentProps) => {
  const { route, match } = props;
  if (route) {
    if (route.routes) {
      return (
        <Switch>
          {route.routes.map((childRoute: RouteConfig, childIndex: number) => {
            return (
              <Route
                key={childRoute.key || childIndex}
                path={`${match.path}${childRoute.path || ""}`}
                exact={childRoute.exact}
                strict={childRoute.strict}
                render={(props: RouteConfigComponentProps) => {
                  if (childRoute.render) {
                    return childRoute.render({ ...props, route: childRoute.routes });
                  }
                  if (childRoute.component) {
                    return (
                      <childRoute.component
                        {...props}
                        route={childRoute.routes}
                      ></childRoute.component>
                    );
                  }
                  return null;
                }}
              ></Route>
            );
          })}
        </Switch>
      );
    }
  }
  return null;
};

export default RouteWithSubRouters;
