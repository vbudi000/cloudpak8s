module.exports = {
  siteMetadata: {
    title: 'IBM CloudPak Implementation Playbook',
    description: 'IBM CloudPak Implementation Playbook on OpenShift 4.2 - January 2020',
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
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://ocp43.cloudpak8s.io',
          subDirectory: '/',
        },
      },
    },
  ],
};
