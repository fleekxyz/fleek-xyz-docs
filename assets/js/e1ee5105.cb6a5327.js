"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8428],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={draft:!1,title:"Release notes v0.0.3",sidebarCollapsible:!1,sidebar_position:6,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},i=void 0,l={unversionedId:"release-notes-0.0.3",id:"release-notes-0.0.3",title:"Release notes v0.0.3",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",source:"@site/release-notes/release-notes-0.0.3.md",sourceDirName:".",slug:"/release-notes-0.0.3",permalink:"/release-notes/release-notes-0.0.3",draft:!1,editUrl:"https://github.com/fleekxyz/fleek-xyz-docs/release-notes/release-notes-0.0.3.md",tags:[{label:"Accounts",permalink:"/release-notes/tags/accounts"},{label:"Guide",permalink:"/release-notes/tags/guide"},{label:"Learn",permalink:"/release-notes/tags/learn"},{label:"Fleek",permalink:"/release-notes/tags/fleek"}],version:"current",lastUpdatedAt:1700507468,formattedLastUpdatedAt:"Nov 20, 2023",sidebarPosition:6,frontMatter:{draft:!1,title:"Release notes v0.0.3",sidebarCollapsible:!1,sidebar_position:6,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Accounts","Guide","Learn","Fleek"]},sidebar:"defaultSidebar",previous:{title:"Release notes v0.0.2",permalink:"/release-notes/release-notes-0.0.2"}},s={},c=[{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Backoffice &amp; Monitoring",id:"backoffice--monitoring",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the changelog, we are introducing another improvement to our closed alpha release of Fleek.xyz. This release we are focusing on all the delete flows and improving the general experience around sites and storage."),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New Delete Project flow"),(0,o.kt)("li",{parentName:"ul"},"New Delete Site flow"),(0,o.kt)("li",{parentName:"ul"},"New Delete Gateway flow")),(0,o.kt)("h3",{id:"improvements"},"Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Correctly handling the cancellation state for deployments."),(0,o.kt)("li",{parentName:"ul"},"Mapping the error that occurs when the Git repository fails to be cloned correctly."),(0,o.kt)("li",{parentName:"ul"},"Added a tooltip for the Docker image field in the site creation and build settings flow."),(0,o.kt)("li",{parentName:"ul"},"Added a new dropdown to select the type of storage for the project."),(0,o.kt)("li",{parentName:"ul"},"Added a 'Vary' cache header in the pull zones to improve protection against cache poisoning."),(0,o.kt)("li",{parentName:"ul"},"Added the option to add a new GitHub account in the account dropdown."),(0,o.kt)("li",{parentName:"ul"},"Disabled the redeploy button during the first deployment of a site."),(0,o.kt)("li",{parentName:"ul"},"Unified the site overview and deploy overview to avoid inconsistencies in the UI."),(0,o.kt)("li",{parentName:"ul"},"Added the availability check for ENS within projects.")),(0,o.kt)("h3",{id:"fixes"},"Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed an error where site builds were stuck due to an invalid Docker image."),(0,o.kt)("li",{parentName:"ul"},"Fixed a typo in the ENS creation modal."),(0,o.kt)("li",{parentName:"ul"},"Fixed an error where files with special characters in their names were showing a 401 error on the PGW."),(0,o.kt)("li",{parentName:"ul"},"Fixed an error where users were stuck in the UI because their auth provider cookie had been removed."),(0,o.kt)("li",{parentName:"ul"},'Unified the text for "View Site" and "Visit Site" across the platform.')),(0,o.kt)("h3",{id:"backoffice--monitoring"},"Backoffice & Monitoring"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added the deployment ID in the BO to improve customer support")))}d.isMDXComponent=!0}}]);