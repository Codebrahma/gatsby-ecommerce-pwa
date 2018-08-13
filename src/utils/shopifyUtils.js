import Client from 'shopify-buy';

const shopifyClient = Client.buildClient({
  domain: 'ecommerce-codebrahma.myshopify.com',
  storefrontAccessToken: 'c9e65f71dc1b5c80fad0dacacc7485f2',
});

export const createCart = () => new Promise((resolve, reject) => {
  const currentCartId = localStorage.getItem('currentCartId');
  if (!currentCartId) {
    shopifyClient.checkout
      .create()
      .then((checkout) => {
        localStorage.setItem('currentCartId', checkout.id);
        resolve({ success: true });
      })
      .catch((err) => {
        reject(new Error(err));
      });
  } else {
    resolve({ success: true });
  }
});

export const addToCart = (productVariantId, quantity) => new Promise((resolve, reject) => {
  const currentCartId = localStorage.getItem('currentCartId');
  const itemsToAdd = [{ variantId: productVariantId, quantity }];
  shopifyClient.checkout
    .addLineItems(currentCartId, itemsToAdd)
    .then((checkout) => {
      const lineItemId = checkout.lineItems[checkout.lineItems.length - 1].id;
      resolve(lineItemId);
    })
    .catch(err => reject(err));
});

export const removeFromCart = (productLineItemId) => {
  const currentCartId = localStorage.getItem('currentCartId');
  const itemsToRemove = [productLineItemId];
  return shopifyClient.checkout.removeLineItems(currentCartId, itemsToRemove);
};

export const updateCart = (itemsToUpdate) => {
  if (itemsToUpdate.length === 0) {
    return Promise.resolve();
  }
  const currentCartId = localStorage.getItem('currentCartId');

  return shopifyClient.checkout.updateLineItems(currentCartId, itemsToUpdate);
};

export const getCart = () => new Promise((resolve, reject) => {
  const currentCartId = localStorage.getItem('currentCartId');

  shopifyClient.checkout
    .fetch(currentCartId)
    .then((checkout) => {
      resolve(checkout);
    })
    .catch(err => reject(err));
});
