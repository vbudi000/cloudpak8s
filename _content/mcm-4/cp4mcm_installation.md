---
title: "Installation Guide"
weight: 400
---
- 
{:toc}

# Overview

**This page contains installation instructions for CP4MCM components.**

# Install Multicloud Manager Hub (MCM)

General Process:
1. Cloud Pak Common Services installation
   1. 
   2. Download the cloud pak installation file from Docker registry
   3. Load the MCM images into OCP local docker registry
   4. Extract 
2. 

The Multicloud Manager can be installed as part of the Cloud Pak Common Services installation. Follow the generic [CloudPak Common Services installation guide]({{ site.github.url }}/mcm/cp4mcm_managed_ocp_installation#common-services-installation-for-mcm), but modify the `config.yaml` file with the following MCM specific requirements:

- Define the following cluster as `false` in `config.yaml`. This setting causes the MCM install. If the setting is `true` then MCM is not installed.
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

# Install Cloud Automation Manager (CAM)

# Install Cloud Application Management (iCAM)