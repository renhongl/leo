"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5976],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||u;return t?r.createElement(h,a(a({ref:n},s),{},{components:t})):r.createElement(h,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=t.length,a=new Array(u);a[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<u;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6409:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),i=t(3366),u=(t(7294),t(3905)),a=["components"],l={title:"\u961f\u5217/Queue",tags:["\u6570\u636e\u7ed3\u6784"]},o=void 0,c={unversionedId:"\u6570\u636e\u7ed3\u6784/a3",id:"\u6570\u636e\u7ed3\u6784/a3",title:"\u961f\u5217/Queue",description:"\u63cf\u8ff0",source:"@site/docs/\u6570\u636e\u7ed3\u6784/a3.md",sourceDirName:"\u6570\u636e\u7ed3\u6784",slug:"/\u6570\u636e\u7ed3\u6784/a3",permalink:"/pomelo/docs/\u6570\u636e\u7ed3\u6784/a3",tags:[{label:"\u6570\u636e\u7ed3\u6784",permalink:"/pomelo/docs/tags/\u6570\u636e\u7ed3\u6784"}],version:"current",frontMatter:{title:"\u961f\u5217/Queue",tags:["\u6570\u636e\u7ed3\u6784"]},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8868/Linked List",permalink:"/pomelo/docs/\u6570\u636e\u7ed3\u6784/a2"},next:{title:"\u6808/Stack",permalink:"/pomelo/docs/\u6570\u636e\u7ed3\u6784/a4"}},s={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5b9e\u73b0\u63a5\u53e3",id:"\u5b9e\u73b0\u63a5\u53e3",level:2},{value:"\u94fe\u5f0f\u5b58\u50a8\u4f8b\u5b50",id:"\u94fe\u5f0f\u5b58\u50a8\u4f8b\u5b50",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u961f\u5217\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7ebf\u6027\u8868\uff0c\u7279\u6b8a\u4e4b\u5904\u5728\u4e8e\u5b83\u53ea\u5141\u8bb8\u5728\u8868\u7684\u524d\u7aef\uff08front\uff09\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\uff0c\u800c\u5728\u8868\u7684\u540e\u7aef\uff08rear\uff09\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\uff0c\u548c\u6808\u4e00\u6837\uff0c\u961f\u5217\u662f\u4e00\u79cd\u64cd\u4f5c\u53d7\u9650\u5236\u7684\u7ebf\u6027\u8868\u3002\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\u7684\u7aef\u79f0\u4e3a\u961f\u5c3e\uff0c\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\u7684\u7aef\u79f0\u4e3a\u961f\u5934\u3002")),(0,u.kt)("h2",{id:"\u5b9e\u73b0\u63a5\u53e3"},"\u5b9e\u73b0\u63a5\u53e3"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5728\u5934\u90e8\u53d6\u51fa",(0,u.kt)("inlineCode",{parentName:"li"},"shift()")),(0,u.kt)("li",{parentName:"ul"},"\u5728\u5c3e\u90e8\u63d2\u5165",(0,u.kt)("inlineCode",{parentName:"li"},"append(value)"))),(0,u.kt)("h2",{id:"\u94fe\u5f0f\u5b58\u50a8\u4f8b\u5b50"},"\u94fe\u5f0f\u5b58\u50a8\u4f8b\u5b50"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"class Node {\n    constructor(value) {\n        this._value = value;\n        this.next = null;\n    }\n\n    getValue() {\n        return this._value;\n    }\n}\n\nclass LinkedList {\n    constructor() {\n        this._head = null;\n        this._size = 0;\n    }\n\n    getSize() {\n        return this._size;\n    }\n\n    toString() {\n        if (this._head === null) {\n            return '';\n        }\n        let result = '';\n        let curr = this._head;\n        while (curr !== null) {\n            result += curr.getValue() + ', ';\n            curr = curr.next;\n        }\n        return result;\n    }\n\n    append(value) {\n        if (this._head === null) {\n            this._head = new Node(value);\n            this._size++;\n            return;\n        }\n        let curr = this._head;\n        while (curr) {\n            if (curr.next === null) {\n                curr.next = new Node(value);\n                this._size++;\n            }\n            curr = curr.next;\n        }\n    }\n\n    shift() {\n        if (this._size === 0) {\n            return null;\n        }\n        let head = this._head;\n        this._head = head.next;\n        this._size--;\n        return head.getValue();\n    }\n\n    getItem(index) {\n        if (this._size === 0) {\n            return null;\n        }\n        if (index < 0 || index >= this._size) {\n            return console.log('Index out of range');\n        }\n        if (index === 0) {\n            return this._head.getValue();\n        }\n        let curr = this._head;\n        for (let i = 0; i < index; i++) {\n            curr = curr.next;\n        }\n        return curr.getValue();\n    }\n}\n")))}f.isMDXComponent=!0}}]);