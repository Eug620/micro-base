import{u as a,o as e,S as l,L as u,T as t}from"./index.480c57b9.js";/* empty css              *//* empty css              */import{i as s}from"./typed.8fe96a35.js";import{d as n,f as o,x as d,V as r,w as i,$ as v,a0 as c,a1 as f,a2 as b,a3 as m,o as h,c as p,a as y,b as _,a4 as g,k,u as w,F as x,m as V,g as j,a5 as C,a6 as T,a7 as U,a8 as I,q as H,s as L,a9 as S,aa as $}from"./acro-design.b1aa7bba.js";import"./lowdb.b41c9ad3.js";import"./lodash.74753a6d.js";const E={class:"h-full pl-2.5 dashboard-container"},P=j("span",{class:"dashboard-container-title"},null,-1),R=j("br",null,null,-1),q={key:0,class:"fa-regular fa-snowflake"},O={key:1,class:"fa-solid fa-clover"},z={key:2,class:"fa-solid fa-fan"},A=j("i",{class:"fa-solid fa-ban"},null,-1),D={key:0,class:"fa-solid fa-sun"},F={key:1,class:"fa-solid fa-moon"},G=j("h3",{class:"animate__animated animate__slideInRight"},[j("i",{class:"fa fa-heart mb-4"})],-1),K=j("h3",null,[j("i",{class:"fas fa-spinner mb-4"})],-1),M=j("h3",{class:"animate__animated animate__slideInRight"},[j("i",{class:"fal fa-spinner mb-4"})],-1),W=["src","onClick"],X={class:"h-1/6 text-center animate__animated animate__fadeIn"},Y=j("div",{class:"absolute bottom-3 left-0 text-center w-full dashboard-beian"},[j("a",{href:"https://beian.miit.gov.cn"},"豫ICP备2023002857")],-1),B=n({setup(n){const B=a();let J=o(""),N=o(""),Q=o(null),Z=o(null);const aa=o(!1),ea=()=>{Q.value=new s(".dashboard-container-title",{strings:[J.value],typeSpeed:60,cursorChar:" /",shuffle:!0,onStringTyped:function(){clearTimeout(Z.value),Z.value=setTimeout((()=>{Q.value.destroy(),la()}),9e3)}})},la=()=>{try{fetch("https://api.vvhan.com/api/ian?type=json").then((async a=>{let e=await a.json();J.value=e.data.vhan,N.value=e.data.source,ea()}))}catch(a){}};d((()=>{la()})),e((()=>{var a;aa.value=!0,clearTimeout(Z.value),null==(a=Q.value)||a.destroy()})),r((()=>{aa.value&&(ea(),aa.value=!1)}));const ua=o([]),ta=o(1);fetch("https://api.vvhan.com/api/douban").then((async a=>{const e=await a.json();ua.value=e.data}));const sa=o({}),na=o([{label:"白羊座",value:"aries"},{label:"金牛座",value:"taurus"},{label:"双子座",value:"gemini"},{label:"巨蟹座",value:"cancer"},{label:"狮子座",value:"leo"},{label:"处女座",value:"virgo"},{label:"天秤座",value:"libra"},{label:"天蝎座",value:"scorpio"},{label:"射手座",value:"sagittarius"},{label:"摩羯座",value:"capricorn"},{label:"水瓶座",value:"aquarius"},{label:"双鱼座",value:"pisces"}]),oa=o([{label:"今天",value:"today"},{label:"明天",value:"nextday"},{label:"本周",value:"week"},{label:"今年",value:"year"},{label:"❤️",value:"love"}]),da=o("leo"),ra=o("today"),ia=o([]);return i((()=>(async()=>{var a,e,l,u,t,s;try{let n=await fetch(`https://api.vvhan.com/api/horoscope?type=${da.value}&time=${ra.value}`);const o=await n.json();o.success&&(sa.value=Object.assign(sa.value,o.data),ia.value=Object.assign([],[{label:"更新时间",value:sa.value.time},{label:"综合运势",value:sa.value.fortune.all},{label:"爱情运势",value:sa.value.fortune.love},{label:"学业工作",value:sa.value.fortune.work},{label:"财富运势",value:sa.value.fortune.money},{label:"健康指数",value:null==(e=null==(a=sa.value)?void 0:a.index)?void 0:e.health},{label:"商谈指数",value:null==(u=null==(l=sa.value)?void 0:l.index)?void 0:u.discuss},{label:"幸运颜色",value:sa.value.luckycolor},{label:"幸运数字",value:sa.value.luckynumber},{label:"速配星座",value:sa.value.luckyconstellation},{label:"短评",value:sa.value.shortcomment},{label:"综合运势",value:null==(s=null==(t=sa.value)?void 0:t.fortunetext)?void 0:s.all},{label:"爱情运势",value:sa.value.fortunetext.love},{label:"学业工作",value:sa.value.fortunetext.work},{label:"财富运势",value:sa.value.fortunetext.money},{label:"健康运势",value:sa.value.fortunetext.health}]))}catch(n){}})())),(a,e)=>{const s=C,n=T,o=v,d=U,r=c,i=S,J=f,Q=$,Z=b,aa=m,ea=I;return h(),p("div",E,[y(ea,{gutter:10},{default:_((()=>[y(n,{span:16},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card mb-2.5"},{title:_((()=>[g(k(w(N)||"Welcome"),1)])),default:_((()=>[P,R])),_:1})])),_:1}),y(n,{span:8},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card mb-2.5 text-center"},{default:_((()=>[y(r,{wrap:"",align:"center",size:"large"},{default:_((()=>[y(d,{type:"button",modelValue:w(B).specialEfficiency,"onUpdate:modelValue":e[0]||(e[0]=a=>w(B).specialEfficiency=a),onChange:w(B).setSpecialEfficiency},{default:_((()=>[(h(!0),p(x,null,V(w(l),(a=>(h(),H(o,{value:a,key:a},{default:_((()=>[a===w(l).XH?(h(),p("i",q)):L("",!0),a===w(l).YH?(h(),p("i",O)):L("",!0),a===w(l).MH?(h(),p("i",z)):L("",!0)])),_:2},1032,["value"])))),128)),y(o,{value:!1},{default:_((()=>[A])),_:1})])),_:1},8,["modelValue","onChange"]),y(d,{type:"button",modelValue:w(B).lang,"onUpdate:modelValue":e[1]||(e[1]=a=>w(B).lang=a),onChange:w(B).setLang},{default:_((()=>[(h(!0),p(x,null,V(w(u),(a=>(h(),H(o,{value:a,key:a},{default:_((()=>[g(k(a.toLocaleUpperCase()),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onChange"]),y(d,{type:"button",modelValue:w(B).theme,"onUpdate:modelValue":e[2]||(e[2]=a=>w(B).theme=a),onChange:w(B).setTheme},{default:_((()=>[(h(!0),p(x,null,V(w(t),(a=>(h(),H(o,{value:a,key:a},{default:_((()=>[a===w(t).LIGHT?(h(),p("i",D)):L("",!0),a===w(t).DARK?(h(),p("i",F)):L("",!0)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),y(n,{span:8},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card mb-2.5"},{default:_((()=>[G,K,M,j("h3",null,k(a.$t("message.hello")),1)])),_:1})])),_:1}),y(n,{span:8},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card mb-2.5"},{default:_((()=>[y(J,{current:ta.value,"onUpdate:current":e[3]||(e[3]=a=>ta.value=a),"indicator-position":"outer","animation-name":"card",class:"w-full h-5/6","auto-play":!0,"indicator-type":"dot","show-arrow":"hover"},{default:_((()=>[(h(!0),p(x,null,V(ua.value,(a=>(h(),H(i,{class:"cursor-pointer",key:a.title},{default:_((()=>{var e;return[j("img",{src:null==(e=null==a?void 0:a.info)?void 0:e.imgurl,class:"h-full m-auto",onClick:e=>(a=>{var e;window.open(null==(e=null==a?void 0:a.info)?void 0:e.url)})(a)},null,8,W)]})),_:2},1024)))),128))])),_:1},8,["current"]),j("div",X,k(ua.value[ta.value-1]&&ua.value[ta.value-1].title),1)])),_:1})])),_:1}),y(n,{span:8},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card mb-2.5"})])),_:1}),y(n,{span:8},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card"})])),_:1}),y(n,{span:16},{default:_((()=>[y(s,{bordered:!1,class:"dashboard-container-card"},{title:_((()=>[y(r,{fill:"",align:"center"},{default:_((()=>[y(Z,{placeholder:"Please select ...",modelValue:da.value,"onUpdate:modelValue":e[4]||(e[4]=a=>da.value=a)},{default:_((()=>[(h(!0),p(x,null,V(na.value,(a=>(h(),H(Q,{value:a.value,key:a.value},{default:_((()=>[g(k(a.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),y(Z,{placeholder:"Please select ...",modelValue:ra.value,"onUpdate:modelValue":e[5]||(e[5]=a=>ra.value=a)},{default:_((()=>[(h(!0),p(x,null,V(oa.value,(a=>(h(),H(Q,{value:a.value,key:a.value},{default:_((()=>[g(k(a.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),default:_((()=>[y(aa,{class:"h-3/4 w-full overflow-scroll",data:ia.value,fill:"",column:"1"},null,8,["data"])])),_:1})])),_:1})])),_:1}),Y])}}});export{B as default};
