import{u as a,o as e,L as l,T as t}from"./index.694a5289.js";/* empty css              */import{i as s}from"./typed.8fe96a35.js";import{d as o,f as u,x as n,V as d,$ as r,a0 as i,o as m,q as c,b as f,a as p,u as h,c as v,m as b,F as y,g,a1 as j,a2 as C,a3 as T,k as V,s as x}from"./acro-design.af443125.js";import"./lowdb.b41c9ad3.js";import"./lodash.74753a6d.js";const _={key:0,class:"fa-solid fa-sun"},k={key:1,class:"fa-solid fa-moon"},w=g("span",{class:"dashboard-title"},null,-1),L=g("div",{class:"absolute bottom-3 left-0 text-center w-full dashboard-beian"},[g("a",{href:"https://beian.miit.gov.cn"},"豫ICP备2023002857")],-1),U=o({setup(o){const g=a();let U=u(""),I=u(null),S=u(null);const q=u(!1),A=()=>{I.value=new s(".dashboard-title",{strings:[U.value],typeSpeed:60,cursorChar:" /",shuffle:!0,onStringTyped:function(){clearTimeout(S.value),S.value=setTimeout((()=>{I.value.destroy(),D()}),9e3)}})},D=()=>{try{fetch("https://api.vvhan.com/api/ian?type=json").then((async a=>{let e=await a.json();U.value=e.data.vhan,A()}))}catch(a){}};return n((()=>{D()})),e((()=>{q.value=!0,clearTimeout(S.value),I.value.destroy()})),d((()=>{q.value&&(A(),q.value=!1)})),(a,e)=>{const s=r,o=j,u=i,n=C;return m(),c(n,{title:"Welcome",class:"ml-2.5 h-full relative dashboard",bordered:!1},{extra:f((()=>[p(u,null,{default:f((()=>[p(o,{type:"button",modelValue:h(g).lang,"onUpdate:modelValue":e[0]||(e[0]=a=>h(g).lang=a),onChange:h(g).setLang},{default:f((()=>[(m(!0),v(y,null,b(h(l),(a=>(m(),c(s,{value:a,key:a},{default:f((()=>[T(V(a.toLocaleUpperCase()),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onChange"]),p(o,{type:"button",modelValue:h(g).theme,"onUpdate:modelValue":e[1]||(e[1]=a=>h(g).theme=a),onChange:h(g).setTheme},{default:f((()=>[(m(!0),v(y,null,b(h(t),(a=>(m(),c(s,{value:a,key:a},{default:f((()=>[a===h(t).LIGHT?(m(),v("i",_)):x("",!0),a===h(t).DARK?(m(),v("i",k)):x("",!0)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),default:f((()=>[w,L])),_:1})}}});export{U as default};
