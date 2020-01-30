---
title: Prerequisites - OpenShift 4.x
weight: 250
---

# Prerequisites

OpenShift 4.x Compute Requirements:

|Machine|Operating System|vCPU|RAM|Storage|
| ---- | ---- | ---- | ---- | ---- |
| Bootstrap | RHCOS | 4 | 16 GB | 120 GB |
| Control Plane | RHCOS | 4 | 16 GB | 120 GB |
| Compute | RHCOS or RHEL 7.6 | 2 | 8 GB | 120 GB |



OpenShift 4.x Network Requirements

1. DHCP - required for VMs to obtain itinital ignition config from bootstrap host
2. DNS - The following DNS entries are required to be in place prior to deployment

| Component      | Record                                              | Description                                                  |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Kubernetes API | api.<cluster_name>.<base_domain>                    | This DNS record must point to the load balancer for the control plane machines. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster. |
| Kubernetes API | api-int.<cluster_name>.<base_domain>                | This DNS record must point to the load balancer for the control plane machines. This record must be resolvable from all the nodes within the cluster. |
| Routes         | *.apps.<cluster_name>.<base_domain>                 | A wildcard DNS record that points to the load balancer that targets the machines that run the Ingress router pods, which are the worker nodes by default. This record must be resolvable by both clients external to the cluster and from all the nodes within the cluster. |
| etcd           | etcd-<index>.<cluster_name>.<base_domain>           | OpenShift Container Platform requires DNS records for each etcd instance to point to the control plane machines that host the instances. The etcd instances are differentiated by <index> values, which start with **0** and end with **n-1**, where **n** is the number of control plane machines in the cluster. The DNS record must resolve to an unicast IPv4 address for the control plane machine, and the records must be resolvable from all the nodes in the cluster. |
| etcd           | \_etcd-server-ssl._tcp.<cluster_name>.<base_domain> | For each control plane machine, OpenShift Container Platform also requires a SRV DNS record for etcd server on that machine with priority `0`, weight `10` and port `2380`. A cluster that uses three control plane machines requires the following records: |
|                |                                                     | \_etcd-server-ssl._tcp.<cluster_name>.<base_domain>  86400 IN    SRV 0        10     2380 etcd-0.<cluster_name>.<base_domain>. |
|                |                                                     | \_etcd-server-ssl._tcp.<cluster_name>.<base_domain>  86400 IN    SRV 0        10     2380 etcd-1.<cluster_name>.<base_domain>. |
|                |                                                     | \_etcd-server-ssl._tcp.<cluster_name>.<base_domain>  86400 IN    SRV 0        10     2380 etcd-2.<cluster_name>.<base_domain>. |

3. Firewall (From all machines to all machines)

| **Protocol** | Port          | Description                                                  |
| ------------ | ------------- | ------------------------------------------------------------ |
| TCP          | `2379-2380`   | etcd server, peer, and metrics ports                         |
| TCP          | `6443`        | Kubernetes API                                               |
| TCP          | `9000-9999`   | Host level services, including the node exporter on ports `9100`-`9101` and the Cluster Version Operator on port `9099`. |
| TCP          | `10249-10259` | The default ports that Kubernetes reserves                   |
| TCP          | `10256`       | openshift-sdn                                                |
| UDP          | `4789`        | VXLAN and GENEVE                                             |
| UDP          | `6081`        | VXLAN and GENEVE                                             |
| UDP          | `9000-9999`   | Host level services, including the node exporter on ports `9100`-`9101`. |
| UDP          | `30000-32767` | Kubernetes NodePort                                          |

4. Firewall (LoadBalancer)

| Port | Machines | Internal | External | Description |
| ---- | -------- | -------- | -------- | -------- |
| `6443` | Bootstrap and control plane. You remove the bootstrap machine from the load balancer after the bootstrap machine initializes the cluster control plane. | x | x | Kubernetes API server |
| `22623` | Bootstrap and control plane. You remove the bootstrap machine from the load balancer after the bootstrap machine initializes the cluster control plane. | x |          | Machine Config server |
| `443` | The machines that run the Ingress router pods, compute, or worker, by default. | x | x | HTTPS traffic |
| `80` | The machines that run the Ingress router pods, compute, or worker by default. | x | x | HTTP traffic |

