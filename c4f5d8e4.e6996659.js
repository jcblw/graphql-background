(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),l=a(87),i=a(94),o=a(89),s=a(22),m=a(90),u=a(77),d=a.n(u),p=[{title:"Declarative",imageUrl:"icons/code.svg",description:c.a.createElement(c.a.Fragment,null,"Imperative code can be hard to structure. Background scripts can become a confusing when imperatively connecting to events. GraphQL resolvers gives you structure on how to write your background script.")},{title:"Common patterns",imageUrl:"icons/pattern.svg",description:c.a.createElement(c.a.Fragment,null,"GraphQL and React are common technology for the web, and when using them in a web extension it strips away some of the nuance of building an extension. This make extension development more accessible to backend and frontend developers.")},{title:"Error handling",imageUrl:"icons/error.svg",description:c.a.createElement(c.a.Fragment,null,"If a error happens in the background script it will be surfaced to the client script. Writing code into resolvers GraphQL will catch the errors that happen on the background script.")}];function h(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(m.a)(t);return c.a.createElement("div",{className:Object(l.a)("col col--4",d.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:d.a.featureImage,src:r,alt:a})),c.a.createElement("h3",null,a),c.a.createElement("p",null,n))}t.default=function(){var e=Object(s.default)().siteConfig,t=void 0===e?{}:e;return c.a.createElement(i.a,{title:t.title+" | "+t.tagline,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:Object(l.a)("hero hero--primary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},t.title),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:Object(l.a)(d.a.codeBlock,d.a.buttons)},c.a.createElement("pre",null,c.a.createElement("code",null,"npm install finch-graphql --save"))),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(o.a,{className:Object(l.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/")},"Get Started")))),c.a.createElement("main",null,p&&p.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},p.map((function(e,t){return c.a.createElement(h,Object(n.a)({key:t},e))})))))))}}}]);