(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),r=a.n(i),o=a("NmYn"),s=a.n(o),l=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=i.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),r=i===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,i);return Object(d.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(d.b)(v.Link,{className:j.link,to:""+l},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},i))))))},n}(r.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=b.tabs,O=b.title,v=b.theme,j=b.description,x=b.keywords,N=n.data.site.pathPrefix,k=N?i.pathname.replace(N,""):i.pathname,P=m?k.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:v,pageTitle:O,pageDescription:j,pageKeywords:x,titleType:u},Object(d.b)(h,{title:r?Object(d.b)(r,null):O,label:"label",tabs:m}),m&&Object(d.b)(w,{slug:k,tabs:m,currentTab:P}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(f.a,{pageContext:t,location:i,slug:k,tabs:m,currentTab:P}),Object(d.b)(l.a,null))}},"5HLIX":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o,s={},l=(o="InlineNotification",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:s},b=i.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(n.b)("p",null,"The capabilities provided with the Cloud Pak for Integration\ncan be installed using the instructions in\nthe sections above in the\nCloud Pak Playbook."),Object(n.b)("p",null,"In addition, there is the option of installing and uninstalling\nthese capabilities using scripts developed by the IBM Garage\nSolution Engineering team. Also available are Tekton pipelines\nfor installing and uninstalling the capabilities."),Object(n.b)("p",null,"The scripts and pipeline artifacts, along with instructions\nhow to use them, are provided at the link below:"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cp4i-setup/blob/master/README.md"}),"Cloud Pak for Integration Installation Scripts & Pipelines")))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-scripts-2020-1-x-index-mdx-5dd696d75e23eac9d7d5.js.map