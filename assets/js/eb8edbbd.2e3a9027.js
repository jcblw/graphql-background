(self.webpackChunkfinch_docs=self.webpackChunkfinch_docs||[]).push([[703],{3129:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l},default:function(){return u}});var r=n(7560),o=n(8283),i=(n(2784),n(876)),s={id:"website-setup",title:"Website Setup",sidebar_label:"Setup website messaging"},a={unversionedId:"website-setup",id:"website-setup",isDocsHomePage:!1,title:"Website Setup",description:"External messaging",source:"@site/docs/website-setup.md",sourceDirName:".",slug:"/website-setup",permalink:"/finch-graphql/docs/website-setup",editUrl:"https://github.com/jointoucan/finch-graphql/edit/master/packages/finch-docs/docs/website-setup.md",version:"current",sidebar_label:"Setup website messaging",frontMatter:{id:"website-setup",title:"Website Setup",sidebar_label:"Setup website messaging"},sidebar:"someSidebar",previous:{title:"Client Setup",permalink:"/finch-graphql/docs/client-setup"},next:{title:"Finch GraphiQL Devtools",permalink:"/finch-graphql/docs/devtools"}},l=[{value:"External messaging",id:"external-messaging",children:[{value:"Setting up extension",id:"setting-up-extension",children:[]},{value:"Setting up website",id:"setting-up-website",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"external-messaging"},"External messaging"),(0,i.kt)("p",null,"External messaging is a way to allow a website to talk to your background process of the extension. Chrome ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/extensions/mv3/messaging/#external-webpage"},"direct external messaging")," where other browsers you need to setup the ability to pass messages between a website and the background process. Finch allows you to essentially make API calls to your background process."),(0,i.kt)("h3",{id:"setting-up-extension"},"Setting up extension"),(0,i.kt)("p",null,"If you are only supporting Chrome I would recommend add in ",(0,i.kt)("inlineCode",{parentName:"p"},"externally_connectable")," key into your manifest. This is the most direct and stable way to message Finch GraphQL from a website. Your manifest should look something like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "externally_connectable": {\n    "matches": ["https://yourwebsite.com/*"]\n  }\n  ...\n}\n')),(0,i.kt)("p",null,"If you are planning support more browsers you will need to setup a script that will proxy the messages to the background script. You can put this in your main ",(0,i.kt)("em",{parentName:"p"},"content")," script, but it is recommended that you make a custom content script to inject that only sets up this proxy."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The reason you would want to setup a different script to inject is because you would want to have better control to which site are able to communicate with the background script.")),(0,i.kt)("p",null,"To setup the proxy all you need to do is listen for documents events. Finch GraphQL has a helper method to do that."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { listenForDocumentQueries } from "finch-graphql";\n\nlistenForDocumentQueries();\n')),(0,i.kt)("p",null,"Then make sure this gets injected into the proper site that you want to communicate with. You can do this through the manifest file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "content_scripts": [{\n    "js": ["path/to/externalMessaging.js"],\n    "matches": ["https://yourwebsite.com/*"],\n    "run_at": "document_end"\n  }]\n  ...\n}\n')),(0,i.kt)("p",null,"Now you should be able to message to the background script from any browser."),(0,i.kt)("h3",{id:"setting-up-website"},"Setting up website"),(0,i.kt)("p",null,"Your website will need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"finch-graphql")," installed to be able to communicate with the extension. Once installed you can now create a client and query the extension."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You will need to know the ID of your extension, on all platforms, to be able to query the extension externally. You can get this info by running something like ",(0,i.kt)("inlineCode",{parentName:"p"},"browser.runtime.id"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { FinchClient } from "finch-graphql";\n\nconst queryDoc = `query test { foo }`;\nconst variables = {};\nconst client = new FinchClient({ id: "<your extension id>" });\n\nconst resp = await client.query(queryDoc, variables);\n')),(0,i.kt)("h4",{id:"usage-with-react"},"Usage with React"),(0,i.kt)("p",null,"When using the React hooks you need to be able to setup the ",(0,i.kt)("inlineCode",{parentName:"p"},"FinchProvider")," with the extension id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { FinchProvider, FinchClient } from "finch-graphql";\n\nconst client = new FinchClient({ id: "<your extension id>" });\n\nconst MyApp = () => {\n  return (\n    <FinchProvider client={client}>\n      {/* components with extension queries*/}\n    </FinchProvider>\n  );\n};\n')),(0,i.kt)("p",null,"Once setting you set up the extension provider in the website you should be able to use the hooks just like you would ",(0,i.kt)("a",{parentName:"p",href:"./client-setup#react-hooks"},"inside of the extension"),"."))}u.isMDXComponent=!0},876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);