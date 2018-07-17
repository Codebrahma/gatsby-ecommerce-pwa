import React from 'react'
import ProductList from '../components/presentational/products/ProductList'
import CartContainer from '../components/presentational/CartContainer'
import { getCart, removeFromCart  } from '../utils/shopifyUtils';
import '../components/css/cartStyle.scss'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    }
  }

  componentDidMount() {
    this.fetchCartData();
  }

  fetchCartData = () => {
    getCart().then(data => {
      console.log(data);
      this.setState({
        cartItems: data,
      })
    });
  }

  handleDeleteItem = (lineItem) => {
    console.log(lineItem.id);
    removeFromCart(lineItem.id)
      .then(this.fetchCartData)
      .catch(err => {
        console.log('Failed to remove item from cart')
      });
  }

  render() {
    if (this.state.cartItems.length < 1) {
      return <div>Loading...</div>
    }
    return (
      <section id="wrapper">
        <div className="container">
          <div className="row">
            <div id="content-wrapper" className="col-xs-12">
              <CartContainer 
                cart={this.state.cartItems}
                handleDeleteItem={this.handleDeleteItem}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// const Cart = ({ data }) => {
//   const filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Men');
//   const products = filteredProducts.map((data) => ({
//     productName: data.node.title,
//     price: data.node.priceRange.minVariantPrice.amount,
//     productImage: data.node.images[0].originalSrc,
//     productId: data.node.id
//   }));

//   return (

//   );
// }

// export default Cart

// export const query = graphql`
//   query cartProductQuery {
//     allShopifyProduct {
//       edges {
//         node {
//           images {
//             originalSrc
//           }
//           id
//           title
//           productType
//           description
//           priceRange {
//             minVariantPrice{
//               amount
//             }
//           }
//           variants {
//             selectedOptions {
//               name
//               value
//             }
//           }
//         }
//       }
//     }
//   }
// `;
