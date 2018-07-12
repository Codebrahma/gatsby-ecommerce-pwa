module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'ecommerce-codebrahma',
        accessToken: 'c9e65f71dc1b5c80fad0dacacc7485f2',
        verbose: true,
      },
    },
  ],
}
