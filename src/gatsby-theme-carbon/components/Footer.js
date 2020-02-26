import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      This IBM Cloud Pak implementation playbook last updated at 
      {buildTime}. The Cloud Pak implementation playbook is created from a series of
      residency projects that implement IBM Cloud Pak on OpenShift Container Platform version 4.x.
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/support/knowledgecenter/SSCSJL/', linkText: 'IBM Cloud Pak for Application' },
    { href: 'https://www.ibm.com/support/knowledgecenter/en/SSYHZ8/', linkText: 'IBM Cloud Pak for Automation' },
    { href: 'https://www.ibm.com/support/knowledgecenter/en/SSGT7J/', linkText: 'IBM Cloud Pak for Integration' },
    { href: 'https://www.ibm.com/support/knowledgecenter/en/SSFC4F/', linkText: 'IBM Cloud Pak for Multicloud Management' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
