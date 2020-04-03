module.exports = {
  siteMetadata: {
    title: 'IBM CloudPak Playbook',
    description: 'IBM CloudPak Playbook on OpenShift 4.2 - January 2020',
    keywords: 'cloudpak,implementation,openshift',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149377589-5"
      }
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/cloudpak8s',
          subDirectory: '/',
        },
      },
    },
  ],
};
