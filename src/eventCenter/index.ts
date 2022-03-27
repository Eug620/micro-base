import microApp,{ EventCenterForMicroApp } from '@micro-zoe/micro-app'

// micro-vue 事件注册
const useEventCenterForMicroVue = ():void => {
    window.eventCenterForMicroVue = new EventCenterForMicroApp('chat')
    function eventMicroVue (data:any):void {
        console.log('来自子应用chat的数据', data)
        const { callback } = data
        callback()
    }
    microApp.addDataListener('chat', eventMicroVue, false)
}


export default function useEventCenter() {
    useEventCenterForMicroVue()
}