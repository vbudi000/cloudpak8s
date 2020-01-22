---
title: "Installation Guide - Multicloud Manager Hub (MCM)"
weight: 300
---
- 
{:toc}

## Overview

*This page contains installation instructions for Multicloud Manager Hub (MCM) on OCP 4.0+.*

### Prerequisites

* **OCP 4.0+**
* **Install CLI Tools**
  - Helm CLI
  - Kubernetes CLI
  - IBM Cloud Pak CLI
  ```
  curl -kLo cloudctl https://icp-console.apps.res-cp4mcm.ocp.csplab.local/api/cli/cloudctl-darwin-amd64
  ```
  For CLI install help, check out the Knowledge Center guides <a href="https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html">here</a>.
  * **Docker Client**

## Online Installation

## Offline Installation

See example `config.yaml` file here

**1. Download the install file** from Passport Advantage (PPA):

|         File Name         | Part Number |
| :-----------------------: | :------ |
| ibm-cp4mcm-core-1.2-x86_64.tar.gz | PART_NUMBER |

2. Login to the OCP Cluster.
```
oc login --token=<your_token> --server=<INSERT_SERVER_URL_HERE>
```
3. Load the container images into the local docker registry.
```
tar xf ibm-cp4mcm-core-1.2-x86_64.tar.gz -O | sudo docker load
```
4. Create a working directory as the root user.
```
mkdir /opt/mcm; cd /opt/mcm
```
5. Extract the installer configuration files becuase they need to be modified.
```
sudo docker run --rm -v $(pwd):/data:z -e LICENSE=accept --security-opt label:disable ibmcom/icp-inception-amd64:3.2.1-rhel-ee cp -r cluster /data
```
6. Get the OCP worker node names. The node names are used to identify the `master`, `proxy` and `management` nodes.
```
oc get nodes
```
7. Create the kubeconfig file in the . 
```
export KUBECONFIG=/opt/mcm/cluster/kubeconfig
oc login --token=<your_token> --server=<INSERT_SERVER_URL_HERE>
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
12. Get the unique domain name of the OCP cluster. The following command shows the current routes with the domain names. You will use the domain name to update the config.yaml.
```
oc -n default get routes|awk '{print $2}'
```
13. Update the config.yaml with the `openshift.console.host` `openshift.console.port` provided. Update the `openshift.router.proxy_host` and `openshift.router.cluster_host` with the domain name.
```
openshift:
    console:
        host: c100-e-us-east-containers-cloud-ibm-com
        port: 32653
    router:
        cluster_host: 
        icp-console.<CHANGE_URL_HERE>
        proxy_host: 
        icp-proxy.<CHANGE_URL_HERE>
```
14. Define the management_services in `config.yaml` appropriate to your Cloud Pak. Refer to the management services enablement defaults listed later in this document.

15. Install the Cloud Pak Common Services.
```
docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/mcm-inception-amd64:3.2.3 install-with-openshift
```
16. Connect to the MCM hub console using the `icp-console` information from the `config.yaml`

## Additional Resources
* <a href="https://www.ibm.com/support/knowledgecenter/SSFC4F_1.1.0/cp/installing/cloud_pak_foundation.html">Knowledge Center - MCM Installation Guide</a>
