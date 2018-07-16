import React from 'react'
import ProductList from '../components/presentational/products/ProductList'
import CartContainer from '../components/presentational/CartContainer'
import '../components/css/cartStyle.scss'

const Cart = ({ data }) => {
  const filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Men');
  const products = filteredProducts.map((data) => ({
    productName: data.node.title,
    price: data.node.priceRange.minVariantPrice.amount,
    productImage: data.node.images[0].originalSrc,
    productId: data.node.id
  }));

  return (
    <section id="wrapper">
      <div className="container">
        <div className="row">
          <div id="content-wrapper" className="col-xs-12">
            <CartContainer items={products}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart

export const query = graphql`
  query cartProductQuery {
    allShopifyProduct {
      edges {
        node {
          images {
            originalSrc
          }
          id
          title
          productType
          description
          priceRange {
            minVariantPrice{
              amount
            }
          }
          variants {
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;
