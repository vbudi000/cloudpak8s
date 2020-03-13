import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github source',
    href: 'https://github.com/ibm-cloud-architecture/cloudpak8s',
  },
  {
    title: 'IBM Cloud Paks',
    href: 'https://www.ibm.com/cloud/paks/',
  },
  {
    title: 'IBM Cloud Support',
    href: 'https://www.ibm.com/cloud/support',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
