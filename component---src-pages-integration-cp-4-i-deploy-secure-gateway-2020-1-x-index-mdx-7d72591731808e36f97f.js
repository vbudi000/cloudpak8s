(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),l=a.n(i),c=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("pEPl"),h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===n,i=new RegExp(n+"(?!-)"),c=a.replace(i,r);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(d.b)(g.Link,{className:N.link,to:""+c},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},r))))))},n}(o.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,O=s.tabs,h=s.title,g=s.theme,N=s.description,v=s.keywords,x=n.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,I=O?k.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:O,homepage:!1,theme:g,pageTitle:h,pageDescription:N,pageKeywords:v,titleType:m},Object(d.b)(u,{title:o?Object(d.b)(o,null):h,label:"label",tabs:O}),O&&Object(d.b)(w,{slug:k,tabs:O,currentTab:I}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(f.a,{pageContext:t,location:r,slug:k,tabs:O,currentTab:I}),Object(d.b)(c.a,null))}},EKQI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("InlineNotification"),b=l("AnchorLinks"),s=l("AnchorLink"),p={_frontmatter:i},m=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(m,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(s,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(s,{mdxType:"AnchorLink"},"Prepare Installation"),Object(n.b)(s,{mdxType:"AnchorLink"},"Begin Installation"),Object(n.b)(s,{mdxType:"AnchorLink"},"Validate installation"),Object(n.b)(s,{mdxType:"AnchorLink"},"Access Web Interface")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Introduction")),Object(n.b)("p",null,"This page contains guidance on how to configure the Datapower Gateway\nrelease for both on-prem and IBM Cloud.  Note - you do not need to install this\nchart unless you are using DataPower as a standalone capability.\nWhen you install API Connect, it installs its own version of this chart\nas part of the APIC Cluster."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Prepare Installation")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Change project to eventstreams"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"oc project datapower\n")))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Begin Installation")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(n.b)("strong",{parentName:"li"},"Create instance")," inside the\n",Object(n.b)("strong",{parentName:"li"},"DataPower")," tile."),Object(n.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(n.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment configuration."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs that were\ncovered in ",Object(n.b)("a",o({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Configure")),Object(n.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(n.b)("strong",{parentName:"li"},"datapower")),Object(n.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(n.b)("strong",{parentName:"li"},"datapower")),Object(n.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(n.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(n.b)("li",{parentName:"ol"},"Check the license agreement."),Object(n.b)("li",{parentName:"ol"},"Under Parameters click ",Object(n.b)("strong",{parentName:"li"},"All Parameters")," to expand.",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during icp / common-services\ninstallation - icp-proxy.","<","openshift-router-domain",">"),Object(n.b)("li",{parentName:"ol"},"Image Pull Secret - Set to ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(n.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\ndatapower namespace.  Use ",Object(n.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for\nyour environment."))),Object(n.b)("li",{parentName:"ol"},"Scroll down to External access settings - enter the proxy\naddress - ",Object(n.b)("strong",{parentName:"li"},"icp-proxy.","<","openshift-router-domain",">",".")),Object(n.b)("li",{parentName:"ol"},"Note:  If you want to enable access to the WebUI and XML/Rest\nInterfaces for your datapower instance, you will need to change those\nmanually.  Otherwise, they will default to disabled."),Object(n.b)("li",{parentName:"ol"},"Scroll to the bottom. Click ",Object(n.b)("strong",{parentName:"li"},"Install"),".")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Validate Installation")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"check pods using the command line",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{}),"oc get pods -n datapower\nNAME                                      READY     STATUS    RESTARTS   AGE\ndp-1-ibm-datapower-icp4i-fb888677-mvd9q   1/1       Running   0          3m\n")))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Access Web Interface")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Access the web interface (if enabled) by port-forwarding\nthe port defined in the deployment (default 9090)."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward pod/dp-pod-name 9090:9090\n")),Object(n.b)("p",{parentName:"li"},"Access the web UI with local port"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://localhost:9090"}),"https://localhost:9090"))),Object(n.b)("p",{parentName:"li"},"Login using default credentials"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"username: ",Object(n.b)("inlineCode",{parentName:"li"},"admin")),Object(n.b)("li",{parentName:"ul"},"password: ",Object(n.b)("inlineCode",{parentName:"li"},"admin"))),Object(n.b)("p",{parentName:"li"},"If other features such as SSH (default 9022) or REST management interface (default 5554) are enabled,\nthey can similarly be accessed via ",Object(n.b)("inlineCode",{parentName:"p"},"localhost")," by port-forwarding their respectively defined ports."))))}d.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-secure-gateway-2020-1-x-index-mdx-7d72591731808e36f97f.js.map