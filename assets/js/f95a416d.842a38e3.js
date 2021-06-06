(self.webpackChunkfinch_docs=self.webpackChunkfinch_docs||[]).push([[131],{876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,g=h["".concat(p,".").concat(m)]||h[m]||u[m]||s;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2239:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var n=r(7560),a=r(8283),s=(r(2784),r(876)),o={id:"api-setup",title:"API Setup",sidebar_label:"Setup background API",slug:"/"},i={unversionedId:"api-setup",id:"api-setup",isDocsHomePage:!1,title:"API Setup",description:"Initialize Finch Api",source:"@site/docs/api-setup.md",sourceDirName:".",slug:"/",permalink:"/finch-graphql/docs/",editUrl:"https://github.com/jointoucan/finch-graphql/edit/master/packages/finch-docs/docs/api-setup.md",version:"current",sidebar_label:"Setup background API",frontMatter:{id:"api-setup",title:"API Setup",sidebar_label:"Setup background API",slug:"/"},sidebar:"someSidebar",previous:{title:"How it works",permalink:"/finch-graphql/docs/how-it-works"},next:{title:"Advanced API usage",permalink:"/finch-graphql/docs/advanced-api-usage"}},p=[{value:"Initialize Finch Api",id:"initialize-finch-api",children:[{value:"TypeDefs",id:"typedefs",children:[]},{value:"Resolvers",id:"resolvers",children:[]},{value:"Attaching messaging",id:"attaching-messaging",children:[]}]}],l={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"initialize-finch-api"},"Initialize Finch Api"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"FinchApi")," class is a class that allows you to create an executable graphql schema. It is modeled to look just like the ",(0,s.kt)("strong",{parentName:"p"},"ApolloServer")," class. The only required properties in the options are typeDefs and resolvers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FinchApi } from 'finch-graphql'\nimport { typeDefs } from './typeDefs'\nimport { resolvers } from './resolvers'\n\n// Create the executable schema\nconst api = new FinchApi({\n  typeDefs,\n  resolver,\n})\n")),(0,s.kt)("h3",{id:"typedefs"},"TypeDefs"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"TypeDefs")," are schemas for the GraphQL api. These can be a GraphQL document or and array of GraphQL documents. These help you define what the graph contracts of your GraphQL api."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import gql from 'graphql-tag'\n\nconst browserSchema = gql`\n  input PermissionsInput {\n    origins: [String!]\n    permissions: [String!]\n  }\n\n  type Browser {\n    permissions(input: PermissionsInput!): Boolean!\n  }\n\n  type Query {\n    browser: Browser!\n  }\n`\n\nexport const typeDefs = [browserSchema];\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"typeDefs")," exported in the example above can be passed to ",(0,s.kt)("strong",{parentName:"p"},"FinchAPI")," as the key ",(0,s.kt)("em",{parentName:"p"},"typeDefs")," and we now have a schema."),(0,s.kt)("p",null,"You can learn more about what can go into a schema in the ",(0,s.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"official GraphQL docs"),"."),(0,s.kt)("h3",{id:"resolvers"},"Resolvers"),(0,s.kt)("p",null,"Resolvers are functions that can be executed in the graph that will allow your to asynchronously query or mutate data. This is the same shape as you would have setting up resolvers in ",(0,s.kt)("strong",{parentName:"p"},"ApolloServer"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const browserResolvers = {\n  Browser: {\n    permissions: (_browser, { input }) => browser.permissions.contains(input),\n  },\n  Query: {\n    browser: () => ({});\n  }\n}\n\nexport const resolvers = {\n  Browser: browserResolvers.Browser,\n  Query: {\n    ...browserResolvers.Query\n  }\n}\n")),(0,s.kt)("p",null,"The exported ",(0,s.kt)("strong",{parentName:"p"},"resolvers")," variable can now be passed to ",(0,s.kt)("strong",{parentName:"p"},"FinchApi")," to be able to setup the functions that get ran when a resolver is queried on the graph."),(0,s.kt)("p",null,"Read more about resolvers in the ",(0,s.kt)("a",{parentName:"p",href:"https://graphql.org/learn/execution/#root-fields-resolvers"},"official GraphQL docs"),"."),(0,s.kt)("h3",{id:"attaching-messaging"},"Attaching messaging"),(0,s.kt)("p",null,"To be able to start querying the GraphQL API you will need to attach it to messages so when a message comes into the background script, Finch can determine if it should handle the message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const api = new FinchApi({\n  typeDefs,\n  resolver,\n  // auto attach messages\n  attachMessages: true \n})\n")),(0,s.kt)("p",null,"Finch GraphQL has a built in way to attach messages. In the example above we pass ",(0,s.kt)("strong",{parentName:"p"},"attachMessages")," as ",(0,s.kt)("em",{parentName:"p"},"true")," to be able to auto attach messages to the browser messaging API. For projects with existing messages you will probably want to avoid this because it may interfere with responses to other messages. There is another way you can attach to the messaging API without interfering."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FinchMessageKey } from 'finch-graphql'\nimport { api } from './graphql-api'\n\nbrowser.runtime.onMessage.addListener(message => {\n  if (message.type === FinchMessageKey.Generic) {\n    return api.onMessage(message)\n  }\n  // ... do other message stuff\n}, [])\n")),(0,s.kt)("p",null,"This will allow you to have your custom messages working properly and be able to use Finch GraphQL as well."))}c.isMDXComponent=!0}}]);