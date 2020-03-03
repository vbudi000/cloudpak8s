---
title: Cloud Pak for Integration + Cloud Pak for Application  Prerequisites
weight: 200
---
- 
{:toc}
### Cloud Pak for Application Prerequisites
* Refer to Knowledge Center [prerequisites](https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html) for details on what is required before starting an install.
* Refer to [OpenShift Container Platform section](../../ocp/prerequisites/) for prerequisites on installing a cluster.
* Refer to [tools installation](../../cp4a_install_dev_tools_mac/) for prerequisites for developer client install.
* Sizing information is also available in the [prerequisites](https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html)

### Cloud Pak for Integration Prerequisites
* Refer to Knowledge Center [prerequisites](https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html) for details on what is required before starting an install.
* Refer to [OpenShift Container Platform section](../../ocp/prerequisites/) for prerequisites on installing a cluster.
* Sizing information is also available in the [prerequisites](https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html)

## Multipak (Integration + Application + Automation) Residency minimum requirement:
| Node | #| CPU | RAM | DISK 1 |DISK 2 | DISK 3 |
| :---------- | :------: | :-------: | :---: | :----: | :----: | :----: |
| Bootstrap | 1 | 4 | 16 | 100 | | |
| Installer | 1 | 4 | 16 | 120 | | |
| LB | 1 | 4 | 16 |120 | | |
| Master | 3 | 16 | 32 | 300 | | |
| Compute | 8 | 16 | 64 | 200|  |  |
| Storage | 3 | 4 | 16 | 200 | 500 |  |
| NFS | 1 | 2 | 8 | 500 |  |  |

## Multipak (Integration + Application + Automation) installation
1. Install cloud Pak for Integration: [step-by-step](../integration/introduction)
2. Before Installing Cloud Pak for Application
    1. Possible Storage issues: 
        1. Cloud Pak for Application installer will use the default storage class. If not set up correctly CouchDB will fail.
  Cloud Pak for Application Transformation Advisor (TA) component needs ReadWriteMany storage which means we need one NFS volume available
        2. There should be an option to choose storage class in config.yaml. This option does not exist at this time
    2. Solution:
        1. Create one NFS export on NFS server
        2. Create a  RWX PV on the cluster
        3. Change storage class name in the TA Operator Definition, so it uses NFS
            1. ``` oc edit crd transadvs.charts.ta.cloud.ibm.com ```
            2. This will however be overwritten by later release
            3. Only alternative is to change default storage class
        6. Note: Installer will still say completed even if TA fails
3. Install Cloud Pak for Application: details [step-by-step](../application/introduction)

## IBM Knowledge Center Link

   
   [System requirements for Cloud Pak for Data in an existing IBM Cloud Private installation](https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_2.1.0/com.ibm.icpdata.doc/zen/install/reqs-exist-icp-inst.html)
   
   [Installing Cloud Pak for Data on managed Red Hat OpenShift on IBM Cloud](https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_2.1.0/com.ibm.icpdata.doc/zen/install/openshift-softlayer.html)
