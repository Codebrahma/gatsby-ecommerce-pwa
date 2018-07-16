import Client from 'shopify-buy';

const shopifyClient = Client.buildClient({
  domain: 'ecommerce-codebrahma.myshopify.com',
  storefrontAccessToken: 'c9e65f71dc1b5c80fad0dacacc7485f2'
});

export const createCart = () => {
  const currentCartId = localStorage.getItem('currentCartId')
  if (!currentCartId) {
    shopifyClient.checkout.create().then(checkout => {
      localStorage.setItem('currentCartId', checkout.id);
    })
    .catch(err => console.log('Error ', err));
  }
};

export const addToCart = (productId, quantity) => {
  const currentCartId = localStorage.getItem('currentCartId')

  const itemsToAdd = [
    { variantId: productId, quantity}
  ];
  return Client.checkout.addLineItems(currentCartId, itemsToAdd);
}

export const updateCart = (itemsToUpdate) => {
  if (itemsToUpdate.length === 0) {
    return Promise.resolve();
  }
  const currentCartId = localStorage.getItem('currentCartId')

  return Client.checkout.updateLineItems(currentCartId, itemsToAdd);
}