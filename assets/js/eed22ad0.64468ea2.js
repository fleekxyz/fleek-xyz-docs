"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,f=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={draft:!1,title:"Personal Access Tokens (PAT)",sidebarCollapsible:!1,sidebar_position:2,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Personal Access Tokens","Guide","Learn","Fleek"]},c=void 0,s={unversionedId:"Accounts/pat",id:"Accounts/pat",title:"Personal Access Tokens (PAT)",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",source:"@site/docs/Accounts/pat.md",sourceDirName:"Accounts",slug:"/Accounts/pat",permalink:"/docs/Accounts/pat",draft:!1,tags:[{label:"Accounts",permalink:"/docs/tags/accounts"},{label:"Personal Access Tokens",permalink:"/docs/tags/personal-access-tokens"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,title:"Personal Access Tokens (PAT)",sidebarCollapsible:!1,sidebar_position:2,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Personal Access Tokens","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Accounts",permalink:"/docs/Accounts/"},next:{title:"Gateways",permalink:"/docs/Gateways/"}},i={},l=[{value:"Create a PAT",id:"create-a-pat",level:2},{value:"Delete a PAT",id:"delete-a-pat",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Personal Access Tokens are used to authenticate with Fleek's services. You can create as many tokens as you need, and you can delete them at any time."),(0,a.kt)("h2",{id:"create-a-pat"},"Create a PAT"),(0,a.kt)("p",null,"To create a PAT, go to your ",(0,a.kt)("a",{parentName:"p",href:"https://app.fleek.co/settings"},"Account Settings")," and click on the ",(0,a.kt)("strong",{parentName:"p"},"Personal Access Tokens")," tab. You can create a new one by indicating a name to identify it and clicking on ",(0,a.kt)("strong",{parentName:"p"},"Create"),". You will be prompted to confirm the creation by completing the authentication process and will recieve a token that you can use to authenticate with Fleek's services."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ensure that you diligently copy and store your PAT (Personal Access Token) in a safe and secure manner. It's crucial to understand that the value of this token will be revealed only once, and if lost, might not be retrievable. Taking precautionary measures now can prevent potential complications or security breaches in the future.")),(0,a.kt)("h2",{id:"delete-a-pat"},"Delete a PAT"),(0,a.kt)("p",null,"To delete a PAT, go to your ",(0,a.kt)("a",{parentName:"p",href:"https://app.fleek.co/settings"},"Account Settings")," and click on the ",(0,a.kt)("strong",{parentName:"p"},"Personal Access Tokens")," tab. You can delete a token by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Delete")," button next to the token you want to delete. Once deleted all resources using the PAT will stop working."))}p.isMDXComponent=!0}}]);