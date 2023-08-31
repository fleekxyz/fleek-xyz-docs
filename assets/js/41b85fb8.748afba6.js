"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={draft:!1,title:"Projects",sidebarCollapsible:!1,sidebar_position:8,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz(opens in a new tab). Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},c=void 0,i={unversionedId:"SDK/projects",id:"SDK/projects",title:"Projects",description:"Welcome to the documentation for the beta of Fleek.xyz(opens in a new tab). Whether you are an expert or an absolute beginner, you'll find your answers here.",source:"@site/docs/SDK/projects.md",sourceDirName:"SDK",slug:"/SDK/projects",permalink:"/docs/SDK/projects",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:8,frontMatter:{draft:!1,title:"Projects",sidebarCollapsible:!1,sidebar_position:8,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz(opens in a new tab). Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"IPFS",permalink:"/docs/SDK/ipfs"},next:{title:"ENS",permalink:"/docs/Domains/ens"}},s={},l=[{value:"Create a project",id:"create-a-project",level:3},{value:"List projects",id:"list-projects",level:3},{value:"Get project",id:"get-project",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some services, such as ",(0,a.kt)("strong",{parentName:"p"},"IPFS storage")," & ",(0,a.kt)("strong",{parentName:"p"},"IPNS")," will require you to authenticate with a ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId")," to interact with them. You can use the SDK to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectId")," required to use the services that need it."),(0,a.kt)("h3",{id:"create-a-project"},"Create a project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"const projectId = await fleekSdk.projects().create({ name: 'My Project' });\n")),(0,a.kt)("h3",{id:"list-projects"},"List projects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"const projects = await fleekSdk.projects().list();\n")),(0,a.kt)("p",null,"This returns a list of projects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"[\n    { id: 'cldn4lfcy0002lg0835mekajd', name: 'fleek' },\n    { id: 'cdawndf4fladfcfa2wnay8s25', name: 'My Project' },\n]\n")),(0,a.kt)("h3",{id:"get-project"},"Get project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"copy",copy:!0},"const project = await fleekSdk.projects().get({ id: 'clfk15m6p0002l608gvtp9gm5' })\n")),(0,a.kt)("p",null,"This returns a the project details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{ id: 'clfk15m6p0002l608gvtp9gm5', name: 'My Project' } \n")))}u.isMDXComponent=!0}}]);