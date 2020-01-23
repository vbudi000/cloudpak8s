---
title: Install Business Automation Studio
weight: 330
---
- 
# make sure there is a space after the - so that the TOC is generated
{:toc}


### Create the Playback Engine database

```
su - db2inst1
db2 create database aaedb automatic storage yes using codeset UTF-8 territory US pagesize 32768
db2 connect to aaedb

## The following grant is used for databases without enhanced security.
## aaedbuser is the username that App Engine uses to connect to the database
db2 grant dbadm on database to user aaedbuser

db2 connect reset
exit
```

### Create the BAS database

```
su - db2inst1
db2 create database basdb automatic storage yes using codeset UTF-8 territory US pagesize 32768
db2 connect to basdb

## A user temporary tablespace is required to support stored procedures in BPM.
$ db2 CREATE USER TEMPORARY TABLESPACE USRTMPSPC1
$ db2 UPDATE DB CFG FOR basdb USING LOGFILSIZ 16384 DEFERRED
$ db2 UPDATE DB CFG FOR basdb USING LOGSECOND 64 IMMEDIATE
$ db2 grant dbadm on database to user basuser
$ db2 connect reset
$ exit
```

### Create the BAS secrets

- Copy this [`rr-secret.yaml`]({{ site.github.url }}/assets/automation/bas/rr-secret.yaml) template file in your working directory and update it as needed.

- Copy this [`playback-ae-server.yaml`]({{ site.github.url }}/assets/automation/bas/playback-ae-server.yaml) template file in your working directory and update it as needed.

- Copy this [`bas-secret.yaml`]({{ site.github.url }}/assets/automation/bas/bas-secret.yaml) template file in your working directory and update it as needed. Make sure that you use a different `oidcClientId` for Business Automation Studio from the one you use for the App Engine playback server. There is only one UMS server and it needs to know which component to connect to.

- Create the secrets:
```
oc create -f rr-secret.yaml
oc create -f playback-ae-server.yaml
oc create -f bas-secret.yaml
```

### Deploy BAS

- To update the operator configuration, copy this [`my_ibm_cp4a_cr_2.yaml`]({{ site.github.url }}/assets/automation/bas/my_ibm_cp4a_cr_2.yaml) template file in your working directory and update it as needed. You can highlight the BAS configuration sections that need your attention by doing a diff with the template file found in [`my_ibm_cp4a_cr_1.yaml`]({{ site.github.url }}/assets/automation/ums/my_ibm_cp4a_cr_1.yaml)

- Apply the updated custom resource definition file:
```
oc apply -f my_ibm_icp4a_cr_2.yaml
```

### Test that BAS is up

Connect to `https://<bas-route>/BAStudio` with the administrator login you have defined in the `bas-secret.yaml` file. You should also be able to login with the credentials for any user defined in the LDAP directory.

The `<bas-route>` is the hostname that you have provided under the `bastudio_configuration` in the `my_ibm_cp4a_cr_2.yaml` configuration file.
