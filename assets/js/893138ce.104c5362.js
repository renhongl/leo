"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5666],{3412:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var a=t(7855),i=t(7294),r="home_fPeY",c=t(4996),o="header_SjuS",l="time_fCSR";function s(e){return Number(e)<10?"0"+e:e}function m(){var e=new Date;return s(e.getHours())+":"+s(e.getMinutes())}function u(){var e=(0,i.useState)(m()),n=e[0],t=e[1];return(0,i.useEffect)((function(){var e=setInterval((function(){t(m())}),1e3);return function(){clearInterval(e)}}),[]),i.createElement("section",{className:l},n)}function d(){return i.createElement("section",{className:o},i.createElement(u,null))}var p="docker_tQou",g="itemWrap_AJ4g",f="item_Z_xi",v="opened_sQr6";function h(e){var n=e.data,t=void 0===n?[]:n,a=e.toggleWin;return i.createElement("section",{className:p},t.map((function(e){return i.createElement("div",{className:g},e.mat?i.createElement("div",{className:f,name:e.name,key:e.id,onClick:function(){return a(e.id)}},i.createElement("span",{class:"material-symbols-outlined"},e.icon)):i.createElement("div",{name:e.name,onClick:function(){return a(e.id)},key:e.id,className:f,style:{backgroundImage:"url("+(0,c.Z)("/img/"+e.icon)+")"}}),e.opened?i.createElement("span",{className:v}):null)})))}var E="winWrap_MZ03",k="win_xPEc",w="winContent_x06Z",N="winTit_pTpQ",_="red_LKqS",b="winText_pJDl",y=(t(3935),t(1193)),C=t.n(y),S=t(1706);function W(e){var n=e.data,t=void 0===n?{}:n,a=e.toggleWin,r=e.toggleActive;return i.createElement("div",{className:t.active?E:""},i.createElement(C(),{axis:"both",handle:"#win",defaultPosition:{x:50,y:50},position:null,scale:1},i.createElement(S.ResizableBox,{width:800,height:600,minConstraints:[100,100],maxConstraints:[1/0,1/0]},i.createElement("section",{className:k},i.createElement("div",{id:"win",className:N,onClick:function(){return r(t.id)}},i.createElement("span",{onClick:function(){return a(t.id)},className:_,style:{backgroundImage:"url("+(0,c.Z)("/desktop/close-hover.svg")+")"}}),i.createElement("span",{className:b},t.name)),i.createElement("div",{className:w},i.createElement("iframe",{width:"100%",height:"100%",src:t.path,frameBorder:"0"}))))))}var x="apps_V847",Z="appWrap_JYly",A="app_Ikcm",I="name_n6x6";function J(e){var n=e.data,t=e.toggleWin,a=e.setShowApps;return i.createElement("section",{className:Z},n.mat?i.createElement("div",{className:A,name:n.name,key:n.id,onClick:function(){t(n.id),a(!1)}},i.createElement("span",{class:"material-symbols-outlined"},n.icon)):i.createElement("div",{name:n.name,onClick:function(){t(n.id),a(!1)},key:n.id,className:A,style:{backgroundImage:"url("+(0,c.Z)("/img/"+n.icon)+")"}}),i.createElement("span",{className:I},n.name))}function M(e){var n=e.data,t=e.toggleWin,a=e.setShowApps;return i.createElement("section",{className:x},n.map((function(e){return i.createElement(J,{data:e,toggleWin:t,setShowApps:a})})))}var P=[{id:"win0",name:"\u6240\u6709\u5e94\u7528",path:"/leo",icon:"home",opened:!1,active:!1,mat:!0},{id:"win1",name:"\u524d\u7aef\u5c0f\u7ad9",path:"/leo",icon:"language",opened:!1,active:!1,mat:!0},{id:"win2",name:"Markdown Editor",path:"https://renhongl.github.io/markdown-editor/",icon:"border_color",opened:!1,active:!1,mat:!0},{id:"win3",name:"Code Online",path:"https://renhongl.github.io/code-online/#/",icon:"code",opened:!1,mat:!0},{id:"win4",name:"\u9000\u51fa\u684c\u9762\u6a21\u5f0f",path:"/leo",icon:"logout",opened:!1,redirct:!0,mat:!0}];function Q(){var e=(0,i.useState)(P),n=e[0],t=e[1],o=(0,i.useState)(!1),l=o[0],s=o[1];function m(e){if("win0"===e)return s(!0);t((function(n){for(var t,i=[].concat(n),r=(0,a.Z)(i);!(t=r()).done;){var c=t.value;if(c.id===e){if(c.redirct)return location=c.path;c.opened=!c.opened,c.opened&&u(e);break}}return i}))}function u(e){t((function(n){for(var t,i=[].concat(n),r=(0,a.Z)(i);!(t=r()).done;){var c=t.value;c.id===e?c.active=!0:c.active=!1}return i}))}return i.createElement("section",{style:{backgroundImage:"url("+(0,c.Z)("/home/home-bg.jpg")+")"},className:r},l?i.createElement(M,{data:n,toggleWin:m,setShowApps:s}):null,i.createElement(d,null),i.createElement(h,{data:n,toggleWin:m}),n.filter((function(e){return e.opened})).map((function(e){return i.createElement(W,{key:e.id,data:e,toggleWin:m,toggleActive:u})})))}}}]);