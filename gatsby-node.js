/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require('path');

//  exports.sourceNodes = async ({ boundActionCreators }) => {....}
 exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
     graphql(`
     {
      allShopifyProduct {
        edges {
          node {
            images {
              originalSrc
            }
            id
            productType
            description
            title
            priceRange{
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants {
              id
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    `).then(result => {
     result.data.allShopifyProduct.edges.forEach(({ node }) => {
       createPage({
         path: `product/${node.id}`,
         component: path.resolve(`./src/pages/demoProductItem.js`),
         context: {
           productId: node.id,
           productName: node.title,
           images: node.images,
           tags: node.tags,
           productPrice: node.priceRange.minVariantPrice.amount,
           variants: node.variants,
           description: node.description
         },
       })
     })
     resolve()
     })
   }).catch(error => {
     console.log(error)
     reject()
   })
 };

 exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
    {
     allShopifyProduct {
       edges {
         node {
           images {
             originalSrc
           }
           id
           productType
           description
           title
           priceRange{
             minVariantPrice {
               amount
               currencyCode
             }
           }
           variants {
             id
             selectedOptions {
               name
               value
             }
           }
         }
       }
     }
   }
   `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `category/${node.productType.toLowerCase().replace(' ','-')}`,
        component: path.resolve(`./src/pages/DemoProductCategory.js`),
        context: {
          productId: node.id,
          productType: node.productType
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};