import{r as e,o as t,c as r,N as o,a as n,b as s,E as a,m as c,d as i}from"./vendor.69d0d158.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var l=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r};var d=l({},[["render",function(o,n){const s=e("router-view");return t(),r(s)}]]);const u={},p=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in u)return;u[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()};o.configure({showSpinner:!1,easing:"linear",speed:1e3,minimum:.2,trickle:!1,trickleSpeed:800});const m=[{path:"/",name:"layout",component:()=>p((()=>import("./index.02c89868.js")),["assets/index.02c89868.js","assets/vendor.69d0d158.js"]),redirect:"/test",children:[{path:"/developer/:page*",name:"developer",component:()=>p((()=>import("./developer.303aefbc.js")),["assets/developer.303aefbc.js","assets/vendor.69d0d158.js"])},{path:"/chat/:page*",name:"chat",component:()=>p((()=>import("./chat.5a5b8a13.js")),["assets/chat.5a5b8a13.js","assets/vendor.69d0d158.js"])},{path:"/test",name:"test",component:()=>p((()=>import("./test.53bb50a7.js")),["assets/test.53bb50a7.js","assets/vendor.69d0d158.js"])}]},{path:"/:pathMatch(.*)*",component:()=>p((()=>import("./index.ea881128.js")),["assets/index.ea881128.js","assets/vendor.69d0d158.js"])}],h=n({history:s("/base/"),routes:m});h.beforeEach((async(e,t,r)=>{o.isStarted()||o.start(),r()})),h.afterEach((e=>{o.done()}));c.start({lifeCycles:{created(){},beforemount(){},mounted(){},unmount(){},error(){}},plugins:{modules:{chat:[{loader:e=>e}],developer:[{loader:e=>e}]}},fetch(e,t,r){if("http://localhost:3001/error.js"===e)return Promise.resolve("");let o=null;return"http://localhost:3001/base/react16/"===e&&(o={headers:{"custom-head":"custom-head"}}),fetch(e,Object.assign(t,o)).then((e=>e.text()))}}),window.eventCenterForMicroVue=new a("chat"),c.addDataListener("chat",(function(e){const{callback:t}=e;t()}),!1),i(d).use(h).mount("#app");export{l as _};
