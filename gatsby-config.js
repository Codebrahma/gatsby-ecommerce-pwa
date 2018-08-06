module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-stripe-elements',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-shopify-source',
      options: {
        shopName: 'nutritownbygrow',
        accessToken: '576dea267469e1099e4aa82ecd18c4e7',
        verbose: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images`
      }
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
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
