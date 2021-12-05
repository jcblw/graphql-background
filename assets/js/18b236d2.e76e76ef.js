(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{133:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/devtools-screen-shot-a800cf031feee4514762e5eb55ff0c28.png"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(91)),a={id:"devtools",title:"Finch GraphiQL Devtools"},s={unversionedId:"devtools",id:"devtools",isDocsHomePage:!1,title:"Finch GraphiQL Devtools",description:"Finch GraphiQL Devtools is a Chrome extension. This extension has an instance of GraphiQL to be able to introspect your Finch GraphQL API, and a message tab that logs messages to your Finch GraphiQL API.",source:"@site/docs/devtools.md",sourceDirName:".",slug:"/devtools",permalink:"/finch-graphql/docs/devtools",editUrl:"https://github.com/jointoucan/finch-graphql/edit/master/packages/finch-docs/docs/devtools.md",version:"current",frontMatter:{id:"devtools",title:"Finch GraphiQL Devtools"},sidebar:"someSidebar",previous:{title:"React",permalink:"/finch-graphql/docs/react-ref"},next:{title:"Typescript codegen",permalink:"/finch-graphql/docs/typescript-codegen"}},c=[{value:"Setup",id:"setup",children:[{value:"Connecting your extension to the devtools",id:"connecting-your-extension-to-the-devtools",children:[]},{value:"Configuring devtools to talk to your extension",id:"configuring-devtools-to-talk-to-your-extension",children:[]}]},{value:"Browser support",id:"browser-support",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Finch GraphiQL Devtools is a ",Object(i.b)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/finch-graphiql-devtools/lppmnandcophphjneeabhnioijpdjdnc"},"Chrome extension"),". This extension has an instance of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/graphql/graphiql/tree/main/packages/graphiql"},"GraphiQL")," to be able to introspect your Finch GraphQL API, and a message tab that logs messages to your Finch GraphiQL API."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Finch GraphiQL Screen Shot",src:n(133).default})),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/finch-graphiql-devtools/lppmnandcophphjneeabhnioijpdjdnc"},"Get it on the Chrome Web Store")),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("h3",{id:"connecting-your-extension-to-the-devtools"},"Connecting your extension to the devtools"),Object(i.b)("p",null,"You will need to setup your extension to be able to ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable"},"communicate with external extensions"),". You just need to modify your manifest to contain the following lines."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "externally_connectable": {\n    "ids": ["lppmnandcophphjneeabhnioijpdjdnc"]\n  }\n}\n')),Object(i.b)("p",null,"This is the id of the devtools. This is pretty safe to ship in your production manifest. You will receive no warnings submitting this with your extension. If you are worried about people accessing your graph schema you can add something like this to the initialization of your you Finch GraphQL API."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'new FinchApi({\n  // Disables introspection of the graph\n  // Disables message key auto lookup\n  disableIntrospection: process.env.NODE_ENV === "production",\n});\n')),Object(i.b)("p",null,"This will let you still inspect messages to your Finch GraphQL API, without exposing the GraphQL schema or any information on how to connect to the messages."),Object(i.b)("h3",{id:"configuring-devtools-to-talk-to-your-extension"},"Configuring devtools to talk to your extension"),Object(i.b)("p",null,"To setup the devtools you will need the ",Object(i.b)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/finch-graphiql-devtools/lppmnandcophphjneeabhnioijpdjdnc"},"devtools extension")," installed. Once installed there will be a ",Object(i.b)("inlineCode",{parentName:"p"},"Extension Setup")," button in the top right of the extension."),Object(i.b)("p",null,"This button will open up a drawer where you can paste in your extensions id and if you have a custom message key you can also paste it in here."),Object(i.b)("h4",{id:"optional-permissions"},"Optional permissions"),Object(i.b)("p",null,"You may see an up-sell for some optional permissions. This permission is the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management"},"management")," permission and it is pretty powerful. Finch GraphiQL devtools uses this API to get a list of installed extensions that you can connect to. This is the recommended way to use Finch GraphiQL devtools because it allows you to seamlessly change between different version of your extension or even other extensions your are developing."),Object(i.b)("h2",{id:"browser-support"},"Browser support"),Object(i.b)("p",null,"The Finch GraphiQL devtools with only work on Chromium based browsers like Chrome, Edge, and Brave. There is currently no plans to support other browsers with these devtools."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,b=h["".concat(a,".").concat(d)]||h[d]||u[d]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);