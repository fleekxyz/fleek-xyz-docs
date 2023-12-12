"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[6982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={draft:!1,title:"Migrating from Fleek.co",sidebarCollapsible:!1,sidebar_position:1,date:new Date("2023-01-10T09:00:00.000Z"),description:"Discover the phased sunsetting of Fleek.co and the launch of the new Fleek.xyz App.",category:"Documentation",keywords:["introduction","documentation","getting started"],tags:["Storage","Sites","Guide","Learn","Fleek"]},i=void 0,l={unversionedId:"Migration/index",id:"Migration/index",title:"Migrating from Fleek.co",description:"Discover the phased sunsetting of Fleek.co and the launch of the new Fleek.xyz App.",source:"@site/docs/Migration/index.md",sourceDirName:"Migration",slug:"/Migration/",permalink:"/docs/Migration/",draft:!1,tags:[{label:"Storage",permalink:"/docs/tags/storage"},{label:"Sites",permalink:"/docs/tags/sites"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek",permalink:"/docs/tags/fleek"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,title:"Migrating from Fleek.co",sidebarCollapsible:!1,sidebar_position:1,date:"2023-01-10T09:00:00.000Z",description:"Discover the phased sunsetting of Fleek.co and the launch of the new Fleek.xyz App.",category:"Documentation",keywords:["introduction","documentation","getting started"],tags:["Storage","Sites","Guide","Learn","Fleek"]},sidebar:"default",previous:{title:"Home | Fleek Docs",permalink:"/docs/"},next:{title:"Preparation Details",permalink:"/docs/Migration/preparation"}},s={},p=[{value:"Road to Sunsetting",id:"road-to-sunsetting",level:2},{value:"Phases",id:"phases",level:3},{value:"CLI/SDK Test Phase (Completed)",id:"clisdk-test-phase-completed",level:3},{value:"Alpha release of the App/platform (Current)",id:"alpha-release-of-the-appplatform-current",level:3},{value:"Release Fleek Platform V1",id:"release-fleek-platform-v1",level:3},{value:"Sunsetting of Fleek.co",id:"sunsetting-of-fleekco",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Update (08/31/23): This doc has been updated to better reflect the state of the road to sunsetting, and to include the Alpha release.")),(0,a.kt)("h2",{id:"road-to-sunsetting"},"Road to Sunsetting"),(0,a.kt)("p",null,"As we continue developing the new Fleek Platform we wanted to share more information about what the process of shutting down our legacy Fleek.co platform will look like."),(0,a.kt)("h3",{id:"phases"},"Phases"),(0,a.kt)("p",null,"To be more organized we are separating the road towards sunsetting the old platform in different sequential phases that help us to ensure that the migration is up to our standards and every user has a fantastic experience leading into the new platform."),(0,a.kt)("h3",{id:"clisdk-test-phase-completed"},"CLI/SDK Test Phase (Completed)"),(0,a.kt)("p",null,"In this stage, users can interact in a very limited capacity with our SDK and CLI, to store files in IPFS, deploy their sites, and configure custom domains on top of it."),(0,a.kt)("h3",{id:"alpha-release-of-the-appplatform-current"},"Alpha release of the App/platform (Current)"),(0,a.kt)("p",null,"The next phase involves releasing the alpha new platform, which will allow us to test the new UI, and to show the capabilities of the platform in a closed environment. During this phase, we will be collecting feedback actively and setting the groundwork for customer support moving forward."),(0,a.kt)("p",null,"While we test the stability of the platform, collect feedback, and optimize the UI flows, we will be focusing on finishing the features that are needed to achieve feature parity between Fleek.co & Fleek.xyz. Additionally, in this period we will develop the migration flow for users."),(0,a.kt)("h3",{id:"release-fleek-platform-v1"},"Release Fleek Platform V1"),(0,a.kt)("p",null,"Once all of the above is achieved we will be releasing to the public what we will know as Fleek Platform V1, the first stable version that will run in parallel with the old platform. At this phase, we will be stopping signups on Fleek.co and offering all the user's migration tools to request to move all their relevant data to Fleek.xyz."),(0,a.kt)("h3",{id:"sunsetting-of-fleekco"},"Sunsetting of Fleek.co"),(0,a.kt)("p",null,"After a prudent time of co-existence between the platforms and when the goals of these processes are met we will be shutting down Fleek.co and automatically migrate the missing users that didn't request it."))}d.isMDXComponent=!0}}]);