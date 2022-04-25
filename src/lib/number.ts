/*
 * @Author       : Eug
 * @Date         : 2022-04-25 17:10:56
 * @LastEditTime : 2022-04-25 17:13:38
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/src/lib/test.ts
 */
export const SumArray = (arr: number[]) => {
  return arr.reduce((o, v) => {
    return o + v;
  }, 0);
};
