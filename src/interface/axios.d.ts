/*
 * @description: axios 类型补充
 * @author: Star Shi
 * @Date: 2020-07-14 13:57:26
 * @LastEditTime: 2020-07-14 17:01:32
 */

export interface SuccessResponse {
  // 状态码
  code?: number;

  // 数据
  data?: number;

  // 提示信息
  msg?: string;

  // 错误信息
  errmsg?: string;
}

export interface ApiRetryConfig {
  // 是否重试
  times?: number;

  // 重试次数
  retry?: boolean;
  
  // 间隔时间，单位毫秒
  delayTime?: number;
}
