"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={draft:!1,title:"Release notes Alpha 2",sidebarCollapsible:!1,sidebar_position:3,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},l=void 0,i={unversionedId:"release-notes-alpha-2",id:"release-notes-alpha-2",title:"Release notes Alpha 2",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",source:"@site/release-notes/release-notes-alpha-2.md",sourceDirName:".",slug:"/release-notes-alpha-2",permalink:"/release-notes/release-notes-alpha-2",draft:!1,editUrl:"https://github.com/fleekxyz/fleek-xyz-docs/release-notes/release-notes-alpha-2.md",tags:[{label:"Accounts",permalink:"/release-notes/tags/accounts"},{label:"Guide",permalink:"/release-notes/tags/guide"},{label:"Learn",permalink:"/release-notes/tags/learn"},{label:"Fleek",permalink:"/release-notes/tags/fleek"}],version:"current",lastUpdatedAt:1697106339,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:3,frontMatter:{draft:!1,title:"Release notes Alpha 2",sidebarCollapsible:!1,sidebar_position:3,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"defaultSidebar",previous:{title:"Release notes Alpha 1",permalink:"/release-notes/release-notes-alpha-1"},next:{title:"Release notes v0.0.1",permalink:"/release-notes/release-notes-0.0.1"}},s={},p=[{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In release notes we are introducing the first improvement to our closed alpha release of the Fleek.xyz. We are applying the first batch of feedbacks provided by our alpha testers and we have many more to come in the following days"),(0,a.kt)("h3",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Templates now render the repository Read.Me as a description"),(0,a.kt)("li",{parentName:"ul"},"Dark Mode is default now")),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed site breadcrumbs to remove 304 redirect errors while navigating"),(0,a.kt)("li",{parentName:"ul"},"The flow to accept an invite without having a Fleek account has been now implemented"),(0,a.kt)("li",{parentName:"ul"},"When logged out and visiting the templates page, if the user logins it now redirects them this section after doing so"),(0,a.kt)("li",{parentName:"ul"},"Added 150-character-max to Environment variables in sites"),(0,a.kt)("li",{parentName:"ul"},"Removed the redeploy option from self-managed deployment sites"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"Go to Docs")," button typo after CLI login"),(0,a.kt)("li",{parentName:"ul"},"Improved image caching and loading across the app"),(0,a.kt)("li",{parentName:"ul"},"Fixed issue with Fleek logo glitching on Templates pages"),(0,a.kt)("li",{parentName:"ul"},"Added extra information in the gateway for users to understand how to access their files"),(0,a.kt)("li",{parentName:"ul"},"Added a 1GB per file/folder maximum size validation in storage UI"),(0,a.kt)("li",{parentName:"ul"},"Fixed issue where a project\u2019s Github app configurations were persisted even when changing projects")))}u.isMDXComponent=!0}}]);