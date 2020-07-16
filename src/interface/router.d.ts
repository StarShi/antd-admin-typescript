/*
 * @description: 路由类型补充
 * @author: Star Shi
 * @Date: 2020-07-16 18:42:50
 * @LastEditTime: 2020-07-16 20:19:33
 */

export interface RouteConfig {
  // 路径
  path: string;
  // 组件
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  // 子路由
  children?: RouteConfig;
  // 其他值
  meta?:MetaOptions
}

export interface MetaOptions{
  title:string
}