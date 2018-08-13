exports.ARTICLES_QUERY = `
  query GetArticles($first: Int!, $after: String) {
    shop {
      articles(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            author {
              bio
              email
              firstName
              lastName
              name
            }
            blog {
              id
            }
            comments(first: 250) {
              edges {
                node {
                  author {
                    email
                    name
                  }
                  content
                  contentHtml
                  id
                }
              }
            }
            content
            contentHtml
            excerpt
            excerptHtml
            id
            image {
              altText
              id
              src
            }
            publishedAt
            tags
            title
            url
          }
        }
      }
    }
  }
`;

exports.BLOGS_QUERY = `
  query GetBlogs($first: Int!, $after: String) {
    shop {
      blogs(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
            url
          }
        }
      }
    }
  }
`;

exports.COLLECTIONS_QUERY = `
  query GetCollections($first: Int!, $after: String) {
    shop {
      collections(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            description
            descriptionHtml
            handle
            id
            image {
              altText
              id
              src
            }
            products(first: 250) {
              edges {
                node {
                  id
                }
              }
            }
            title
            updatedAt
          }
        }
      }
    }
  }
`;

exports.PRODUCTS_QUERY = `
  query GetProducts($first: Int!, $after: String) {
    shop {
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            createdAt
            description
            descriptionHtml
            handle
            id
            images(first: 250) {
              edges {
                node {
                  id
                  altText
                  originalSrc
                }
              }
            }
            onlineStoreUrl
            options {
              id
              name
              values
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            productType
            publishedAt
            tags
            title
            updatedAt
            variants(first: 250) {
              edges {
                node {
                  availableForSale
                  compareAtPrice
                  id
                  image {
                    altText
                    id
                    originalSrc
                  }
                  price
                  selectedOptions {
                    name
                    value
                  }
                  sku
                  title
                  weight
                  weightUnit
                }
              }
            }
            vendor
          }
        }
      }
    }
  }
`;

exports.SHOP_POLICIES_QUERY = `
  query GetPolicies {
    shop {
      privacyPolicy {
        body
        id
        title
        url
      }
      refundPolicy {
        body
        id
        title
        url
      }
      termsOfService {
        body
        id
        title
        url
      }
    }
  }
`;
