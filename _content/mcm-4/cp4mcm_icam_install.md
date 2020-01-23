---
title: "Installation Guide - Cloud Application Management (iCAM)"
weight: 500
---
- 
{:toc}

## Overview

*This page contains installation instructions for Cloud Application Management (iCAM) on OCP 4.0+.*

### Prerequisites
* **OCP 4.0+**
* **Install CLI Tools**
  - Helm CLI
  - Kubernetes CLI
  - IBM Cloud Pak CLI

Download and install the `Helm` and `Cloudctl` client binaries if not already installed.

Log into your MCM web console, and on the welcome page the `Install CLI tools` button is displayed. Click the button and follow the instructions to download and configure it. The `helm` client can be configured automatially after running `cloudctl login`.
  
For more CLI install help, check out the Knowledge Center guides <a href="https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/cli/cli_guide_mcm.html">here</a>.

* [Install MCM]({{ site.github.url }}/mcm-4/cp4mcm_mcm_install/)

## Online Installation

## Offline Installation
**1. Download the Cloud Application Management Archive file**

|         File Name         | Part Number |
| :-----------------------: | :------ |
| icp-docker-18.09.7_x86_64.bin | CC3KUEN | 

   There are 3 different locations to download install package.

   - **[IBM Passport Advantage](https://www.ibm.com/software/passportadvantage/)** for customer.
   - **[Software Sellers Workplace](https://w3-03.ibm.com/software/xl/download/ticket.do)** for all IBMers.
   - Artifactory repository for developers

   To download the latest PPA file from artifactory, run following command:
   ```
   curl -H 'X-JFrog-Art-Api:<Artifactory_API_Key>' -O "https://na.artifactory.swg-devops.com/artifactory/perfmgmt-helm-generic-local/ppa/incubator/ppa_\<Latest Timestamp\>_prod.tar.gz"
   ```
   
   You can get `<Artifactory_API_Key` by clicking your login name on the upper right corner of web page after logging into artifactory.
   
   **2.** Create a `cluster` directory and move the ppa into the new directory
   ```
   mkdir cluster
   cd cluster
   mv <PACKAGE_NAME> .
   ```
   **3.** Use admin access to login to the MCM console
   ```
   cloudctl login -a <MY_CLUSTER_URL> -n kube-system --skip-ssl-validation
   ```
   Where < my_cluster_URL > is the name that you defined for your cluster.
   
   **Ex.** `https://cluster_address:443`, where cluster_address looks something like `icp-console.apps.hostname-icp-mst.domain.com`
   For future reference to the console use the value for cluster_address.

   **4.** Login to OCP as an administrator:
   ```
   oc login
   ```
   **5.** Login to the OCP Docker registry:
   ```
   docker login $(oc registry info) -u $(oc whoami) -p $(oc whoami -t)
   ```
   **6.** Load the installation image into IBM's Docker Registry:
   ```
   cloudctl catalog load-archive --archive ./icam_ppa_2019.4.0_prod.tar.gz  --registry $(oc registry info)/kube-system
   ```
   where `icam_ppa_2019.4.0_prod.tar.gz` is the compressed iCAM installation image.

   **7.** Extract the Helm charts into the *cluster* directory created earlier:
   ```
   cd cluster
   tar -xvf ./icam_ppa_2019.4.0_prod.tar.gz  charts 
   tar -xvf ./charts/ibm-cloud-appmgmt-prod-1.6.0.tgz
   ```
   The command specifies the /charts/ directory to prevent extracting all images and potentially causing space issues.
   
   **8.** Go to the `ibm-cloud-appmgmt-prod` directory
   ```
   cd icam_install/ibm-cloud-appmgmt-prod
   ```
   **9.** Create the iCAM ingress TLS and client secrets:
   ```
   ./ibm_cloud_pak/pak_extensions/lib/make-ca-cert-icam.sh <CLOUD_PROXY_FQDN> my_release_name \
   kube-system icam-ingress-tls icam-ingress-client icam-ingress-artifacts
   ```
   Where `<CLOUD_PROXY_FQDN>` is the FQDN of your MCM Proxy, and `<MY_RELEASE_NAME>` is the name of the MCM Helm Chart, i.e. `ibmcloudappmgmt`.

   * **OPTIONAL** If you want to create a superuser for your Cassandra database, you can create an auth secret. If you do not create a new user it will be generated for you.

   * For optimal security, first create a text file with the new password, i.e. `cassandra-pass-file.txt`. Then, run the following commands: 
   ```
   kubectl create secret generic <MY_RELEASE_NAME>-cassandra-auth-secret -n kube-system 
   --from-literal=username=INSERT_NEW_SUPERUSER_HERE \
   --from-literal=password=$(cat cassandra-pass-file.txt)
   ```
   Where `<MY_RELEASE_NAME>` is the name for your MCM release (i.e. `ibmcloudappmgmt`)
   
   **10.** Prepare Persistent Storage
   
   Unless your storage class can handle 5000 IO Operations per second, IBM recommends setting up Persistant Storage backed by local disks or partitions.
   
   For help configuring persistent storage, see [Understanding Kubernetes Storage](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.2.1/manage_cluster/kub_storage.html)

   **11.** Log in to the console UI of your target cluster.

   **12.** Click Catalog in the Upper right-hand corner

   **13.** Click Configure

   **14.** Configure the helm chart configuration parameters under **Configuration**.

   For configuration parameters, reference [Table 1](https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_server_script_full_monitoring.html?cp=SSFC4F_1.2.0#task_install_mcm_server_script__d441e497) in the Knowledge Center iCAM workbook.

   **16.** Click **Install** to deploy the *ibm-cloud-appmgmt-prod* Helm chart.

## Post Installation

Now that your iCAM instance is successfuly installed, you can register with OIDC.

**1.** In your MCM console, select **Monitor Health** > **Helm Releases**, then select the release name that you gave for iCAM.

**2.** Scroll to the notes section at the bottom of your release and complete **Step 3 (OIDC Registration)** of the *Notes* section. Run the two **kubectl** commands that are displayed there.

**Command 1** registers your iCAM instance with OIDC, and **Command 2** adds two policy registrations.

## Next Steps

Next, you can deploy the **ICAM Klusterlet** to monitor applications in your MCM environment. For more information, see [Installing the ICAM klusterlet on the managed cluster](https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet.html?cp=SSFC4F_1.2.0) guide for installing via the helm chart, or check out [Installing the ICAM klusterlet on the managed cluster without helm](https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_klusterlet_no_helm.html?cp=SSFC4F_1.2.0) for a non-helm installation.

## Additional Resources

[Knowledge Center - iCAM](https://www.ibm.com/support/knowledgecenter/SS8G7U_19.4.0/com.ibm.app.mgmt.doc/content/install_mcm_server_script_full_monitoring.html?cp=SSFC4F_1.2.0)