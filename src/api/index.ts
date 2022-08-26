/*
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 17:15:39
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-26 10:37:29
 * @FilePath: /micro-base/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import menu from './route'
import user from './user'
const server = Object.assign({},menu, user)

export default server