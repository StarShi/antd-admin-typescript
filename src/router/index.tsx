/**
 * @description: 路由配置
 * @author: Star Shi
 * @Date: 2020-07-16 17:09:21
 * @LastEditTime: 2020-07-16 20:39:06
 **/
import { RouteConfig } from "../interface/router";


const routes: RouteConfig[] = [
  {
    path: "/",
    component: require("../views/home/home").default,
  },
  {
    path: "/login",
    component: require("../views/login/login").default,
  },
];

export default routes;
