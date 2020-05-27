<h1 align="center">
IBM Cloud Pak Playbook
</h1>

<p align="left">
    <a href="https://github.ibm.com/CASE/cp4mcm-bootcamp/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="The IBM Cloud Pak Playbook is released under the Apache-2.0 license" />
    <a href="https://travis-ci.org/github/ibm-cloud-architecture/cloudpak8s"><img src="https://travis-ci.org/ibm-cloud-architecture/cloudpak8s.svg?branch=master" alt="Travis"></a>
  </a>
</p>

Click on the **build** icon above to see the status of the latest web site build.

## IBM Cloud Pak Playbook

This repo and site describes field experiences installing IBM Cloud Paks on Red OpenShift 4 platforms.

 The live site can be viewed here:  https://cloudpak8s.io/

## Contributing to the Repo

Follow the procedure described in the Contribution Guide at http://cloudpak8s.io/contribute/. Submit PRs and someone will review and approve your request.  

Your content will generally be under the `src/pages` subdirectory:

   - CP For Automation: `automation`
   - CP For Integration: `integration`
   - CP For Data: Coming Soon
   - CP For MultiCloud Management: `mcm`
   - CP For Applications: `apps`
   - CP For Security: `security`
   - Multiple Cloud Pak Scenarios: `multipak`
   - Installing OpenShift: `ocp`

The text of the content under each of the sections above is contained in markdown `index.mdx` files under the appropriate directory. In each `index.mdx` file, the `title` content, shown below, controls what is displayed in the black title bar of the page.

```
---
title: First Content
weight: 100
---

Pithy first content
```
