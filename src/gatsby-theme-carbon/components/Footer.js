import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The IBM Cloud Pak Playbook was last updated on {buildTime}. It is provided AS IS to document
      the experiences of IBMers and customers implementing IBM Cloud Paks.
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/support/knowledgecenter/SSCSJL/', linkText: 'IBM Cloud Pak for Applications' },
    { href: 'https://www.ibm.com/support/knowledgecenter/en/SSYHZ8/', linkText: 'IBM Cloud Pak for Automation' },
    { href: 'https://www.ibm.com/support/knowledgecenter/en/SSGT7J/', linkText: 'IBM Cloud Pak for Integration' },
    { href: 'https://www.ibm.com/support/knowledgecenter/en/SSFC4F/', linkText: 'IBM Cloud Pak for Multicloud Management' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
