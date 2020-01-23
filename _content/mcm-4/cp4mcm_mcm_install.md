---
title: "Installation Guide - Multicloud Manager Hub (MCM)"
weight: 300
---
- 
{:toc}

## Overview

In this section we will walk throught the installation of the MCM component of the Cloud Pak for Multicloud Management. This document is specifically written for installations on Red Hat OpenShift 4.2 running on an x86 architecture. The purpose of this document is to be agnostic. In other words.... MCM reqiures OpenShift 4.2 to be installed we don't care if it is on-prem on in the cloud or bare-metal or virtual machines. In the sections below we will discuss the Online vs Offline install, both of which are very similar with differences in the location of the MCM installation images.

### Prerequisites

This document does not describe how to install or configure the underlying OpenShift platform. So prior to installing make sure you have a working OpenShift cluster with the required capacity.

- Check the requirements doc to make sure you have size your cluster appropriately and you have capacity
- For offline installs make sure you have downloaded the Cloud Pak for Multicloud Management Passport Advantage Archive (PPA) file (see requirements) and copied it to the installation server
- For online installs make sure you have an entitlement key to access the IBM Entitled Docker Registry
- The installation is performed from the Command line (CLI) so you will need the reqiured CLI tools to interface with the cluster. Instructions on setting up the required CLI tools here: https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html
- Offline installation will require the docker client install on the installation server


## Online Installation

<< Need this information from Venkat?>>

## Offline Installation

All of the commands below should be executed from the OpenShift Install server.

1. Login to the OpenShift Install server.

2. Authenticate to the OpenShift server where you would like to install MCM (these can be copied from the OpenShift Console UI)

```
oc login --token=<your_token> --server=<INSERT_SERVER_URL_HERE>
```

3. Navigate to the folder containing the line PPA archive package and extract and load the PPA Archive ( this may take ~10-20)

```
tar xf ibm-cp4mcm-core-1.2-x86_64.tar.gz -O | sudo docker load
```

4. Create a working directory 
```
sudo mkdir /opt/mcm; cd /opt/mcm
```

5. Extract the installation configuration files. We will modify these to customize our installation.

```
sudo docker run --rm -v $(pwd):/data:z -e LICENSE=accept --security-opt label:disable cp.icr.io/cp/icp-foundation/mcm-inception:3.2.3 cp -r cluster /data
```

6. Create your kubeconfig file for the installer to use
```
oc config view > cluster/kubeconfig
```

7. Next we will need to update the **cluster_node** sections with our clusters. You will need to add the nodes from your cluster





6. Get the OCP worker node names. The node names are used to identify the `master`, `proxy` and `management` nodes.
```
oc get nodes
```

8. Edit the config.yaml file and update the  `master`, `proxy` and `management` nodes with the OCP worker node names previously identified.

```
 cluster_nodes:
   master:
     - <IP_OR_DNS_NAME_HERE>
   proxy:
     - <IP_OR_DNS_NAME_HERE>
   management:
     - <IP_OR_DNS_NAME_HERE>
```
9. Identify a dynamic storage class in the list returned from the following command.
```
oc get sc
```
10. Update the config.yaml file with the identified storage_class name.
```
storage_class: <BLOCK_STORAGE_NAME>
```
11. Update the password and rules in config.yaml.
```
default_admin_password: admin
password_rules:
 - '(.*)'
```

14. Define the management_services in `config.yaml` appropriate to your Cloud Pak. Refer to the management services enablement defaults listed later in this document.

15. Install the Cloud Pak Common Services.
```
docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.3 install-with-openshift
```
16. Connect to the MCM hub console using the `icp-console` information from the `config.yaml`





### Configuring your installation

This section will attempt to describe the options available for the MCM Installation.

Below is the config.yaml extracted from the inception image:
```
# Licensed Materials - Property of IBM
# IBM Cloud private
# @ Copyright IBM Corp. 2019 All Rights Reserved
# US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.

---

# A list of OpenShift nodes
cluster_nodes:
  master:
    - <your-openshift-dedicated-node-to-deploy-master-components>
  proxy:
    - <your-openshift-dedicated-node-to-deploy-proxy-components>
  management:
    - <your-openshift-dedicated-node-to-deploy-management-components>

# Storage Class
storage_class: <storage class available in OpenShift>

## You can set different storage class for logging.
## By default it will use the value of storage_class.
# elasticsearch_storage_class:

## If you are installing on ROKS environment please update following settings
## roks_enabled: set this to true
## roks_url: Openshift public service endpoint URL
## roks_user_prefix: User prefix used for users enabled on ROKS, Default value is 'IAM#'.
## You can get users information from command 'oc get users'.
## ROKS settings
roks_enabled: false
roks_url: <roks_url>
roks_user_prefix: "IAM#"

# default_admin_password:
# password_rules:
#   - '^([a-zA-Z0-9\-]{32,})$'

## You can disable following services if they are not needed
management_services:
  # Common services
  iam-policy-controller: enabled
  metering: enabled
  licensing: disabled
  monitoring: enabled
  nginx-ingress: enabled
  common-web-ui: enabled
  catalog-ui: enabled
  mcm-kui: enabled
  logging: disabled
  audit-logging: disabled
  system-healthcheck-service: disabled
  multitenancy-enforcement: disabled

  # mcm services
  multicluster-hub: enabled
  search: enabled
  key-management: enabled
  notary: disabled
  cis-controller: disabled
  vulnerability-advisor: disabled
  mutation-advisor: disabled
  sts: disabled
  secret-encryption-policy-controller: disabled
  image-security-enforcement: disabled


```

Here we will describe each of the relevant sections in the context of this doc.

- **cluster_nodes** - This section describes which nodes in your cluster the MCM components are allowed to run. The MCM Foundation components are split into three sections master, proxy and management. It is recommended that the master and proxy components run on the same nodes and that the management components run on dedicated nodes. The number of nodes you specify in each section determines the number of nodes that the work can be split across and will determine the level availability you can achieve. If you speficy one node in each of the sections and that node goes down you will lose your ability to use MCM. If you have capacity it is a good idea to have multiple nodes in each section.

It is import to note that the master nodes in the config.yaml does not mean you should add your OpenShift Master nodes in that section. It is **NOT** recommended to run any of the MCM components on your OpenShift Master nodes.

- **storage_class** - The storage class is the dynamic storage class that the installer will use when creating persistant volumes. This storage class should be a `block ` storage provider. Generally faster disk is preferred. 

- **default_admin_password** - The default_admin_password is the password that will be assigned the default admin user to authenticate to the MCM application. It is recommended that the password be set to a password that meets your organizations password requirements. Use the stanza below as an example:

```
default_admin_password: <your password>
password_rules:
- '(.*)'
```

- **management_services** - In the mangement_service section you can enable or disable some the MCM Foundation components that are available. The default values are generally sufficient for an MCM install. If you require the additional service you can enable them, but note that they may require additional capacity and customization not covered in this document. Note that the MCM services are enabled at the end of this section.

- **Additional considerations** - If you want to deploy MCM in an highly available configuration you will want to add some additional sections to increase the number of replicas and enable persistance for each of the MCM Components. See the sample stanza below:

```
multicluster-hub:
  global:
    replicas: 3
  etcd:
    haMode: true
    persistence: true
    storageclassName: <your storage class>
  core:
    apiserver:
      etcd:
        haMode: true
```






## Additional Resources
* <a href="https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/install/overview.html">Knowledge Center - MCM 1.2 Installation Guide</a>
