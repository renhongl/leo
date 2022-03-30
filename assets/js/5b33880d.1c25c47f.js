"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[696],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=["components"],c={title:"\u8ba1\u6570\u6392\u5e8f/Count Sort",tags:["\u6392\u5e8f"]},i=void 0,l={unversionedId:"\u6392\u5e8f/a9",id:"\u6392\u5e8f/a9",title:"\u8ba1\u6570\u6392\u5e8f/Count Sort",description:"\u8ba1\u6570\u6392\u5e8f",source:"@site/docs/\u6392\u5e8f/a9.md",sourceDirName:"\u6392\u5e8f",slug:"/\u6392\u5e8f/a9",permalink:"/pomelo/docs/\u6392\u5e8f/a9",tags:[{label:"\u6392\u5e8f",permalink:"/pomelo/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{title:"\u8ba1\u6570\u6392\u5e8f/Count Sort",tags:["\u6392\u5e8f"]},sidebar:"tutorialSidebar",previous:{title:"\u5e0c\u5c14\u6392\u5e8f/Shell Sort",permalink:"/pomelo/docs/\u6392\u5e8f/a8"},next:{title:"\u6570\u636e\u7ed3\u6784/Data Structure",permalink:"/pomelo/docs/data-structure"}},p={},s=[{value:"\u8ba1\u6570\u6392\u5e8f",id:"\u8ba1\u6570\u6392\u5e8f",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8ba1\u6570\u6392\u5e8f"},"\u8ba1\u6570\u6392\u5e8f"),(0,a.kt)("p",null,"\u8ba1\u6570\u6392\u5e8f\uff08Count Sort\uff09\u662f\u4e00\u79cd\u4e0d\u57fa\u4e8e\u6bd4\u8f83\u7684\u6392\u5e8f\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8ba1\u6570\u6392\u5e8f\u7684\u601d\u8def\u662f\u8fd9\u6837\u7684\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u5f85\u6392\u5e8f\u5143\u7d20 a\uff0c\u5982\u679c\u77e5\u9053\u4e86\u5f85\u6392\u5e8f\u6570\u7ec4\u4e2d\u6709\u591a\u5c11\u4e2a\u6bd4\u5b83\u5c0f\u7684\u6570\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u76f4\u63a5\u77e5\u9053\u5728\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u4e2d a \u5e94\u8be5\u5728\u4ec0\u4e48\u4f4d\u7f6e\u4e0a\u3002\u6bd4\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u6570\u7ec4\u4e2d\u6709 3 \u4e2a\u6570\u662f\u6bd4 a \u5c0f\u7684\uff0c\u90a3\u4e48\uff0c\u5728\u6392\u5e8f\u540e\u7684\u6570\u7ec4\u91cc\uff0ca \u5fc5\u7136\u4f1a\u51fa\u73b0\u5728\u7b2c 4 \u4f4d\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u95ee\u9898\u8f6c\u5316\u6210\uff0c\u5bf9\u4e8e\u5f85\u6392\u5e8f\u6570\u7ec4\u91cc\u7684\u4e00\u4e2a\u6570\uff0c\u5982\u4f55\u80fd\u5feb\u901f\u77e5\u9053\u6bd4\u5b83\u5c0f\u7684\u6570\u5b57\u6709\u591a\u5c11\u4e2a\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528\u6bd4\u8f83\u7684\u529e\u6cd5\uff0c\u90a3\u6837\u65f6\u95f4\u590d\u6742\u5ea6\u662f\u65e0\u6cd5\u964d\u4e0b\u6765\uff0c\u53ea\u6709\u6362\u4e00\u4e2a\u601d\u8def\uff0c\u4ee5\u7a7a\u95f4\u6362\u65f6\u95f4\u3002\u56e0\u4e3a n \u4e2a\u6570\u7684\u53d6\u503c\u8303\u56f4\u662f 0~n\uff0c\u6240\u4ee5\uff0c\u4e0d\u59a8\u4f7f\u7528\u4e00\u4e2a\u5927\u5c0f\u4e3a n \u7684\u6570\u7ec4\u6765\u7edf\u8ba1\u4ece 0 \u5230 n\uff0c\u6bcf\u4e2a\u6570\u5728\u5f85\u6392\u5e8f\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\u3002\u8fd9\u4e2a\u6570\u7ec4\u7c7b\u4f3c\u4e8e\u76f4\u65b9\u56fe\u6570\u7ec4\uff0c\u56e0\u4e3a\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u88ab\u79f0\u505a\u662f\u57fa\u4e8e\u7edf\u8ba1\u7684\u6392\u5e8f\u3002\u76f4\u65b9\u56fe\u7edf\u8ba1\u7684\u601d\u8def\u7b80\u5355\u6e05\u6670\uff0c\u5728\u5f88\u591a\u9898\u76ee\u4e2d\u90fd\u4f1a\u6709\u51fa\u73b0\uff0c\u4e00\u5b9a\u8981\u719f\u7ec3\u638c\u63e1\u8fd9\u79cd\u6280\u5de7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u8ba1\u6570\u6392\u5e8f\n */\nexport const countingSort = (arr, maxValue) => {\n    let bucket = new Array(maxValue + 1);\n    let sortedIndex = 0;\n    let arrLen = arr.length;\n    let bucketLen = maxValue + 1;\n\n    for (let i = 0; i < arrLen; i++) {\n        if (!bucket[arr[i]]) {\n            bucket[arr[i]] = 0;\n        }\n        bucket[arr[i]]++;\n    }\n\n    for (let j = 0; j < bucketLen; j++) {\n        while (bucket[j] > 0) {\n            arr[sortedIndex++] = j;\n            bucket[j]--;\n        }\n    }\n\n    return arr;\n}\n")))}m.isMDXComponent=!0}}]);