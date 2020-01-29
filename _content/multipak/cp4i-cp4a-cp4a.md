---
title: Cloud Pak for Application + Cloud Pak for Integration + Cloud Pak for Automation  Prerequisites
weight: 200
---

### Cloud Pak for Application Prerequisites
* Refer to Knowledge Center [prerequisites](https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html) for details on what is required before starting an install.
* Refer to [OpenShift Container Platform section](../../ocp/prerequisites/) for prerequisites on installing a cluster.
* Refer to [tools installation](../../cp4a_install_dev_tools_mac/) for prerequisites for developer client install.
* Sizing information is also available in the [prerequisites](https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html)

### Cloud Pak for Integration Prerequisites
* Refer to Knowledge Center [prerequisites](https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html) for details on what is required before starting an install.
* Refer to [OpenShift Container Platform section](../../ocp/prerequisites/) for prerequisites on installing a cl≠≠uster.
* Sizing information is also available in the [prerequisites](https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html)


### Cloud Pak for Automation Prerequisites
* Refer to Knowledge Center [prerequisites](https://supportcontent.ibm.com/support/pages/ibm-cloud-pak-automation-detailed-system-requirements) for details on what is required before starting an install.
* Refer to [OpenShift Container Platform section](../../ocp/prerequisites/) for prerequisites on installing a cluster.
* Sizing information is also available in the [prerequisites](https://www.ibm.com/support/knowledgecenter/SSYHZ8_19.0.x/welcome/kc_welcome_dba_distrib.html)


## Multipak (Application + Integration + Automation) Residency minimum requirement:
| Node | # | CPU | RAM | DISK 1 | DISK 2 | DISK 3 |
|------------|---|----|----|------|------|------|
| Installer | 1 | 4 | 16 | 100 | |  |
| Bootstrap | 1 | 4 | 16 | 100 |  | |
| LB | 1 | 4 | RAM | | | |
| Master | 3 | 4 | 16 | 100 | | |
| Compute | 8 | 16 | 62 | |  |  |
| Storage | 3 | 16 | 62 |  |  |  |
| NFS | 3 | CPU | RAM |  |  |  |


## Configuration used for the Residency

- For this residency 11 workers nodes each with 8 cores and 32 GB of memory were requested for the managed OCP instance
- For on-prem vmware environment had a similar configuration with 11 worker nodes and 2 storage nodes



## Multipak (CP4I + CP4A + CP4A) installation
1. Install cloud Pak for Integration: [step-by-step] (../integration/introduction)
2. Before Installing Cloud Pak for Application
    1. Possible Storage issues: 
  ICPA installer will use the default storage class. If not set up correctly CouchDB will fail.
  Cloud Pak for Application Transformation Advisor (TA) component needs ReadWriteMany storage which means we need one NFS volume available
  There should be an option to choose storage class in config.yaml which does not exist yet
    2. Solution:
        1. Created NFS export on NFS server
        2. Created RWX PV on cluster
        3. Changed storage class name in the TA Operator Definition, so it uses NFS
        ``` oc edit crd transadvs.charts.ta.cloud.ibm.com ```
            1. This will however be overwritten by later release
            2. Only alternative is to change default storage class
        6. Note: Installer will still say completed even if TA fails
3. Install Cloud Pak for Application: details [step-by-step] (../application/introduction)
4. Before installing Cloud Pak for Automation
5. Install Cloud Pak for Automation: details [step-by-step] (../automation/introduction)

## IBM Knowledge Center Link

   
   [System requirements for Cloud Pak for Data in an existing IBM Cloud Private installation](https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_2.1.0/com.ibm.icpdata.doc/zen/install/reqs-exist-icp-inst.html)
   
   [Installing Cloud Pak for Data on managed Red Hat OpenShift on IBM Cloud](https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_2.1.0/com.ibm.icpdata.doc/zen/install/openshift-softlayer.html)
