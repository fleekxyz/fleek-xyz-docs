"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={draft:!1,title:"Changelog - March 11th, 2024",sidebarCollapsible:!1,sidebar_position:7,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for March 11th, 2024, find all the new features & updates of the Fleek Platform here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},l=void 0,i={unversionedId:"changelog-03-11-24",id:"changelog-03-11-24",title:"Changelog - March 11th, 2024",description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for March 11th, 2024, find all the new features & updates of the Fleek Platform here.",source:"@site/changelog/changelog-03-11-24.md",sourceDirName:".",slug:"/changelog-03-11-24",permalink:"/changelog/changelog-03-11-24",draft:!1,editUrl:"https://github.com/fleekxyz/fleek-xyz-docs/changelog/changelog-03-11-24.md",tags:[{label:"Accounts",permalink:"/changelog/tags/accounts"},{label:"Guide",permalink:"/changelog/tags/guide"},{label:"Learn",permalink:"/changelog/tags/learn"},{label:"Fleek",permalink:"/changelog/tags/fleek"}],version:"current",lastUpdatedAt:1710935714,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:7,frontMatter:{draft:!1,title:"Changelog - March 11th, 2024",sidebarCollapsible:!1,sidebar_position:7,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. This is the changelog for March 11th, 2024, find all the new features & updates of the Fleek Platform here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"defaultSidebar",previous:{title:"Changelog - January 22nd, 2024",permalink:"/changelog/changelog-22-01-24"}},c={},s=[{value:"New Features &amp; Improvements",id:"new-features--improvements",level:3},{value:"Fixes",id:"fixes",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"During February 2024, we've been working on a number of improvements and fixes to the Fleek platform. Here's a summary of the changes we've made:"),(0,r.kt)("h3",{id:"new-features--improvements"},"New Features & Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In-app images have better quality and reliability."),(0,r.kt)("li",{parentName:"ul"},"Default Edge rule for pull zones for enhanced phishing protection."),(0,r.kt)("li",{parentName:"ul"},"Application credentials creation can be done from the UI."),(0,r.kt)("li",{parentName:"ul"},"Simplified delete flows for sites and projects."),(0,r.kt)("li",{parentName:"ul"},"Removed unnecessary dot displayed on delete modal."),(0,r.kt)("li",{parentName:"ul"},"Enhanced deployment pipeline reducing cases where the deployment got stuck."),(0,r.kt)("li",{parentName:"ul"},"All accounts are created with default avatars."),(0,r.kt)("li",{parentName:"ul"},"ENS configuration modal now comes with the exact record to paste into the content hash."),(0,r.kt)("li",{parentName:"ul"},"New flow for self-managed deployment."),(0,r.kt)("li",{parentName:"ul"},"Username is pre-filled on account creation.")),(0,r.kt)("h3",{id:"fixes"},"Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ENS validation now takes into consideration the ",(0,r.kt)("inlineCode",{parentName:"li"},"IPFS://")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"IPNS://")," prefixes."),(0,r.kt)("li",{parentName:"ul"},"Environment variable names can be created with 150 characters in their name."),(0,r.kt)("li",{parentName:"ul"},'Adding a new domain on a PGW now shows the "Add CNAME Record" modal.'),(0,r.kt)("li",{parentName:"ul"},"ENS modal now displays the content hash in smaller screen resolutions.")))}d.isMDXComponent=!0}}]);