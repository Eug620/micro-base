import{d as e,g as t,c as s,i as a,_ as i,o as n,a as l,n as o,b as r,e as d,M as c,q as u,X as p,y as v,F as m,k as f,G as y,H as $,v as b,u as g,h}from"./index.9bb9cf38.js";import{g as z,c as x}from"./index.6950976f.js";const S=e({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const i=t("icon");return{cls:s((()=>[i,`${i}-loading`,{[`${i}-spin`]:e.spin}])),sizeStyle:s((()=>{if(e.size)return{fontSize:a(e.size)?`${e.size}px`:e.size}}))}}}),k=["stroke-width","stroke-linecap","stroke-linejoin"],B=[d("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1)];var C=i(S,[["render",function(e,t,s,a,i,d){return n(),l("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:o(e.cls),style:r(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},B,14,k)}]]);const j=Object.assign(C,{install:(e,t)=>{var s;const a=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(a+C.name,C)}});var w=i(e({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup:()=>({prefixCls:t("icon-hover")})}),[["render",function(e,t,s,a,i,r){return n(),l("span",{class:o([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:"medium"!==e.size,[`${e.prefixCls}-disabled`]:e.disabled}])},[c(e.$slots,"default")],2)}]]);const M=Symbol("ArcoFormItemContext"),A=Symbol("ArcoFormContext"),G=({size:e,disabled:t,error:a,uninject:i}={})=>{const n=i?{}:u(M,{}),l=s((()=>{var t;return null!=(t=null==e?void 0:e.value)?t:n.size})),o=s((()=>(null==t?void 0:t.value)||n.disabled)),r=s((()=>(null==a?void 0:a.value)||n.error)),d=p(n,"feedback"),c=p(n,"eventHandlers");return{formItemCtx:n,mergedSize:l,mergedDisabled:o,mergedError:r,feedback:d,eventHandlers:c}};var L=e({name:"DotLoading",props:{size:{type:Number}},setup(e){const s=t("dot-loading");return()=>{const t=e.size?{width:`${e.size}px`,height:`${e.size}px`}:{};return v("div",{class:s,style:{width:e.size?7*e.size+"px":void 0,height:e.size?`${e.size}px`:void 0}},[Array(5).fill(1).map(((e,a)=>v("div",{class:`${s}-item`,key:a,style:t},null)))])}}}),I=e({name:"Spin",props:{size:{type:Number},loading:Boolean,dot:Boolean,tip:String},setup(e,{slots:a,attrs:i}){const n=t("spin"),l=s((()=>[n,{[`${n}-loading`]:e.loading,[`${n}-with-tip`]:e.tip&&!a.default}])),o=()=>{if(a.icon){const e=z(a.icon());if(e)return f(e,{spin:!0})}return a.element?a.element():e.dot?v(L,{size:e.size},null):v(j,{spin:!0},null)},r=()=>{const t=e.size?{fontSize:`${e.size}px`}:void 0;return v(m,null,[v("div",{class:`${n}-icon`,style:t},[o()]),e.tip&&v("div",{class:`${n}-tip`},[e.tip])])};return()=>v("div",{class:l.value},[a.default?v(m,null,[a.default(),e.loading&&v("div",{class:`${n}-mask`},[v("div",{class:`${n}-mask-icon`},[r()])])]):r()])}});const O=Object.assign(I,{install:(e,t)=>{y(e,t);const s=$(t);e.component(s+I.name,I)}}),H=Symbol("ArcoCard"),N=["medium","small"];var F=e({name:"Card",components:{Spin:O},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:e=>N.includes(e)},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:a}){const i=t("card"),n=e=>{const t=x(e);return v("div",{class:`${i}-actions`},[v("div",{class:`${i}-actions-right`},[t.map(((e,t)=>v("span",{key:`action-${t}`,class:`${i}-actions-item`},[e])))])])},l=b({hasMeta:!1,hasGrid:!1,slots:a,renderActions:n});g(H,l);const o=s((()=>[i,`${i}-size-${e.size}`,{[`${i}-loading`]:e.loading,[`${i}-bordered`]:e.bordered,[`${i}-hoverable`]:e.hoverable,[`${i}-contain-grid`]:l.hasGrid}]));return()=>{var t,s,r,d,c,u,p;const m=Boolean(null!=(t=a.title)?t:e.title),f=Boolean(null!=(s=a.extra)?s:e.extra);return v("div",{class:o.value},[(m||f)&&v("div",{class:[`${i}-header`,{[`${i}-header-no-title`]:!m}],style:e.headerStyle},[m&&v("div",{class:`${i}-header-title`},[null!=(d=null==(r=a.title)?void 0:r.call(a))?d:e.title]),f&&v("div",{class:`${i}-header-extra`},[null!=(u=null==(c=a.extra)?void 0:c.call(a))?u:e.extra])]),a.cover&&v("div",{class:`${i}-cover`},[a.cover()]),v("div",{class:`${i}-body`,style:e.bodyStyle},[e.loading?v(O,null,null):null==(p=a.default)?void 0:p.call(a),a.actions&&!l.hasMeta&&n(a.actions())])])}}}),q=e({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:s}){const a=t("card-meta"),i=u(H);return h((()=>{i&&(i.hasMeta=!0)})),()=>{var t,n,l,o,r,d;const c=Boolean(null!=(t=s.title)?t:e.title),u=Boolean(null!=(n=s.description)?n:e.description);return v("div",{class:a},[(c||u)&&v("div",{class:`${a}-content`},[c&&v("div",{class:`${a}-title`},[null!=(o=null==(l=s.title)?void 0:l.call(s))?o:e.title]),u&&v("div",{class:`${a}-description`},[null!=(d=null==(r=s.description)?void 0:r.call(s))?d:e.description])]),(s.avatar||(null==i?void 0:i.slots.actions))&&v("div",{class:[`${a}-footer `,{[`${a}-footer-only-actions`]:!s.avatar}]},[s.avatar&&v("div",{class:`${a}-avatar`},[s.avatar()]),i&&i.slots.actions&&i.renderActions(i.slots.actions())])])}}});var D=i(e({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const a=t("card-grid"),i=u(H);h((()=>{i&&(i.hasGrid=!0)}));return{cls:s((()=>[a,{[`${a}-hoverable`]:e.hoverable}]))}}}),[["render",function(e,t,s,a,i,r){return n(),l("div",{class:o(e.cls)},[c(e.$slots,"default")],2)}]]);const W=Object.assign(F,{Meta:q,Grid:D,install:(e,t)=>{y(e,t);const s=$(t);e.component(s+F.name,F),e.component(s+q.name,q),e.component(s+D.name,D)}});export{W as C,w as I,j as a,M as b,A as f,G as u};