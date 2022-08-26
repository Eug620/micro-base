/*
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 17:15:54
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-26 10:23:48
 * @FilePath: /micro-base/src/api/menu/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/plugin/axios'
import { cloneDeep } from 'lodash'

const Url = {
    'server': {
        'menuAll': '/route/all',
        'menuAdd': '/route/add',
    }
}

/// mock
const o = cloneDeep(Url.server)
Url['mock'] = {}
Object.entries(o).forEach(item => {
    Url['mock'][item[0]] = '/mock' + item[1]
})
type RequestParams = any | undefined

const isMock = import.meta.env.VITE_APP_BUILD_MODE === 'true'

const requestServerName = isMock ? 'mock' : 'server'

export default {
    GetBaseMenu(params?:any) {
        return request({
            url: Url[requestServerName].menuAll,
            method: 'get',
            params
        })
    },
    AddBaseMenu(data) {
        return request({
            url: Url[requestServerName].menuAdd,
            method: 'post',
            data
        })
    }
}