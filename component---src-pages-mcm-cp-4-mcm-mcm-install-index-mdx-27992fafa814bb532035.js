(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),o=n("q1tI"),r=n.n(o),l=n("NmYn"),i=n.n(l),c=n("OKom"),s=n("k4MR"),b=n("TSYQ"),p=n.n(b),d=n("QH2O"),u=n("qKvR"),m=function(e){var t,n=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},n)))))},h=n("pEPl"),O=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=h.data.site.siteMetadata.repository,o=n||a,r=o.baseUrl,l=o.subDirectory,i=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},j=n("FCXl"),f=(n("Oyvg"),n("Wbzz")),y=n("I8xM");var v=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0}),r=o===a,l=new RegExp(a+"(?!-)"),c=n.replace(l,o);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(u.b)(f.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:y.list},o))))))},a}(r.a.Component),N=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,r=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,h=b.tabs,O=b.title,f=b.theme,y=b.description,w=b.keywords,k=a.data.site.pathPrefix,C=k?o.pathname.replace(k,""):o.pathname,M=h?C.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:h,homepage:!1,theme:f,pageTitle:O,pageDescription:y,pageKeywords:w,titleType:d},Object(u.b)(m,{title:r?Object(u.b)(r,null):O,label:"label",tabs:h}),h&&Object(u.b)(v,{slug:C,tabs:h,currentTab:M}),Object(u.b)(N.a,{padded:!0},n,Object(u.b)(g,{relativePagePath:p})),Object(u.b)(j.a,{pageContext:t,location:o,slug:C,tabs:h,currentTab:M}),Object(u.b)(c.a,null))}},HJdZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return O}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=i("PageDescription"),s=i("AnchorLinks"),b=i("AnchorLink"),p=i("InlineNotification"),d=i("Tabs"),u=i("Tab"),m={_frontmatter:l},h=o.a;function O(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(h,r({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"PageDescription"},Object(a.b)("p",null,"In this section we will walk through the installation of the MCM component of the Cloud Pak for Multicloud Management. This document is specifically written for installations on Red Hat OpenShift 4.2 running on an x86 architecture. The purpose of this document is to be agnostic. In other words… MCM requires OpenShift 4.2 to be installed we don’t care if it is on-prem or in the cloud or bare-metal or virtual machines. In the sections below we will discuss the Online vs Offline install, both of which are very similar with differences in the location of the MCM installation images. Please review the Configuring your installation section to understand the available installation options prior to installation.")),Object(a.b)(s,{mdxType:"AnchorLinks"},Object(a.b)(b,{mdxType:"AnchorLink"},"Configuring your installation"),Object(a.b)(b,{mdxType:"AnchorLink"},"Offline Installation"),Object(a.b)(b,{mdxType:"AnchorLink"},"Online Installation"),Object(a.b)(b,{mdxType:"AnchorLink"},"Uninstall")),Object(a.b)(p,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Update:")," This document was recently updated to include Cloud Pak for MultiCloud Mangement v1.3.")),Object(a.b)("h2",null,"Prerequisites"),Object(a.b)("p",null,"This document does not describe how to install or configure the underlying OpenShift platform. So prior to installing make sure you have a working OpenShift cluster with the required capacity."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check the requirements doc to make sure you have size your cluster appropriately and you have capacity"),Object(a.b)("li",{parentName:"ul"},"For offline installs make sure you have downloaded the Cloud Pak for Multicloud Management Passport Advantage Archive (PPA) file (see requirements) and copied it to the installation server"),Object(a.b)("li",{parentName:"ul"},"For online installs make sure you have an entitlement key from ",Object(a.b)("a",r({parentName:"li"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"MyIBM Container Software Library")," to access the IBM Entitled Docker Registry "),Object(a.b)("li",{parentName:"ul"},"The installation is performed from the Command line (CLI) so you will need the required CLI tools to interface with the cluster. Instructions on setting up the required CLI tools here: ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html"}),"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html")),Object(a.b)("li",{parentName:"ul"},"Offline installation will require the docker client install on the installation server")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Common Passport Advantage Part Numbers")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CC5W4EN")," - IBM Cloud Pak for Multicloud Management Core 1.3 Kubernetes image for AMD64"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CC4L8EN")," - IBM Cloud Pak for Multicloud Management Core 1.2 Kubernetes image for AMD64")),Object(a.b)("h2",null,"Configuring your installation"),Object(a.b)("p",null,"This section will attempt to describe the options available for the MCM Installation."),Object(a.b)("p",null,"Below is the config.yaml extracted from the inception image:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# Licensed Materials - Property of IBM\n# IBM Cloud private\n# @ Copyright IBM Corp. 2019 All Rights Reserved\n# US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.\n\n---\n\n# A list of OpenShift nodes\ncluster_nodes:\n  master:\n    - <your-openshift-dedicated-node-to-deploy-master-components>\n  proxy:\n    - <your-openshift-dedicated-node-to-deploy-proxy-components>\n  management:\n    - <your-openshift-dedicated-node-to-deploy-management-components>\n\n# Storage Class\nstorage_class: <storage class available in OpenShift>\n\n## You can set different storage class for logging.\n## By default it will use the value of storage_class.\n# elasticsearch_storage_class:\n\n## If you are installing on ROKS environment please update following settings\n## roks_enabled: set this to true\n## roks_url: Openshift public service endpoint URL\n## roks_user_prefix: User prefix used for users enabled on ROKS, Default value is 'IAM#'.\n## You can get users information from command 'oc get users'.\n## ROKS settings\nroks_enabled: false\nroks_url: <roks_url>\nroks_user_prefix: \"IAM#\"\n\n# default_admin_password:\n# password_rules:\n#   - '^([a-zA-Z0-9\\-]{32,})$'\n\n## You can disable following services if they are not needed\nmanagement_services:\n  # Common services\n  iam-policy-controller: enabled\n  metering: enabled\n  licensing: disabled\n  monitoring: enabled\n  nginx-ingress: enabled\n  common-web-ui: enabled\n  catalog-ui: enabled\n  mcm-kui: enabled\n  logging: disabled\n  audit-logging: disabled\n  system-healthcheck-service: disabled\n  multitenancy-enforcement: disabled\n\n  # mcm services\n  multicluster-hub: enabled\n  search: enabled\n  key-management: enabled\n  notary: disabled\n  cis-controller: disabled\n  vulnerability-advisor: disabled\n  mutation-advisor: disabled\n  sts: disabled\n  secret-encryption-policy-controller: disabled\n  image-security-enforcement: disabled\n\n\n")),Object(a.b)("p",null,"Here we will describe each of the relevant sections in the context of this doc."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"cluster_nodes")," - This section describes which nodes in your cluster the MCM components are allowed to run. The MCM Foundation components are split into three sections master, proxy and management. It is recommended that the master and proxy components run on the same nodes and that the management components run on dedicated nodes. The number of nodes you specify in each section determines the number of nodes that the work can be split across and will determine the level availability you can achieve. If you specify one node in each of the sections and that node goes down you will lose your ability to use MCM. If you have capacity it is a good idea to have multiple nodes in each section.")),Object(a.b)("p",null,"It is important to note that having the master nodes in the config.yaml does not\nmean you should add your OpenShift Master nodes in that section. It\nis ",Object(a.b)("strong",{parentName:"p"},"NOT")," recommended to run any of the MCM components on your\nOpenShift Master nodes."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"storage_class")," - The storage class is the dynamic storage class that the installer will use when creating persistent volumes. This storage class should be a ",Object(a.b)("inlineCode",{parentName:"p"},"block ")," storage provider. Generally faster disk is preferred.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"default_admin_password")," - The default_admin_password is the password that will be assigned the default admin user to authenticate to the MCM application. It is recommended that the password be set to a password that meets your organizations password requirements. Use the stanza below as an example:"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"default_admin_password: <your password>\npassword_rules:\n- '(.*)'\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"management_services")," - In the management_service section you can enable or disable some the MCM Foundation components that are available. The default values are generally sufficient for an MCM install. If you require the additional service you can enable them, but note that they may require additional capacity and customization not covered in this document. Note that the MCM services are enabled at the end of this section.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Additional considerations")," - If you want to deploy MCM in an highly available configuration you will want to add some additional sections to increase the number of replicas and enable persistance for each of the MCM Components. See the sample stanza below:"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"multicluster-hub:\n  global:\n    replicas: 3\n  etcd:\n    haMode: true\n    persistence: true\n    storageclassName: <your storage class>\n  core:\n    apiserver:\n      etcd:\n        haMode: true\n")),Object(a.b)("h2",null,"Offline Installation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1.")," Login to the OpenShift Install server."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2.")," Authenticate to the OpenShift server where you would like to install MCM (these can be copied from the OpenShift Console UI)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc login --token=<your_token> --server=<INSERT_SERVER_URL_HERE>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3.")," Navigate to the folder containing the line PPA archive package and extract and load the PPA Archive ( this may take ~10-20)"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"tar xf ibm-cp4mcm-core-1.3-x86_64.tar.gz -O | sudo docker load\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"tar xf ibm-cp4mcm-core-1.2-x86_64.tar.gz -O | sudo docker load\n")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4.")," Create a working directory"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir ibm-multicloud-manager ; cd ibm-multicloud-manager\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5.")," Extract the installation configuration files. We will modify these to customize our installation."),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run --rm -v $(pwd):/data:z -e LICENSE=accept --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.5 cp -r cluster /data\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run --rm -v $(pwd):/data:z -e LICENSE=accept --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.3 cp -r cluster /data\n")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6.")," Create your kubeconfig file for the installer to use"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc config view --raw > cluster/kubeconfig\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"7.")," Next we will need to update the ",Object(a.b)("strong",{parentName:"p"},"cluster_node")," sections with our clusters. You will need to add the nodes from your cluster. Use the exact node names from the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get nodes")," command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"8.")," Add the storage class for your cluster in the ",Object(a.b)("strong",{parentName:"p"},"storage_class")," field. The storage class must be a block storage provider. Use the exact node names from the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get sc")," command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"9.")," Update the ",Object(a.b)("strong",{parentName:"p"},"default_admin_password")," field with a suitable password"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"10.")," Define the ",Object(a.b)("strong",{parentName:"p"},"management_services"),"  appropriate to your install"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"11.")," Start the installation (this can run for ~30-45min)"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.5 install-with-openshift\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.3 install-with-openshift\n")))),Object(a.b)(p,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," The command above will fail if you have spaces in your directory path. Run ",Object(a.b)("inlineCode",{parentName:"p"},"pwd")," to verify your path and remove spaces, then re-run installation command.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"12.")," Connect to the MCM hub console using the ",Object(a.b)("inlineCode",{parentName:"p"},"icp-console")," route defined in OCP. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get routes -A")," command to get the domain. You can access the MCM Console via a browser with the icp-console domain and the credentials you specified in the config.yaml."),Object(a.b)("h2",null,"Online Installation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1.")," Log in to ",Object(a.b)("a",r({parentName:"p"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"MyIBM Container Software Library")," with the IBMid and password that are associated with the entitled software.\nIn the Entitlement keys section, copy the entitlement key. This key will be used in the steps to follow."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2.")," Authenticate to the OpenShift server where you would like to install MCM (these can be copied from the OpenShift Console UI)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc login --token=<your_token> --server=<INSERT_SERVER_URL_HERE>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3.")," Login to the public docker repo using your entitlement key"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"docker login cp.icr.io --username cp --password <your entitlement key>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4.")," Pull the mcm inception image"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"docker pull cp.icr.io/cp/icp-foundation/mcm-inception:3.2.5\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker pull cp.icr.io/cp/icp-foundation/mcm-inception:3.2.3\n")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5.")," Make a directory for the installation files."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir ibm-multicloud-manager ; cd ibm-multicloud-manager\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6.")," Extract installation files from the inception image"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run --rm -v $(pwd):/data:z -e LICENSE=accept --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.5 cp -r cluster /data\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run --rm -v $(pwd):/data:z -e LICENSE=accept --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.3 cp -r cluster /data\n")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"7.")," Create your kubeconfig file for the installer to use."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc config view --raw > cluster/kubeconfig\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"8.")," Change to the cluster directory."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"cd cluster\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"9.")," Customize config.yaml. Make sure to include the section below which tells the installer how to authenticate to the IBM entitled registry."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"image_repo: cp.icr.io/cp/icp-foundation\nprivate_registry_enabled: true\ndocker_username: cp\ndocker_password: <your entitlement key>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"10.")," Start the installatation process (this can run for ~30-45min)"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.5 install-with-openshift\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.3 install-with-openshift\n")))),Object(a.b)(p,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," The command above will fail if you have spaces in your directory path. Run ",Object(a.b)("inlineCode",{parentName:"p"},"pwd")," to verify your path and remove spaces, then re-run installation command.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"11.")," Connect to the MCM hub console using the ",Object(a.b)("inlineCode",{parentName:"p"},"icp-console")," route defined in OCP. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get routes -A")," command to get the domain. You can access the MCM Console via a browser with the icp-console domain and the credentials you specified in the config.yaml."),Object(a.b)("h2",null,"Uninstall"),Object(a.b)("p",null,"Run the following command to uninstall the CP"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(u,{label:"CloudPak v1.3",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.5 uninstall-with-openshift\n"))),Object(a.b)(u,{label:"CloudPak v1.2",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.3 uninstall-with-openshift\n")))),Object(a.b)("h2",null,"Additional Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_1.3.0/install/overview.html"},"Knowledge Center - MCM 1.3 Installation Guide"))))}O.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-mcm-install-index-mdx-27992fafa814bb532035.js.map