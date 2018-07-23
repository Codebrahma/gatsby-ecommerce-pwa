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
        shopName: 'PWA-ecommerce',
        accessToken: '0975a46c7772d5b0602e9452ecdad35c',
        verbose: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Codebrahma PWA",
        short_name: "CB PWA",
        description: "Ecommerce App",
        start_url: "/",
        display: "standalone",
        "icons": [
          {
            "src": "\/android-chrome-192x192.png?v=yyxgnp97qG",
            "sizes": "192x192",
            "type": "image\/png"
          },
          {
            "src": "\/android-chrome-384x384.png?v=yyxgnp97qG",
            "sizes": "384x384",
            "type": "image\/png"
          }
        ],
        "theme_color": "#ffffff",
        "background_color": "#57A3E8",
        "display": "browser"
      }
    },
    
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
