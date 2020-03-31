import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud-paks-small.png';

const FirstLeftText = () => <p>IBM Cloud Paks</p>;

const FirstRightText = () => (
  <p>
    IBM Cloud™ Paks are enterprise-ready, containerized software solutions 
    that give clients an open, faster and more secure way to move core 
    business applications to any cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const SecondLeftText = () => <p>Carbon Design System</p>;

const SecondRightText = () => (
  <p>
    Carbon is IBM’s open-source design system for products and experiences. 
    <a
      className={calloutLink}
      href="https://www.carbondesignsystem.com"
    >
      Carbon Design →
    </a>
  </p>
);

const BannerText = () => <h1>IBM Cloud Pak Playbook</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
