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

## Online Installation

## Offline Installation

Follow the Cloud Pak Common Services
[CloudPak Common Services](https://pages.github.ibm.com/CASE/cloudpak-onboard-residency/ocp/CloudPak_Common_Services_Installation/) Installation Guide, but modify the `config.yaml` file for MCM specific requirements:

- Change the following line to `false` in `config.yaml`. This setting causes the MCM install. If the setting is `true` then MCM is not installed.
```
single_cluster_mode: false
```
- Define the following management_services in `config.yaml`
```
management_services:
  auth-idp: enabled
  auth-pap: enabled
  auth-pdp: enabled
  tiller: enabled
  cert-manager: enabled
  mongodb: enabled
  nginx-ingress: enabled
  catalog-ui: enabled
  icp-management-ingress: enabled
  platform-ui: enabled
  security-onboarding: enabled
  secret-watcher: enabled
  oidcclient-watcher: enabled
  helm-repo: enabled
  mgmt-repo: enabled
  helm-api: enabled
  web-terminal: enabled
  key-management: enabled
  multicluster-hub: enabled
  logging: disabled:
  custom-metrics-adapter: disable
```

## Additional Resources
* <a href="https://www.ibm.com/support/knowledgecenter/SSFC4F_1.1.0/cp/installing/cloud_pak_foundation.html">Knowledge Center - MCM Installation Guide</a>
