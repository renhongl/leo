"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5666],{3842:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(7855),i=n(7294),c="home_fPeY",r=n(4996),o="header_SjuS",s="left_nZJx",l="item_Ce0g",m="time_fCSR";function d(e){return Number(e)<10?"0"+e:e}function p(){var e=new Date;return d(e.getHours())+":"+d(e.getMinutes())}function u(){var e=(0,i.useState)(p()),t=e[0],n=e[1];return(0,i.useEffect)((function(){var e=setInterval((function(){n(p())}),1e3);return function(){clearInterval(e)}}),[]),i.createElement("section",{className:m},t)}function g(){return i.createElement("section",{className:o},i.createElement("div",{className:s},i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px"}},"cloudbuild"),i.createElement("span",{className:l},"\u641c\u7d22"),i.createElement("span",{className:l},"\u6d4f\u89c8\u5668")),i.createElement("div",{className:s},i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px",paddingRight:"10px",cursor:"pointer"}},"search"),i.createElement("span",{className:"material-symbols-outlined",style:{fontSize:"16px",paddingRight:"10px",cursor:"pointer"}},"person"),i.createElement(u,{className:l})))}var f="docker_tQou",v="itemWrap_AJ4g",h="itemTemp_SFPr",E="item_Z_xi",w="opened_sQr6",N="smallDocker_rcbD";function _(e){var t=e.data,n=void 0===t?[]:t,a=e.toggleWin,c=e.showDocker,o=e.setShowDocker;return i.createElement("section",{className:c?f:N,onClick:function(){return!c&&o(!0)}},n.map((function(e){return i.createElement("div",{className:v,key:e.id},e.mat?i.createElement("div",{className:e.temp?h:E,name:e.name,onClick:function(){return a(e.id)}},i.createElement("span",{className:"material-symbols-outlined"},e.icon)):i.createElement("div",{name:e.name,onClick:function(){return a(e.id)},className:e.temp?h:E,style:{backgroundImage:"url("+(0,r.Z)("/img/"+e.icon)+")"}}),e.opened?i.createElement("span",{className:w}):null)})))}var k="winWrap_MZ03",b="win_xPEc",y="winContent_x06Z",S="winTit_pTpQ",C="red_LKqS",B="yellow_PLAM",x="gray_Amli",W="winText_pJDl",Z=(n(3935),n(1193)),A=n.n(Z),D=n(1706);function I(e){var t=e.data,n=void 0===t?{}:t,a=e.toggleWin,c=e.toggleActive;return i.createElement("div",{className:n.active?k:""},i.createElement(A(),{axis:"both",handle:"#win",defaultPosition:{x:400,y:50},position:null,scale:1},i.createElement(D.ResizableBox,{width:800,height:600,minConstraints:[100,100],maxConstraints:[1/0,1/0]},i.createElement("section",{className:b},i.createElement("div",{id:"win",className:S,onClick:function(){return c(n.id)}},i.createElement("span",{onClick:function(){return a(n.id)},className:C}),i.createElement("span",{className:B}),i.createElement("span",{className:x}),i.createElement("span",{className:W},n.name)),i.createElement("div",{className:y},n.app?n.app:i.createElement("iframe",{width:"100%",height:"100%",src:n.path,frameBorder:"0"}))))))}var M="apps_V847",P="appWrap_JYly",R="app_Ikcm",T="name_n6x6";function z(e){var t=e.data,n=e.toggleWin,a=e.setShowApps;return i.createElement("section",{className:P},t.mat?i.createElement("div",{className:R,name:t.name,key:t.id,onClick:function(){n(t.id),a(!1)}},i.createElement("span",{className:"material-symbols-outlined"},t.icon)):i.createElement("div",{name:t.name,onClick:function(){n(t.id),a(!1)},key:t.id,className:R,style:{backgroundImage:"url("+(0,r.Z)("/img/"+t.icon)+")"}}),i.createElement("span",{className:T},t.name))}function J(e){var t=e.data,n=e.toggleWin,a=e.setShowApps;return i.createElement("section",{className:M},t.map((function(e){return i.createElement(z,{data:e,toggleWin:n,setShowApps:a})})))}var O="settingsCon_SDai",Q="settingsWrap_RlCZ",j="settings_vTCe",H="name_frHU",L={img:"img_AthO"},Y=[{path:"b0.svg"},{path:"b1.svg"},{path:"b2.svg"},{path:"b3.svg"},{path:"b4.svg"},{path:"b5.svg"}];function q(e){var t=e.setBg;return i.createElement("section",{className:L.theme},Y.map((function(e){return i.createElement("img",{className:L.img,src:(0,r.Z)("/desktop/"+e.path),onClick:function(){return t(e.path)}})})))}function F(e){var t=e.setBg,n=e.addWin,a=(0,i.useState)(),c=(a[0],a[1],[{id:"win0000",name:"\u4e3b\u9898",path:"/leo",icon:"dark_mode",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win1111",name:"\u4efb\u52a1\u680f",path:"/leo",icon:"grid_view",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win2222",name:"\u901a\u7528",path:"/leo",icon:"settings_suggest",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win3333",name:"\u8bed\u8a00",path:"/leo",icon:"language",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win0000423",name:"\u4e3b\u9898",path:"/leo",icon:"dark_mode",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win1111534",name:"\u4efb\u52a1\u680f",path:"/leo",icon:"grid_view",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win22224534",name:"\u901a\u7528",path:"/leo",icon:"settings_suggest",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win333345dfasdf34",name:"\u8bed\u8a00",path:"/leo",icon:"language",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win111153dfasdf4",name:"\u4efb\u52a1\u680f",path:"/leo",icon:"grid_view",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"win2222453fasdfad4",name:"\u901a\u7528",path:"/leo",icon:"settings_suggest",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})},{id:"fdsdfadsf",name:"\u8bed\u8a00",path:"/leo",icon:"language",opened:!1,active:!1,mat:!0,app:i.createElement(q,{setBg:t})}]);return i.createElement("section",{className:O},c.map((function(e){return i.createElement("div",{className:Q,key:e.id,onClick:function(){return n(Object.assign({},e,{id:Math.random(),opened:!0,active:!0,temp:!0}))}},i.createElement("div",{className:j},i.createElement("span",{className:"material-symbols-outlined"},e.icon)),i.createElement("span",{className:H},e.name))})))}function K(){var e=(0,i.useState)(!1),t=e[0],n=e[1],o=(0,i.useState)(!0),s=o[0],l=o[1],m=(0,i.useState)("b0.svg"),d=m[0],p=m[1],u=[{id:"win0",name:"\u6240\u6709\u5e94\u7528",path:"/leo",icon:"home",opened:!1,active:!1,mat:!0},{id:"win10",name:"\u8bbe\u7f6e",path:"/leo",icon:"settings",opened:!1,active:!1,mat:!0,app:i.createElement(F,{setBg:p,addWin:function(e){console.log(e),h((function(t){return[].concat(t,[e])}))}})},{id:"win1",name:"\u524d\u7aef\u5c0f\u7ad9",path:"/leo",icon:"language",opened:!1,active:!1,mat:!0},{id:"win2",name:"Markdown Editor",path:"https://renhongl.github.io/markdown-editor/",icon:"border_color",opened:!1,active:!1,mat:!0},{id:"win3",name:"Code Online",path:"https://renhongl.github.io/code-online/#/",icon:"code",opened:!1,mat:!0},{id:"win4",name:"\u9690\u85cf\u4efb\u52a1\u680f",path:"/leo",icon:"keyboard_hide",opened:!1,redirct:!0,mat:!0},{id:"win5",name:"\u9000\u51fa\u684c\u9762\u6a21\u5f0f",path:"/leo",icon:"logout",opened:!1,redirct:!0,mat:!0}],f=(0,i.useState)(u),v=f[0],h=f[1];function E(e){if("win0"===e)return n(!0);if("win4"===e)return l(!1);var t=v.find((function(t){return t.id===e}));if(t.temp&&t.opened)return h((function(t){return t.filter((function(t){return t.id!==e}))}));h((function(t){for(var n,i=[].concat(t),c=(0,a.Z)(i);!(n=c()).done;){var r=n.value;if(r.id===e){if(r.redirct)return location=r.path;r.opened=!r.opened,r.opened&&w(e);break}}return i}))}function w(e){h((function(t){for(var n,i=[].concat(t),c=(0,a.Z)(i);!(n=c()).done;){var r=n.value;r.id===e?r.active=!0:r.active=!1}return i}))}return i.createElement("section",{style:{backgroundImage:"url("+(0,r.Z)("/desktop/"+d)+")"},className:c},t?i.createElement(J,{data:v,toggleWin:E,setShowApps:n}):null,i.createElement(g,null),i.createElement(_,{data:v,toggleWin:E,showDocker:s,setShowDocker:l}),v.filter((function(e){return e.opened})).map((function(e){return i.createElement(I,{key:e.id,data:e,toggleWin:E,toggleActive:w})})))}}}]);