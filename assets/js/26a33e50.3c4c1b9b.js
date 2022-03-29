"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[432],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=a(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,u(u({ref:t},s),{},{components:n})):r.createElement(d,u({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],c={title:"\u5feb\u901f\u6392\u5e8f/Quick Sort",tags:["\u6392\u5e8f"]},l=void 0,a={unversionedId:"\u6392\u5e8f/quick-sort",id:"\u6392\u5e8f/quick-sort",title:"\u5feb\u901f\u6392\u5e8f/Quick Sort",description:"\u4ee3\u7801",source:"@site/docs/\u6392\u5e8f/quick-sort.md",sourceDirName:"\u6392\u5e8f",slug:"/\u6392\u5e8f/quick-sort",permalink:"/pomelo/docs/\u6392\u5e8f/quick-sort",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6392\u5e8f/quick-sort.md",tags:[{label:"\u6392\u5e8f",permalink:"/pomelo/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{title:"\u5feb\u901f\u6392\u5e8f/Quick Sort",tags:["\u6392\u5e8f"]},sidebar:"tutorialSidebar",previous:{title:"\u5f52\u5e76\u6392\u5e8f/Merge Sort",permalink:"/pomelo/docs/\u6392\u5e8f/merge-sort"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/pomelo/docs/data-model"}},s={},p=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f",id:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst quickSort = (nums) => {\n\n  if (nums.length <= 1) {\n    return nums;\n  }\n\n  let mid = nums[0];\n  let left = [];\n  let right = [];\n\n  for (let i = 1, len = nums.length; i < len; i++) {\n    if (nums[i] < mid) {\n      left.push(nums[i]);\n    } else {\n      right.push(nums[i]);\n    }\n  }\n\n  return quickSort(left).concat([mid], quickSort(right));\n}\n\nconsole.log(quickSort([4, 7, 32, 6, 21, 10, 11]));\n\n")),(0,i.kt)("h2",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,i.kt)("p",null,"O(logn)"),(0,i.kt)("h2",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),(0,i.kt)("p",null,"O(nlogn)"),(0,i.kt)("h2",{id:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f"},"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f"),(0,i.kt)("p",null,"\u5426"))}m.isMDXComponent=!0}}]);