---
title: Cloud Pak for Application + Cloud Pak for Integration Prerequisites
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


## Multipak (Application + Integration) Residency minimum requirement:

| Node | #| CPU |
| :---------- | :-----------------------------: | :------------------------------------------------: |
| Number of hosts | 1 | 1 |
| Cores | 16 | 16 |
| CPU | >=2.4 GHz | >=2.4 GHz |
| RAM | 32 GB | 32 GB |
| Free disk space to install | >=200 GB | >=150 GB |

| Node | #| CPU | RAM | DISK 1 |DISK 2 | DISK 3 |
| :---------- | :------: | :-------: | :---: | :----: | :----: | :----: |
| 1| 2| 3| 4| 5| 6| 7 |
| Bootstrap | 1 | 4 | 16 | 100 | | |
| Installer | 1 | 4 | 16 | 120 | | |
| LB | 1 | 4 | 16 |120 | | |
| Master | 3 | 16 | 32 | 300 | | |
| Compute | 8 | 16 | 64 | 200|  |  |
| Storage | 3 | 4 | 16 | 200 | 500 |  |
| NFS | 1 | 2 | 8 | 500 |  |  |


## Multipak (Application + Integration) installation
1. Install cloud Pak for Application: [step-by-step](../application/introduction)
2. Before Installing Cloud Pak for Integration
    1. Possible Helm related issue:
        1. Helm is already used by Cloud Pak for Application. 
        2. When Cloud Pak for Integration is trying to install on the same cluster and find same CRD for certificates, installation fails
            1. Running an install after a failed partial install will lead to failure on the ICP creation in kube-system, due to missing secrets. 
    2. Solution:
        1. There is a common component (a certificate) between CP for Integration and CP for Application that causes the CP for Integration installer to fail. 
        2. Run complete uninstall before reinstalling.
            1. The uninstaller removes common component and allows the full install to run.
            2. Uninstall may hang. To solve, check for pods stuck in terminating state and do a force delete:
                1. ``` oc get pods --all-namespaces | grep Terminating ```
                2. ``` oc delete pod <pod name> -n <project-name> --force --grace-period=0 ```
3. Install Cloud Pak for Application: details [step-by-step](../integration/introduction)