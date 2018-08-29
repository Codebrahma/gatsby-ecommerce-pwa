const { GraphQLClient } = require('graphql-request');
const prettyjson = require('prettyjson');
const { get, last } = require('lodash/fp');

/**
 * Create a Shopify Storefront GraphQL client for the provided name and token.
 */
const createClient = (shopName, accessToken) => new GraphQLClient(`https://${shopName}.myshopify.com/api/graphql`, {
  headers: {
    'X-Shopify-Storefront-Access-Token': accessToken,
  },
});

/**
 * Print an error from a GraphQL client
 */
const printGraphQLError = (e) => {
  const prettyjsonOptions = { keysColor: 'red', dashColor: 'red' };

  if (e.response && e.response.errors) {
    console.error(prettyjson.render(e.response.errors, prettyjsonOptions));
  }
  if (e.request) {
    console.error(prettyjson.render(e.request, prettyjsonOptions));
  }
};

/**
 * Request a query from a client.
 */
const queryOnce = async (
  client, query, first = 250, after,
) => await client.request(query, { first, after });

/**
 * Get all paginated data from a query. Will execute multiple requests as
 * needed.
 */
const queryAll = async (
  client,
  path,
  query,
  first = 250,
  after,
  aggregatedResponse,
) => {
  const data = await queryOnce(client, query, first, after);

  const edges = get([...path, 'edges'], data);
  const nodes = edges.map(edge => edge.node);

  /* eslint-disable no-param-reassign */
  if (aggregatedResponse) {
    (aggregatedResponse = aggregatedResponse.concat(nodes));
  } else {
    (aggregatedResponse = nodes);
  }
  /* eslint-enable no-param-reassign */

  if (get([...path, 'pageInfo', 'hasNextPage'], false, data)) {
    return queryAll(
      client,
      path,
      query,
      first,
      last(edges).cursor,
      aggregatedResponse,
    );
  }

  return aggregatedResponse;
};

module.exports = {
  createClient,
  printGraphQLError,
  queryOnce,
  queryAll,
};
