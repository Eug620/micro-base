import{d as p,r as h,w as v,a as i,o as g,c as y,b as u,e as l,f as d,F as C,u as E,g as b,h as w,m as L,i as P,j as x}from"./vendor.2bb8db13.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};O();const D={class:"menu-con"},A=u("i",{class:"el-icon-menu"},null,-1),R=u("span",{slot:"title"},"react17",-1),V=u("i",{class:"el-icon-setting"},null,-1),k=u("span",{slot:"title"},"vue3",-1),N={class:"router-con"},S=p({setup(s){const r=h("/react16/"),{currentRoute:c}=E();return v(c,(t,e)=>{r.value=c.value.fullPath}),(t,e)=>{const o=i("el-menu-item"),n=i("el-menu"),a=i("router-view");return g(),y(C,null,[u("div",D,[l(n,{class:"el-menu-vertical-demo",router:!0,"default-active":r.value},{default:d(()=>[l(o,{index:"/react17/"},{default:d(()=>[A,R]),_:1}),l(o,{index:"/vue3/"},{default:d(()=>[V,k]),_:1})]),_:1},8,["default-active"])]),u("div",N,[l(a)])],64)}}});const $="modulepreload",m={},I="/",f=function(r,c){return!c||c.length===0?r():Promise.all(c.map(t=>{if(t=`${I}${t}`,t in m)return;m[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":$,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((a,_)=>{n.addEventListener("load",a),n.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())};console.log("/","!!!");const j=[{path:"/",redirect:"/vue3/"},{path:"/react17/:page*",name:"react17",component:()=>f(()=>import("./react17.7f107e1d.js"),["assets/react17.7f107e1d.js","assets/vendor.2bb8db13.js"])},{path:"/vue3/:page*",name:"vue3",component:()=>f(()=>import("./vue3.2f5527f4.js"),["assets/vue3.2f5527f4.js","assets/vendor.2bb8db13.js"])}],B=b({history:w("/micro-app/"),routes:j});L.start({lifeCycles:{created(){console.log("created \u5168\u5C40\u76D1\u542C")},beforemount(){console.log("beforemount \u5168\u5C40\u76D1\u542C")},mounted(){console.log("mounted \u5168\u5C40\u76D1\u542C")},unmount(){console.log("unmount \u5168\u5C40\u76D1\u542C")},error(){console.log("error \u5168\u5C40\u76D1\u542C")}},plugins:{modules:{react17:[{loader(s,r){return s}}],vue3:[{loader(s){return s}}]}},fetch(s,r,c){if(console.log(s,r,c),s==="http://localhost:3001/error.js")return Promise.resolve("");let t=null;return s==="http://localhost:3001/micro-app/react16/"&&(t={headers:{"custom-head":"custom-head"}}),fetch(s,Object.assign(r,t)).then(e=>e.text())}});P(S).use(B).use(x).mount("#app");
