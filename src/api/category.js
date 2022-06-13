// 分类相关api结构数据
import request from "@/utils/request";

export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}