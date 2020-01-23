---
title: MCM Concepts
weight: 310
---
- 
{:toc}


# Intro to Application Management using MCM

## Concepts

MCM Manages applications by defining them as custom resource definitions in Kubernetes. By defining these resources we can install, delete and update resources on the managed MCM clusters. When these MCM resources are created the changes are applied on the target MCM cluster via the MCM Klusterlet.

In the next sections we will explore the different resources MCM provides.

## Channels

The channel resource defines the location of an resource to be deployed. These resources can be a Helm repository, Kubernetes namespace, Object store or Git repository.

The sample below describes a Channel the points to a HelmRepo.

```
kubectl create -f - <<EOF
apiVersion: v1
kind: Namespace
metadata: 
  name: google-deployables
---
apiVersion: app.ibm.com/v1alpha1
kind: Channel
metadata:
  name: google-incubator-repo
  namespace: google-deployables
spec:
    type: HelmRepo
    pathname: http://storage.googleapis.com/kubernetes-charts-incubator
EOF
```

Once the channel definition above has been applied you can get your channel.

```
oc get channels -n google-deployables
NAME                    TYPE       PATHNAME                                                    AGE
google-incubator-repo   HelmRepo   http://storage.googleapis.com/kubernetes-charts-incubator   3m41s
```

When the channel is created it will query the target HelmRepo and create MCM `deployables` for each of the Helm charts in the repo.

```
oc get deployables -n google-deployables
NAME                                                               TEMPLATE-KIND   TEMPLATE-APIVERSION    AGE     STATUS
google-incubator-repo-artifactory-5.2.1                            HelmRelease     app.ibm.com/v1alpha1   5m39s
google-incubator-repo-aws-alb-ingress-controller-0.1.12            HelmRelease     app.ibm.com/v1alpha1   5m38s
google-incubator-repo-azuremonitor-containers-2.5.0                HelmRelease     app.ibm.com/v1alpha1   5m43s
...
...
...
app.ibm.com/v1alpha1   5m43s
google-incubator-repo-tensorflow-inception-0.4.1                   HelmRelease     app.ibm.com/v1alpha1   5m45s
google-incubator-repo-vault-0.23.4                                 HelmRelease     app.ibm.com/v1alpha1   5m50s
google-incubator-repo-vaultingkube-0.1.2                           HelmRelease     app.ibm.com/v1alpha1   5m50s
google-incubator-repo-webpagetest-agent-0.2.0                      HelmRelease     app.ibm.com/v1alpha1   5m50s
google-incubator-repo-webpagetest-server-0.2.1                     HelmRelease     app.ibm.com/v1alpha1   5m38s
google-incubator-repo-xray-0.3.2                                   HelmRelease     app.ibm.com/v1alpha1   5m49s
```

You can see that all the Helm charts are now available as `deployables` and are available to be deployed using MCM.











MCM channel documentation

https://www.ibm.com/support/knowledgecenter/en/SSFC4F_1.2.0/mcm/applications/managing_channels.html
