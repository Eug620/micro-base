import{u as e,S as u,L as t,T as a}from"./index.28c4ed7f.js";const l={key:0,class:"fa-regular fa-snowflake"},o={key:1,class:"fa-solid fa-clover"},n={key:2,class:"fa-solid fa-fan"},v=vue.createElementVNode("i",{class:"fa-solid fa-ban"},null,-1),r={key:0,class:"fa-solid fa-sun"},c={key:1,class:"fa-solid fa-moon"},d=vue.createElementVNode("span",{class:"dashboard-title"},null,-1),s=vue.createElementVNode("div",{class:"absolute bottom-3 left-0 text-center w-full dashboard-beian"},[vue.createElementVNode("a",{href:"https://beian.miit.gov.cn"},"豫ICP备2023002857")],-1),f=vue.defineComponent({setup(f){const i=e();let m=vue.ref(""),p=vue.ref(""),h=vue.ref(null),k=vue.ref(null);const C=vue.ref(!1),B=()=>{h.value=new Typed(".dashboard-title",{strings:[m.value],typeSpeed:60,cursorChar:" /",shuffle:!0,onStringTyped:function(){clearTimeout(k.value),k.value=setTimeout((()=>{h.value.destroy(),V()}),9e3)}})},V=()=>{try{fetch("https://api.vvhan.com/api/ian?type=json").then((async e=>{let u=await e.json();m.value=u.data.vhan,p.value=u.data.source,B()}))}catch(e){}};return vue.onMounted((()=>{V()})),vue,router.onBeforeRouteLeave((()=>{var e;C.value=!0,clearTimeout(k.value),null==(e=h.value)||e.destroy()})),vue.onActivated((()=>{C.value&&(B(),C.value=!1)})),(e,f)=>{const m=vue.resolveComponent("a-radio"),h=vue.resolveComponent("a-radio-group"),k=vue.resolveComponent("a-space"),C=vue.resolveComponent("a-card");return vue.openBlock(),vue.createBlock(C,{class:"ml-2.5 h-full relative dashboard",bordered:!1},{title:vue.withCtx((()=>[vue.createTextVNode(vue.toDisplayString(vue.unref(p)||"Welcome"),1)])),extra:vue.withCtx((()=>[vue.createVNode(k,null,{default:vue.withCtx((()=>[vue.createVNode(h,{type:"button",modelValue:vue.unref(i).specialEfficiency,"onUpdate:modelValue":f[0]||(f[0]=e=>vue.unref(i).specialEfficiency=e),onChange:vue.unref(i).setSpecialEfficiency},{default:vue.withCtx((()=>[(vue.openBlock(!0),vue.createElementBlock(vue.Fragment,null,vue.renderList(vue.unref(u),(e=>(vue.openBlock(),vue.createBlock(m,{value:e,key:e},{default:vue.withCtx((()=>[e===vue.unref(u).XH?(vue.openBlock(),vue.createElementBlock("i",l)):vue.createCommentVNode("",!0),e===vue.unref(u).YH?(vue.openBlock(),vue.createElementBlock("i",o)):vue.createCommentVNode("",!0),e===vue.unref(u).MH?(vue.openBlock(),vue.createElementBlock("i",n)):vue.createCommentVNode("",!0)])),_:2},1032,["value"])))),128)),vue.createVNode(m,{value:!1},{default:vue.withCtx((()=>[v])),_:1})])),_:1},8,["modelValue","onChange"]),vue.createVNode(h,{type:"button",modelValue:vue.unref(i).lang,"onUpdate:modelValue":f[1]||(f[1]=e=>vue.unref(i).lang=e),onChange:vue.unref(i).setLang},{default:vue.withCtx((()=>[(vue.openBlock(!0),vue.createElementBlock(vue.Fragment,null,vue.renderList(vue.unref(t),(e=>(vue.openBlock(),vue.createBlock(m,{value:e,key:e},{default:vue.withCtx((()=>[vue.createTextVNode(vue.toDisplayString(e.toLocaleUpperCase()),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onChange"]),vue.createVNode(h,{type:"button",modelValue:vue.unref(i).theme,"onUpdate:modelValue":f[2]||(f[2]=e=>vue.unref(i).theme=e),onChange:vue.unref(i).setTheme},{default:vue.withCtx((()=>[(vue.openBlock(!0),vue.createElementBlock(vue.Fragment,null,vue.renderList(vue.unref(a),(e=>(vue.openBlock(),vue.createBlock(m,{value:e,key:e},{default:vue.withCtx((()=>[e===vue.unref(a).LIGHT?(vue.openBlock(),vue.createElementBlock("i",r)):vue.createCommentVNode("",!0),e===vue.unref(a).DARK?(vue.openBlock(),vue.createElementBlock("i",c)):vue.createCommentVNode("",!0)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),default:vue.withCtx((()=>[d,s])),_:1})}}});export{f as default};
