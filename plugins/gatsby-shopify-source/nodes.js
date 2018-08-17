const createNodeHelpers = require('gatsby-node-helpers');
// const { tap } = require('lodash/fp');
const { map } = require('p-iteration');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

// Node prefix
const TYPE_PREFIX = 'Shopify';

// Node types
const ARTICLE = 'Article';
const BLOG = 'Blog';
const COLLECTION = 'Collection';
const COMMENT = 'Comment';
const PRODUCT = 'Product';
const PRODUCT_OPTION = 'ProductOption';
const PRODUCT_VARIANT = 'ProductVariant';
const SHOP_POLICY = 'ShopPolicy';

const { createNodeFactory, generateNodeId } = createNodeHelpers.default({
  typePrefix: TYPE_PREFIX,
});

const downloadImageAndCreateFileNode = async (
  {
    // id,
    url,
  },
  {
    createNode, touchNode, store, cache,
  },
) => {
  let fileNodeID;

  const mediaDataCacheKey = `${TYPE_PREFIX}__Media__${url}`;
  const cacheMediaData = await cache.get(mediaDataCacheKey);

  if (cacheMediaData) {
    ({ fileNodeID } = cacheMediaData);
    touchNode({ nodeId: fileNodeID});
    return fileNodeID;
  }

  const fileNode = await createRemoteFileNode({
    url, store, cache, createNode,
  });

  if (fileNode) {
    fileNodeID = fileNode.id;
    await cache.set(mediaDataCacheKey, { fileNodeID });
    return fileNodeID;
  }

  return undefined;
};

/* eslint-disable no-param-reassign */
exports.ArticleNode = imageArgs => createNodeFactory(ARTICLE, async (node) => {
  if (node.blog) node.blog___NODE = generateNodeId(BLOG, node.blog.id);

  if (node.comments) {
    node.comments___NODE = node.comments.edges.map(edge => generateNodeId(COMMENT, edge.node.id));
  }
  if (node.image) {
    node.image.localFile___NODE = await downloadImageAndCreateFileNode(
      { id: node.image.id, url: node.image.src },
      imageArgs,
    );
  }

  return node;
});

exports.BlogNode = () => createNodeFactory(BLOG);

exports.CollectionNode = imageArgs => createNodeFactory(COLLECTION, async (node) => {
  if (node.products) {
    node.products___NODE = node.products.edges.map(edge => generateNodeId(PRODUCT, edge.node.id));
  }
  if (node.image) {
    node.image.localFile___NODE = await downloadImageAndCreateFileNode(
      { id: node.image.id, url: node.image.src },
      imageArgs,
    );
  }

  return node;
});

exports.CommentNode = () => createNodeFactory(COMMENT);

exports.ProductNode = imageArgs => createNodeFactory(PRODUCT, async (node) => {
  if (node.variants) {
    const variants = node.variants.edges.map(edge => edge.node);

    node.variants___NODE = variants.map(variant => generateNodeId(PRODUCT_VARIANT, variant.id));
  }

  if (node.options) {
    node.options___NODE = node.options.map(option => generateNodeId(PRODUCT_OPTION, option.id));
  }
  if (node.images && node.images.edges) {
    node.images = await map(node.images.edges, async (edge) => {
      edge.node.localFile___NODE = await downloadImageAndCreateFileNode(
        { id: edge.node.id, url: edge.node.originalSrc },
        imageArgs,
      );
      return edge.node;
    });
  }

  return node;
});

exports.ProductOptionNode = () => createNodeFactory(PRODUCT_OPTION);

exports.ProductVariantNode = imageArgs => createNodeFactory(PRODUCT_VARIANT, async (node) => {
  if (node.image) {
    node.image.localFile___NODE = await downloadImageAndCreateFileNode(
      { id: node.image.id, url: node.image.originalSrc },
      imageArgs,
    );
  }

  return node;
});

exports.ShopPolicyNode = createNodeFactory(SHOP_POLICY);

/* eslint-enable no-param-reassign */
