/*
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 17:15:54
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-25 17:55:32
 * @FilePath: /micro-base/src/api/menu/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/plugin/axios'
import { cloneDeep } from 'lodash'

const Url = {
    'server': {
        'userLogin': '/user/login',
        'userAll': '/user/all',
    }
}

/// mock
const o = cloneDeep(Url.server)
Url['mock'] = {}
Object.entries(o).forEach(item => {
    Url['mock'][item[0]] = '/mock' + item[1]
})

const isMock = import.meta.env.VITE_APP_BUILD_MODE === 'true'

const requestServerName = isMock ? 'mock' : 'server'

export default {
    GetUserAll(params: any | undefined) {
        return request({
            url: Url[requestServerName].userAll,
            method: 'get',
            params
        })
    },
    UserLogin(data) {
        return request({
            url: Url[requestServerName].userLogin,
            method: 'post',
            data
        })
    }
}
