/**
 * @description: 路由配置
 * @author: Star Shi
 * @Date: 2020-07-16 17:09:21
 * @LastEditTime: 2020-08-03 11:11:58
 **/
import { RouteConfig } from "react-router-config";
import RouteWithSubRouters from "./RouteWithSubRouters";
import Article from "../views/blog/article/Article";
import ArticleTab from "../views/blog/article_tab/ArticleTab";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "首页",
    exact: true,
    component: require("../views/home/Home").default,
  },
  {
    path: "/login",
    name: "登录",
    exact: true,
    component: require("../views/login/Login").default,
  },
  {
    path: "/blog",
    name: "博客管理",
    component: RouteWithSubRouters,
    routes: [
      {
        path: "/article",
        name: "文章管理",
        exact: true,
        component: Article,
      },
      {
        path: "/article_tab",
        name: "标签管理",
        exact: true,
        component: ArticleTab,
      },
    ],
  },
];

export default routes;
