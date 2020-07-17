/**
 * @description: 滚动到顶部组件
 * @author: Star Shi
 * @Date: 2020-07-17 10:53:10
 * @LastEditTime: 2020-07-17 11:18:48
 **/
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
export default ScrollToTop;
