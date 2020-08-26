/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

  /* Your site config here */
  module.exports = {
    siteMetadata: {
      title: "Gatsby learn febrilian",
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src`,
        },
      },
      {resolve: `gatsby-transformer-remark`}
    ],
  }