/*
 * @Author: eug yyh3531@163.com
 * @Date: 2022-08-25 18:18:31
 * @LastEditors: eug yyh3531@163.com
 * @LastEditTime: 2022-08-26 10:05:56
 * @FilePath: /micro-base/src/store/user/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { set } from 'nprogress';
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'UserStore',
    state: () => ({
        localName: 'micro-base-user',
        info: {},
        token: '',
    }),
    actions: {
        reloadData() {
            let database = localStorage.getItem(this.localName)
            if (database) {
                let { info, token } = JSON.parse(database)
                this.init(info, token)
            }
        },
        setData(info = {}, token = '') {
            localStorage.setItem(this.localName, JSON.stringify({ info, token }))
            this.reloadData()
        },
        delData() {
            localStorage.removeItem(this.localName)
            this.setData()
        },

        init(info, token) {
            console.log(info, token, '???');
            this.info = info
            this.token = token
        }
    },
    getters:{
        getToken(state) {
            return state.token
        },
        getInfo(state) {
            return state.info
        }
    }
});
