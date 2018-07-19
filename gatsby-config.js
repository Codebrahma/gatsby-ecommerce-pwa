module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-stripe-elements',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'ecommerce-codebrahma',
        accessToken: 'c9e65f71dc1b5c80fad0dacacc7485f2',
        verbose: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Codebrahma PWA",
        short_name: "CB PWA",
        description: "Ecommerce App",
        start_url: "/",
        background_color: "#FFFF00",
        theme_color: "#000080",
        display: "standalone",
        icons: [
          {
            src: "/logo/cb.png",
            sizes: "136x68",
            type: "72x72 96x96 128x128 256x256"
          },
        ]
      }
    },
  ],
}
