---
title: Install User Management Service
weight: 320
---
- 
# make sure there is a space after the - so that the TOC is generated
{:toc}

### Prepare the UMS database

```
su - db2inst1
db2 create database umsdb automatic storage yes using codeset UTF-8 territory US pagesize 32768;
db2 connect to umsdb
db2 list applications
exit
```

### Create the UMS and database secrets

- Copy this [`ums-secret.yaml`]({{ site.github.url }}/assets/automation/ums/ums-secret.yaml) template file in your working directory and update it as needed. In particular, update the user and password for the DB2 database. You may want to also change UMS admin user name and password.

- Create the secrets:
```
oc create -f ums-secret.yaml
```

### Deploy UMS

- To update the operator configuration, copy this [`my_ibm_cp4a_cr_1.yaml`]({{ site.github.url }}/assets/automation/ums/my_ibm_cp4a_cr_1.yaml) template file in your working directory and update it as needed. You can highlight the UMS configuration sections that need your attention by doing a diff with the base template file found in [`my_ibm_cp4a_cr_0.yaml`]({{ site.github.url }}/assets/automation/operator/my_ibm_cp4a_cr_0.yaml)

- Apply the updated custom resource definition file:
```
oc apply -f my_ibm_icp4a_cr_1.yaml
```

### Test that UMS is up

Connect to `https://<ums-route>/ums` with the administrator login you have defined in the `ums-secret.yaml` file. You should also be able to login with the credentials for any user defined in the LDAP directory.

The `<ums-route>` is the hostname that you have provided under the `ums_configuration` in the `my_ibm_cp4a_cr_1.yaml` configuration file.
