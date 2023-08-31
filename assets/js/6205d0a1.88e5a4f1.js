"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=n,f=u["".concat(c,".").concat(y)]||u[y]||p[y]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={draft:!1,title:"Storage",sidebarCollapsible:!1,sidebar_position:2,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},i=void 0,l={unversionedId:"Storage/index",id:"Storage/index",title:"Storage",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",source:"@site/docs/Storage/index.md",sourceDirName:"Storage",slug:"/Storage/",permalink:"/docs/Storage/",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:2,frontMatter:{draft:!1,title:"Storage",sidebarCollapsible:!1,sidebar_position:2,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation for the beta of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here..",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Gateways",permalink:"/docs/Gateways/"},next:{title:"Projects",permalink:"/docs/Projects/"}},c={},s=[{value:"Introduction",id:"introduction",level:3},{value:"Add a File or Directory",id:"add-a-file-or-directory",level:3},{value:"Accessing a file or directory",id:"accessing-a-file-or-directory",level:3},{value:"Deleting a file or directory",id:"deleting-a-file-or-directory",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In Fleek we offer a storage service that you can use to store your files in a decentralized way. We support the following protocols:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IPFS"),(0,n.kt)("li",{parentName:"ul"},"Arweave"),(0,n.kt)("li",{parentName:"ul"},"Filecoin")),(0,n.kt)("p",null,"To guarantee the best performance and availability we use a combination of these protocols. We use IPFS as the main storage protocol and we use Arweave and Filecoin as a backup layer. This allows us to provide a high availability and performance service. By default we are using Filecoin as the backup layer but all the configuration can be changed in the storage settings."),(0,n.kt)("p",null,"Storage is a service unique for every project. This means that you can have different storage configurations for each project you have in Fleek."),(0,n.kt)("h3",{id:"add-a-file-or-directory"},"Add a File or Directory"),(0,n.kt)("p",null,"To add a file to your storage you first need to navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Files")," section in your project dashboard and click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Upload File")," button. This will open a modal where you can select one or multiple files to upload."),(0,n.kt)("p",null,"This will be uploaded to IPFS and in the background it will be uploading to Filecoin and/or Arweave depending on your configuration."),(0,n.kt)("p",null,"To add a directory simply select  the ",(0,n.kt)("inlineCode",{parentName:"p"},"Upload Directory")," button and select the directory you want to upload."),(0,n.kt)("h3",{id:"accessing-a-file-or-directory"},"Accessing a file or directory"),(0,n.kt)("p",null,"To access a file or directory you can click on the three dots icon in the file or directory row and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Copy URL")," option. This will copy the URL to your clipboard and you can use it to access the file or directory. By default Fleek will be using Public gateways to surface the content. If you want you can set up a custom domain to access the content that will allow you to have a more performant a branded experience."),(0,n.kt)("p",null,"To do this you can follow the steps in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/gateways"},"Gateways")," section."),(0,n.kt)("h3",{id:"deleting-a-file-or-directory"},"Deleting a file or directory"),(0,n.kt)("p",null,"To delete a file or directory you can click on the three dots icon in the file or directory row and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete")," option. This will remove the file or directory from your storage. This action is irreversible."))}u.isMDXComponent=!0}}]);