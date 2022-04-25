/*
 * @Author       : Eug
 * @Date         : 2022-04-25 15:14:56
 * @LastEditTime : 2022-04-25 17:18:07
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /micro-base/tests/Test.spec.ts
 */
// import { mount } from "@vue/test-utils";
import { SumArray } from '../src/lib/number';

test('TestOptions [1,2,...] to equal 1+2+...', () => {
  expect(SumArray([1, 3, 5, 7])).toBe(16);
});
