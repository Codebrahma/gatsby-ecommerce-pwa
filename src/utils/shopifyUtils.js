import Client from 'shopify-buy';

const shopifyClient = Client.buildClient({
  domain: 'ecommerce-codebrahma.myshopify.com',
  storefrontAccessToken: 'c9e65f71dc1b5c80fad0dacacc7485f2'
});

export const createCart = () => {
  return new Promise((resolve, reject) => {
    const currentCartId = localStorage.getItem('currentCartId')
    if (!currentCartId) {
      shopifyClient.checkout.create().then(checkout => {
        localStorage.setItem('currentCartId', checkout.id);
        resolve({success: true})
      })
      .catch(err => {
        console.log('Error ', err);
        reject({
          success: false,
          err,
        });
      });
    } else {
      resolve({success: true})
    }
  });
};

export const addToCart = (productId, quantity) => {
  const currentCartId = localStorage.getItem('currentCartId')
  const itemsToAdd = [
    { variantId: productId, quantity}
  ];
  return shopifyClient.checkout.addLineItems(currentCartId, itemsToAdd);
}

export const removeFromCart = (productId) => {
  const currentCartId = localStorage.getItem('currentCartId')
  const itemsToRemove = [
    'Z2lkOi8vc2hvcGlmeS9DaGVja291dExpbmVJdGVtL2ExNTNjYmM4MmU5NDQ4NTIxNTYwMjU3N2RhYjYyZDQ4P2NoZWNrb3V0PWQyODk2YjI4NWZiMGIyMjAyOWRiNjU1ZmI1ODNlNjQx'
  ];
  return shopifyClient.checkout.removeLineItems(currentCartId, itemsToRemove);
}

export const updateCart = (itemsToUpdate) => {
  if (itemsToUpdate.length === 0) {
    return Promise.resolve();
  }
  const currentCartId = localStorage.getItem('currentCartId')

  return shopifyClient.checkout.updateLineItems(currentCartId, itemsToAdd);
}