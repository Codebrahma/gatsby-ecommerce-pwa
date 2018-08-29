/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const _ = require('lodash');
const themeRoot = require('./theme-path');

const themeComponents = `${themeRoot}/themeComponents`;

//  exports.sourceNodes = async ({ actions }) => {....}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
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
    `).then((result) => {
      const categoryToProductsMap = {};
      result.data.allShopifyProduct.edges.forEach((edge) => {
        const { node } = edge;
        createPage({
          path: `product/${node.id}`,
          component: path.resolve('./src/templates/Product.js'),
          context: {
            productId: node.id,
            productName: node.title,
            images: node.images,
            tags: node.tags,
            productPrice: node.priceRange.minVariantPrice.amount,
            variants: node.variants,
            description: node.description,
          },
        });
        const type = node.productType === '' ? 'others' : node.productType;
        const currentProducts = categoryToProductsMap[type] || [];
        categoryToProductsMap[type] = currentProducts.concat(edge);
      });
      _.forEach(categoryToProductsMap, (value, key) => {
        createPage({
          path: `category/${key.toLowerCase().split(' ').join('-')}`,
          component: path.resolve('./src/templates/Category.js'),
          context: {
            productType: key,
            products: value,
          },
        });
      });
      resolve();
    }).catch((error) => {
      console.log(error);
      reject();
    });
  });
};

exports.onCreateWebpackConfig = ({
  // stage,
  // rules,
  // loaders,
  // plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js'],
      alias: {
        'theme/components': themeComponents,
      },
    },
  });
};
