(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),i=a.n(o),s=a("NmYn"),r=a.n(s),l=a("OKom"),c=a("k4MR"),p=a("TSYQ"),b=a.n(p),d=a("QH2O"),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:b()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},u=a("pEPl"),h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=u.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=o.subDirectory,r=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},A=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),y=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0}),i=o===n,s=new RegExp(n+"(?!-)"),l=a.replace(s,o);return Object(m.b)("li",{key:e,className:b()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(m.b)(v.Link,{className:y.link,to:""+l},e))}));return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},o))))))},n}(i.a.Component),O=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,s=t.frontmatter,p=void 0===s?{}:s,b=t.relativePagePath,d=t.titleType,u=p.tabs,h=p.title,v=p.theme,y=p.description,j=p.keywords,N=n.data.site.pathPrefix,E=N?o.pathname.replace(N,""):o.pathname,R=u?E.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:v,pageTitle:h,pageDescription:y,pageKeywords:j,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:u}),u&&Object(m.b)(w,{slug:E,tabs:u,currentTab:R}),Object(m.b)(O.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:b})),Object(m.b)(A.a,{pageContext:t,location:o,slug:E,tabs:u,currentTab:R}),Object(m.b)(l.a,null))}},A3NX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s,r={},l=(s="InlineNotification",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:r},p=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(p,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"/mcm/cp4mcm_nom_day2"}),"Back to NOM Day2")),Object(n.b)("h2",null,"Creating Topology from Alerts"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"I do not have an inventory system, but I want to build the topology of my environment.  How do you do it using ASM?")," That is a common question that comes up in a few of my past customer engagement.  "),Object(n.b)("p",null,"This article will provide an approach to building a topology without an Inventory application."),Object(n.b)(l,{mdxType:"InlineNotification"},Object(n.b)("p",null,"There are solutions such as the ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSSHRK_4.2.0/overview/concept/ovr_product_overview_infocenter.html"}),"IBM Tivoli Network Manager")," that can discover your IP Network topology by querying the network environment using SNMP.  ")),Object(n.b)("p",null,"This article assumes that you have some basic familiarity with building topology using ASM.\nIf you do not have this familiarity, you might want to read ",Object(n.b)("a",i({parentName:"p"},{href:"https://medium.com/ibm-garage/topology-modelling-using-agile-service-manager-a-tutorial-2e521040ea64"}),"a tutorial on topology modeling using ASM"),"\nand ",Object(n.b)("a",i({parentName:"p"},{href:"https://medium.com/ibm-garage/topology-modelling-using-agile-service-managers-rest-interface-7de14a85e333"}),"Building a topology using Agile Service Manager’s REST Interface"),".   "),Object(n.b)("p",null,"To build a topology from scratch, you need to come up with some way to model it.  We can use our knowledge of the environment, for example.  Can we derive the topology information from specific knowledge on how the component of the ecosystem interacts?  Can we use a specific naming convention?  In this article, we will start with the output of ",Object(n.b)("em",{parentName:"p"},"a remote ping"),".  To make the topology reproducible by you, we are going to use an alerts simulator."),Object(n.b)("h2",null,"The model"),Object(n.b)("p",null,"A router typically has a feature called remote ping.  You can set up for the router to ping other network devices for availability. You can then either query the router or set up the router to send the results to an external monitoring server. Alerts normally have a field call ",Object(n.b)("em",{parentName:"p"},"Node"),".  It represents the object that sends the alerts.  It can be a hostname or IP address of a Server or Management Component of a Network Devices."),Object(n.b)("p",null,"Let us use a fictional use case.  You just joined ",Object(n.b)("strong",{parentName:"p"},"AFictionalCompany")," IT department and was asked your manager to create a topology of the company’s main routers and servers.\nAFictionalCompany has two main offices, one in Singapore and another one in Sydney.  The company also has branch offices in Europe and North America.  An Application Server and a database server are running at every office."),Object(n.b)("p",null,"As a member of the IT department, you have access to the Alerts.\nYou noticed that the networking team has set up the ",Object(n.b)("em",{parentName:"p"},"remote ping")," from the company’s two main routers in Singapore and Sydney to all other routers in their branch offices.  The result of the remote ping is forwarded to your Alert Manager as alerts. You also noticed that each Application Servers and the Database Servers send Heartbeat Availability Alerts as well.  You also found out that the network team and the infrastructure team has labeled the router and the servers with location information."),Object(n.b)("p",null,"To summarize, this is what available:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The remote ping results from 2 main routers in Sydney and Singapore."),Object(n.b)("li",{parentName:"ul"},"Heartbeat Availability alerts from the Application Servers and Database Servers."),Object(n.b)("li",{parentName:"ul"},"Location information in the alerts.")),Object(n.b)("h2",null,"The simulated alerts"),Object(n.b)("p",null,"OMNIbus, the Event Management component of NOI, has an alert generator called the Simnet probe.  An OMNIbus probe normally collects from a network, or network management equipment.  A simnet probe, simulate the alerts. It generates simulated alerts based on ",Object(n.b)("em",{parentName:"p"},"a definition file"),".  The alerts can then be parsed and transformed using ",Object(n.b)("em",{parentName:"p"},"a probe rule file"),"."),Object(n.b)("p",null,"We will setup the simnet probe to simulate random link failure and random server failure.\nThe random link failure simulates a failed remote ping, and the random server failure simulates the failed heartbeat.\nThe configuration of the probe, the probe rule file, and the Netcool/Impact policies all can be found from the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/jwahidin/topology_modeling/tree/master/Cloudpak8sAlert"}),"GitHub page for this article"),".  Reading or Working with these configuration files requires certain knowledge in the Netcool Operation Insight."),Object(n.b)("p",null,"To simulate the alerts, we have created all the nodes in the simnet probe definition file. Here is a sample of the Alerts using the out of the box Simnet rules file."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.95624195624196%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6klEQVQoz22Rtw7EMAxD/f8/mCVLkF6R3hYdngAecmUQLEsmRcohjmPL89zatrWyLK2ua9v33YZhsCRJbJ5nG8fRoiiyNE2tqiqvU6O3bZvHuq62LIuFpmmMOM/T475vj+u6PMgZwED6kDAYTNd1TiQc7wMPmUaBhoiUi3CaJs9RgQvI+r53JygUPsjGk0S57gAg4c5wLGdZ5quSyjchU1CJiqfNb4W8445C2aV2HMcHJhRF4bIpqqn8qVBr4UQdeyRQyV7pgQkUIdQEfcq3Qr0BDAlrIn4sY1cK/30KIcvU9CngqKFezui/AHlfZaLnpWQKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Simulated Alerts",title:"Simulated Alerts",src:"/static/160b5bda15348218db8e262bbc9b5d32/3cbba/simulated_alerts.png",srcSet:["/static/160b5bda15348218db8e262bbc9b5d32/7fc1e/simulated_alerts.png 288w","/static/160b5bda15348218db8e262bbc9b5d32/a5df1/simulated_alerts.png 576w","/static/160b5bda15348218db8e262bbc9b5d32/3cbba/simulated_alerts.png 1152w","/static/160b5bda15348218db8e262bbc9b5d32/36d41/simulated_alerts.png 1554w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Now comes the modeling part.  One way to approach the model building is to extract the alerts and then apply a series of business rules and then push the result to ASM.  Another approach is to ",Object(n.b)("em",{parentName:"p"},"enrich")," the alerts with information that can help our model building before we extract them.  We will be using the second approach.  We enrich the alerts using a probe rule file.\nThe rule file inserts into the alerts the two endpoints involved in the remote ping. "),Object(n.b)("p",null,"Using the Server Alerts location information, we create a logic connecting the Server to the router in the same location. For example, we can connect an Alert from an AppServer called ",Object(n.b)("inlineCode",{parentName:"p"},"SingaporeAppSrv")," or from a DataBase server named ",Object(n.b)("inlineCode",{parentName:"p"},"SingaporeDb")," to the router responsible for the ",Object(n.b)("inlineCode",{parentName:"p"},"Singapore")," Office."),Object(n.b)("p",null,"Here are the Alerts after being enriched using the new rules file. We have added some tags (not shown), to make the processing of it easier.  Here is the list of alerts after being enriched."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.881443298969074%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABBUlEQVQoz1WRxwrEMAxE/f8fmGMgxem9N1B4Ai3Zg3GR9GYsuTRNpes6WZZFiqKQLMtk33dp21bCMJRpmmQYBgmCQJIk0Zw4jvVtHMe/xZtrmkbKspRt26Tvew08z/MTOI5DY3Vd6xmBPM+lqirdqWVxx5gCAV3XpQoU3Pct8zwrEBgLIXKIAzAjCHEGiAmHCoXneWrAHLJ77xWyrqsWk4N4FEUa4+u0jDsM/TK9gs6FxR2HqCEGzHoKEOfk48wcmkv9MkVczKEBzSEwoN+24Io64uwMCyh5Dqso8U1gnAFa8xGyHn6FiNlQELABOsiok4xlHNhQSMYhQAS+Q6GOr9twMEPuC51tXnY+Qt+iAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Enriched Simulated Alerts",title:"Enriched Simulated Alerts",src:"/static/10f5e994360e0315de496435c60ba20e/3cbba/simulated_alerts_enrich.png",srcSet:["/static/10f5e994360e0315de496435c60ba20e/7fc1e/simulated_alerts_enrich.png 288w","/static/10f5e994360e0315de496435c60ba20e/a5df1/simulated_alerts_enrich.png 576w","/static/10f5e994360e0315de496435c60ba20e/3cbba/simulated_alerts_enrich.png 1152w","/static/10f5e994360e0315de496435c60ba20e/7f043/simulated_alerts_enrich.png 1552w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The alerts now have both the resources and the link connecting the resources.  Now we have some data that can be used to create the topology model.  We have a few options for building the topology using this information.  One way is to parse the alerts and call the ASM REST API to create the topology.  Another way is to build a framework that we can reuse.  We populate two tables, one for ",Object(n.b)("inlineCode",{parentName:"p"},"resources")," and another one for the ",Object(n.b)("inlineCode",{parentName:"p"},"relationship."),"  By creating the two tables, we can enrich the topology with other information before we build it.  It also provides us with a checkpoint to ensure the extraction logic produces the desired structure. Since we already have Omnibus as the Alerts database, we build the resource and relationship using Omnibus."),Object(n.b)("p",null,"We will be using the following process flow:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.146204311152765%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABiklEQVQY011RS0sCURid7IlBYAXSYyflIkgriDZt+0Vuayn9gmodQRsLApXAMFo2roQW5Yyv8ZWj4zj35Z3xcftuFESH+3EW3+Hcc89VqtVqB8AIIZhSymHauq6vKQAhhE+yaZqrjUaj22q1mGFUkWVZHqNUf85mF+W+Xq9POY6jyFFs2+bj8ViAkcAYS2aVSmVTChOJxEIkGg2k06mtXs/mrjcSCBMxcD2BKWtruuZX/qMHcAHSqNvtupDUhIQrP+vpYDC4e3Z2ugOGJkJkyAYcjut53rB0cXm1JEWP6dT00xv1XWeLPqVQKIQNwwjncrlIJpPZV1X1qFgs3iKE7sH8DuYBLrt5f/84YGywDc/bSyaTx/l8/gSqeqHYyXHOXxlBKmdE/Rt21u/3b8RisRAknUB/YjL5JiFrKZVKiz+6+fm5uVA8fn7IkAWCoVQKMSJArlBqtdqUpmm+3w8ol8sBMOxAwUPolMFHjGEa/b6zLPfNZnNGch/z9X6v3R44HUbtT4ysJoG05At/FEEezNbQ1gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"topology creation flow",title:"topology creation flow",src:"/static/82b87c71076228e936f816e3af0832cb/3cbba/topology-creation-flow.png",srcSet:["/static/82b87c71076228e936f816e3af0832cb/7fc1e/topology-creation-flow.png 288w","/static/82b87c71076228e936f816e3af0832cb/a5df1/topology-creation-flow.png 576w","/static/82b87c71076228e936f816e3af0832cb/3cbba/topology-creation-flow.png 1152w","/static/82b87c71076228e936f816e3af0832cb/0b124/topology-creation-flow.png 1728w","/static/82b87c71076228e936f816e3af0832cb/939a8/topology-creation-flow.png 2134w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Building the tables"),Object(n.b)("p",null,"Here is the logic to build the resource and relationship table"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'At Every Period, \n-    scan the new "link "simulated alerts inserted into the system since the last scan, and populate the resource and relationship tables if it does not already contain the resource and the relationship.\n-    Scan the new "server" simulated alerts inserted into the system since the last scan, and populate the resource and relationship tables if it does not already contain the resource and the relationship.\n')),Object(n.b)("p",null,"The logic has been implemented using Netcool/Impact using ",Object(n.b)("inlineCode",{parentName:"p"},"OmnibusEventReader"),"."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'// insertResAndEdgeFromEvent\n// To be called from the OMNIbus Event Reader and hence is expecting an \n// EventContainer to be populated already.\n// Expected to be call when ProcessReq = 101 or 102 and Class is Simnet 3300\n\nfunction createOrUpdateResource(Resource,ResType){\n  key = globalApp + Resource;\n  Res = GetByKey(dtRes, key, 1);\n   \n  if (length(Res) > 0){\n    // Maintaining the update time so state rows can be removed.\n    sql="Update custom.a_res set lastUpdate = getdate() where Key = \'" + key + "\'";\n    Log("SQL: " + sql );\n    DirectSQL(\'defaultobjectserver\', sql, false);\n  } else {\n    nRes = NewObject();\n    nRes.Key = key;\n    nRes.App = globalApp;\n    nRes.UniqueId = Resource;\n    nRes.entityTypes = ResType;\n    nRes.insertTime = GetDate();\n    nRes.lastUpdate = GetDate();\n    nRes.ttl = globalTTL;\n    AddDataItem(dtRes,nRes);\n    Log("New Resource Entry: " + key);\n  }\n} // function\n\nfunction createOrUpdateEdge(From,Rel,To){\n  key = globalApp + From + Rel + To;\n  Edge = GetByKey(dtEdge, key, 1);\n \n  if (length(Edge) > 0){\n    // Maintaining the update time so state rows can be removed.\n    sql="Update custom.a_edge set lastUpdate = getdate() where Key = \'" + key +"\'";\n    Log("SQL: " + sql );\n    DirectSQL(\'defaultobjectserver\', sql, false);\n  } else {\n    nEdge = NewObject();\n    nEdge.Key = key;\n    nEdge.App = globalApp;\n    nEdge.FromRes = From;\n    nEdge.Relationship = Rel;\n    nEdge.ToRes = To;\n    nEdge.insertTime = GetDate();\n    nEdge.lastUpdate = GetDate();\n    nEdge.ttl = globalTTL;\n    AddDataItem(dtEdge,nEdge);\n    Log("New Edge Entry: " + key);\n  }\n} // function\n\nLog("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Policy started vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");\n\n// Called by OmnibusEventReader.\ndtRes = "asm_Res";\ndtEdge = "asm_Edge";\nglobalTTL = 3600;\nglobalApp = "Event1";\n\neNode1 = EventContainer.Node;\neNode2 = EventContainer.NodeAlias;\n\nif (EventContainer.ProcessReq = 101) {\n  createOrUpdateResource(eNode1,"router");\n  createOrUpdateResource(eNode2,"router"); \n  createOrUpdateEdge(eNode1,"routesVia",eNode2);\n} elseif (EventContainer.ProcessReq = 102) {\n  createOrUpdateResource(eNode1,"server");\n  createOrUpdateResource(eNode2,"router"); \n  createOrUpdateEdge(eNode1,"connectedTo",eNode2);\n} else {\n  // Unknown, do nothing.\n}\n\nLog("^^^^^^^^^^^^^^^^^^^^^ Policy Completed ^^^^^^^^^^^^^^^^^^^^^^^^^^^^");\n\n')),Object(n.b)("p",null,"After processing, the content of the resource and relationship table is shown below:"),Object(n.b)("p",null,"Resource Table:\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6ElEQVQoz3WQi67CIBBE+f/fVCsVpDxKS+ljZEhQe2/cZJPhZPaFkFLhdpMIIWBZEoyxsNYhxgjvPVJKVc/zXDUZ9TRNuN8Vuq6Hc64ypng8DK5XwhEMa0MpiviObdvQ988yzJ9Y16nKW+z7DhFCBDPnFcdxlCmpbJqrpoHJYmNcGeZPjMOdCycmpNS4XGRtxCYsoomaBho5jNsoNbzZuq5g7V8mhsFXyAQOjONU/mx+n9Aa8zR6+W6MNWTNV08m0HqogA15Ppt+b8jJ/Gut7YmxoX5+WD05pQVMnkUTNf+QumXO+R//xV7VVSBOXADgUwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"resource table",title:"resource table",src:"/static/2b8d8933c72260a3ef5a7031110dfc72/3cbba/resource_table.png",srcSet:["/static/2b8d8933c72260a3ef5a7031110dfc72/7fc1e/resource_table.png 288w","/static/2b8d8933c72260a3ef5a7031110dfc72/a5df1/resource_table.png 576w","/static/2b8d8933c72260a3ef5a7031110dfc72/3cbba/resource_table.png 1152w","/static/2b8d8933c72260a3ef5a7031110dfc72/91a72/resource_table.png 1440w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"Relationship Table:\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.093922651933696%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABSUlEQVQoz3VSi26DMAzM//9hEWvX0ZZ3COGRhAC32F0QmzSkk4PPPl8MwloLrTVerxeGYYAxBvM8w1oD5xzqukaWZVBKnTjL0L1GWZacI0zTBPGsFLrRopADWm0gw5liei+QFR2afkbRao7dGAaoCcktB/XJwaLqRo6EdjAQl+QLs3HYdmBZN/gAt3h8XJ9IA9yyYo1cKKJa6slLyT1UH/sWv0KUZRPsGmDfsW1bCBvWdUXbKjRNB+89597cDh+GUV4pjX1755mjGPpEVUkWoGSMJCJlHxoVn8/csixhrxLDOPEAyjN+asTl8olejwcZBW+3Z/hQ9eGAOHJqrUOaZuFjtMdtzobE41Hy9SIZBck5OfnPYZ7XfD5zLEj7iC9nQRpCon+boqAx9pfDCJEk91Dk+cpx8URcrw8WpOdYfODo36Qr037PXMQ3hbu5o0GR/UkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"relationship table",title:"relationship table",src:"/static/acdf252f442881fa658958a8b5615451/3cbba/relationship_table.png",srcSet:["/static/acdf252f442881fa658958a8b5615451/7fc1e/relationship_table.png 288w","/static/acdf252f442881fa658958a8b5615451/a5df1/relationship_table.png 576w","/static/acdf252f442881fa658958a8b5615451/3cbba/relationship_table.png 1152w","/static/acdf252f442881fa658958a8b5615451/f3ebc/relationship_table.png 1448w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"With the two tables created, we can use the same script as written in ",Object(n.b)("a",i({parentName:"p"},{href:"https://medium.com/ibm-garage/topology-modelling-using-agile-service-managers-rest-interface-7de14a85e333"}),"the Medium blog to build the topology"),".  The logic is something like this:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"At Every Period\n    Check if there is at least one updated row in the resource or relationship tables.\n    If there is, then call the script to create the topology from the resource and relationship table.\n")),Object(n.b)("p",null,"This is the code implemented in Netcool/Impact:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'// runBulkLoadOnNew\n// To be called periodically by policy activator.\n// lastUpdate is for removal - if required, not currently implemented.\n// \n\ndtRes = "asm_Res";\ndtEdge = "asm_Edge";\nglobalApp = "Event1";\n\n// The insertTime was done less than 60 seconds ago.\n\nfilter = "((getdate()-insertTime) < 60)";\n\nrecentRes = GetByFilter(dtRes,filter,false);\nnumRes = length(recentRes);\nrecentEdge = GetByFilter(dtEdge,filter,false);\nnumEdge = length(recentEdge);\nLog("Number of Changed Resource: " + numRes +", Number of Changed Edge: " + numEdge);\n\nIf ((numRes>0)or(numEdge>0)){\n   Log("Executing Bulk Load at: "  + GetDate());\n   asmRest.bulkLoad(dtRes,dtEdge,globalApp);\n}\n')),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"asmRest")," Function being called is as follow:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),'// asmRest\n// Expected to be called by another policy with the dataTypes and App being passed as parameters.\n\nfunction bulkLoad(dtRes,dtEdge,sApp) {\n\n  hasError="no";\n  Handle java.lang.Exception { \n    Log("Exception: " + ErrorMessage);\n    hasError="yes";\n  } \n  \n  Log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Policy started vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");\n  app_name = sApp;\n  Log(2,"Parameter received: " + app_name);\n  paramExist = false;\n  if (app_name != NULL) {\n      if (length(app_name) > 0) {\n          paramExist = true;\n      }\n  }\n  if (!paramExist) {\n      Log("Parameter not specified.  Policy will exit!");\n      Exit();\n  }\n  \n  // Initialize the values of all the parameters and then start the Bulk Job it has not been started.\n  asmFunctions.asm_initalize(asm_protocol,asm_host,asm_port,asm_path,HeadersToSend,HttpProperties);\n  asmFunctions.asm_startBulkJob(asm_protocol,asm_host,asm_port,asm_path,HeadersToSend,HttpProperties,asm_JobId,retError);\n  \n  if ((retError == \'yes\') or (hasError == \'yes\')){\n     Log("Connecting to ASM has failed");\n     Exit();\n  }\n  \n  // By this point the connection is considered established.\n  app_filter = "App=\'"+ app_name + "\'";\n  RssTbl = GetByFilter(dtRes,app_filter,false);\n  numRss = length(RssTbl);\n  log(2,"Number of Resource found = " + numRss); \n  \n  r = 0;\n  while (r < numRss){\n        asm_name=RssTbl[r].UniqueId;\n        asm_uniqueId=RssTbl[r].UniqueId;\n        asm_matchTokens=RssTbl[r].UniqueId;\n        asm_mergeTokens=RssTbl[r].UniqueId;\n        asm_entityTypes=RssTbl[r].EntityTypes;\n        asmFunctions.asm_createResource(asm_protocol,asm_host,asm_port,asm_path,HeadersToSend,HttpProperties,asm_name,asm_uniqueId,asm_matchTokens,asm_mergeTokens,asm_entityTypes,asm_JobId);\n        \n        Log(2,"Creating "+ asm_entityTypes + ", id: " + asm_uniqueId);\n        r = r + 1;\n  } // End while\n  \n  // Get the Relationship table\n  EdgeTbl = GetByFilter(dtEdge,app_filter,false);\n  numEdge = length(EdgeTbl);\n  log(2,"Number of Edge found = " + numEdge); \n  \n  e = 0;\n  while (e < numEdge){\n      asm_fromUniqueId=EdgeTbl[e].FromRes;\n      asm_edgeType=EdgeTbl[e].Relationship;\n      asm_toUniqueId=EdgeTbl[e].ToRes;\n        \n      asmFunctions.asm_createEdge(asm_protocol,asm_host,asm_port,asm_path,HeadersToSend,HttpProperties,asm_fromUniqueId,asm_edgeType,asm_toUniqueId,asm_JobId);\n      Log(2,"Connecting "+ asm_fromUniqueId +" : " + asm_edgeType + " : " + asm_toUniqueId );\n      e = e + 1;\n  }// End while\n  \n  // Synchronize the Bulk Job\n  asmFunctions.asm_syncBulkJob(asm_protocol,asm_host,asm_port,asm_path,HeadersToSend,HttpProperties,asm_JobId);\n  \n  Log("^^^^^^^^^^^^^^^^^^^^^ Policy Completed ^^^^^^^^^^^^^^^^^^^^^^^^^^^^");\n}\n')),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"asmFunctions")," code can be found in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/jwahidin/topology_modeling/tree/master/Cloudpak8sAlert"}),"accompanying github")," and not listed here for brevity."),Object(n.b)("h2",null,"The Topology"),Object(n.b)("p",null,"By running the previous Netcool/Impact policy, the content of the resource and relationship tables are pushed to ASM via the ASM’s REST Interface.  You can then use ",Object(n.b)("strong",{parentName:"p"},"the ASM’s Topology Viewer")," to view the topology."),Object(n.b)("p",null,"This is the topology being build by the above logic."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.71703561116458%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABu0lEQVQoz1VS226bQBDl/7+hD636UuUhUpteHqq8pEkbqW3aWKSJa4yxjU0wF4NZLsteToYFHGUkmIE9O7vnnLFAobWiR5vcRR1N0aYOxrUxeow2NWcJ0tm5qUURQIsa3Yo1ArpQosHu7zvEzjck/qRvoiQkC6Elf27cHVqk2E7O0NYHrK7fdECzZnWv+N9n7B+nSNgBLE+QpBmctXfc7F6+QlMdzPd86SIvM1MH9heUkYPuTjv7g7mQJYTAfvED7uwOYRQaYFOXqBiD5nSAdwFl6AJStkjpsJZz8GQGwSJwoRHEaySLn+a/xVIfweQ9XoSWJlVZAP/2E1QZUfPc/Fd5f3P/zymqeI7gMUQQbHvJiLah3KQEUi045Xxx+WyAEobyhjbnGxuK9Fx8f02GREMDfRT1vzsFa0pYUml4129RFjHyaE5mPBiMrNOhMTnKW7QkzRibmxPwbG3qzumSWLKS95RHlx3PRUEbISrk3hV2dx8hqxhqaNyP0wONyBb7JeklJOErJKsb7IfxObrcUTnkGQSpv/p1gtS3IQadinDaz11TY/n7FPHaxu7+KwpWEc2ZMcq/PaPc6/4Ek/iuf51PraAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"topology from events",title:"topology from events",src:"/static/bf3770488ce2deb7be080060877d872a/3cbba/topology-from-events.png",srcSet:["/static/bf3770488ce2deb7be080060877d872a/7fc1e/topology-from-events.png 288w","/static/bf3770488ce2deb7be080060877d872a/a5df1/topology-from-events.png 576w","/static/bf3770488ce2deb7be080060877d872a/3cbba/topology-from-events.png 1152w","/static/bf3770488ce2deb7be080060877d872a/0b124/topology-from-events.png 1728w","/static/bf3770488ce2deb7be080060877d872a/87d20/topology-from-events.png 2078w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Summary"),Object(n.b)("p",null,"We have built a topology using alerts, and some location information encoded in the alerts.  We used intermediary resource and relationship tables and periodically check for changes in the table.  If changes were detected, we pushed the tables’ content into ASM through ASM’s REST Interface. This simple exercise created using a simulator so the reader can recreate it.  It is simple, but hopefully, it gives you some ideas for your project."),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"/mcm/cp4mcm_nom_day2"}),"Back to NOM Day2")))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-nom-day-2-asm-day-2-from-event-index-mdx-c00e71f76114a52383dc.js.map