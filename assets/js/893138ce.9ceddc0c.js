"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5666],{3412:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var a=n(7855),i=n(7294),r="home_fPeY",o=n(4996),c="header_SjuS",l="left_nZJx",s="item_Ce0g",m="time_fCSR";function u(e){return Number(e)<10?"0"+e:e}function d(){var e=new Date;return u(e.getHours())+":"+u(e.getMinutes())}function p(){var e=(0,i.useState)(d()),t=e[0],n=e[1];return(0,i.useEffect)((function(){var e=setInterval((function(){n(d())}),1e3);return function(){clearInterval(e)}}),[]),i.createElement("section",{className:m},t)}function g(){return i.createElement("section",{className:c},i.createElement("div",{className:l},i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px"}},"cloudbuild"),i.createElement("span",{className:s},"\u641c\u7d22"),i.createElement("span",{className:s},"\u6d4f\u89c8\u5668")),i.createElement("div",{className:l},i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px",paddingRight:"10px",cursor:"pointer"}},"search"),i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px",paddingRight:"10px",cursor:"pointer"}},"person"),i.createElement(p,{className:s})))}var f="docker_tQou",v="itemWrap_AJ4g",h="item_Z_xi",E="opened_sQr6",k="smallDocker_rcbD";function w(e){var t=e.data,n=void 0===t?[]:t,a=e.toggleWin,r=e.showDocker,c=e.setShowDocker;return i.createElement("section",{className:r?f:k,onClick:function(){return!r&&c(!0)}},n.map((function(e){return i.createElement("div",{className:v},e.mat?i.createElement("div",{className:h,name:e.name,key:e.id,onClick:function(){return a(e.id)}},i.createElement("span",{class:"material-symbols-outlined"},e.icon)):i.createElement("div",{name:e.name,onClick:function(){return a(e.id)},key:e.id,className:h,style:{backgroundImage:"url("+(0,o.Z)("/img/"+e.icon)+")"}}),e.opened?i.createElement("span",{className:E}):null)})))}var N="winWrap_MZ03",_="win_xPEc",b="winContent_x06Z",y="winTit_pTpQ",S="red_LKqS",x="winText_pJDl",C=(n(3935),n(1193)),W=n.n(C),Z=n(1706);function D(e){var t=e.data,n=void 0===t?{}:t,a=e.toggleWin,r=e.toggleActive;return i.createElement("div",{className:n.active?N:""},i.createElement(W(),{axis:"both",handle:"#win",defaultPosition:{x:50,y:50},position:null,scale:1},i.createElement(Z.ResizableBox,{width:800,height:600,minConstraints:[100,100],maxConstraints:[1/0,1/0]},i.createElement("section",{className:_},i.createElement("div",{id:"win",className:y,onClick:function(){return r(n.id)}},i.createElement("span",{onClick:function(){return a(n.id)},className:S,style:{backgroundImage:"url("+(0,o.Z)("/desktop/close-hover.svg")+")"}}),i.createElement("span",{className:x},n.name)),i.createElement("div",{className:b},i.createElement("iframe",{width:"100%",height:"100%",src:n.path,frameBorder:"0"}))))))}var A="apps_V847",I="appWrap_JYly",z="app_Ikcm",J="name_n6x6";function R(e){var t=e.data,n=e.toggleWin,a=e.setShowApps;return i.createElement("section",{className:I},t.mat?i.createElement("div",{className:z,name:t.name,key:t.id,onClick:function(){n(t.id),a(!1)}},i.createElement("span",{class:"material-symbols-outlined"},t.icon)):i.createElement("div",{name:t.name,onClick:function(){n(t.id),a(!1)},key:t.id,className:z,style:{backgroundImage:"url("+(0,o.Z)("/img/"+t.icon)+")"}}),i.createElement("span",{className:J},t.name))}function M(e){var t=e.data,n=e.toggleWin,a=e.setShowApps;return i.createElement("section",{className:A},t.map((function(e){return i.createElement(R,{data:e,toggleWin:n,setShowApps:a})})))}var P=[{id:"win0",name:"\u6240\u6709\u5e94\u7528",path:"/leo",icon:"home",opened:!1,active:!1,mat:!0},{id:"win1",name:"\u524d\u7aef\u5c0f\u7ad9",path:"/leo",icon:"language",opened:!1,active:!1,mat:!0},{id:"win2",name:"Markdown Editor",path:"https://renhongl.github.io/markdown-editor/",icon:"border_color",opened:!1,active:!1,mat:!0},{id:"win3",name:"Code Online",path:"https://renhongl.github.io/code-online/#/",icon:"code",opened:!1,mat:!0},{id:"win4",name:"\u9690\u85cf\u4efb\u52a1\u680f",path:"/leo",icon:"keyboard_hide",opened:!1,redirct:!0,mat:!0},{id:"win5",name:"\u9000\u51fa\u684c\u9762\u6a21\u5f0f",path:"/leo",icon:"logout",opened:!1,redirct:!0,mat:!0}];function Q(){var e=(0,i.useState)(P),t=e[0],n=e[1],c=(0,i.useState)(!1),l=c[0],s=c[1],m=(0,i.useState)(!0),u=m[0],d=m[1];function p(e){return"win0"===e?s(!0):"win4"===e?d(!1):void n((function(t){for(var n,i=[].concat(t),r=(0,a.Z)(i);!(n=r()).done;){var o=n.value;if(o.id===e){if(o.redirct)return location=o.path;o.opened=!o.opened,o.opened&&f(e);break}}return i}))}function f(e){n((function(t){for(var n,i=[].concat(t),r=(0,a.Z)(i);!(n=r()).done;){var o=n.value;o.id===e?o.active=!0:o.active=!1}return i}))}return i.createElement("section",{style:{backgroundImage:"url("+(0,o.Z)("/desktop/home-bg.jpg")+")"},className:r},l?i.createElement(M,{data:t,toggleWin:p,setShowApps:s}):null,i.createElement(g,null),i.createElement(w,{data:t,toggleWin:p,showDocker:u,setShowDocker:d}),t.filter((function(e){return e.opened})).map((function(e){return i.createElement(D,{key:e.id,data:e,toggleWin:p,toggleActive:f})})))}}}]);