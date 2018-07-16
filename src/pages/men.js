import React from 'react'
import Link from 'gatsby-link'
import upperCase from 'lodash/upperCase';
import indexOf from 'lodash/indexOf';
import values from 'lodash/values';
import ProductList from '../components/presentational/products/ProductList'
import Sidebar from '../components/presentational/products/Sidebar'

const isPriceInRange = (state, price) => {
  const originalPrice = Number(price.amount);
  
  return (originalPrice < 100 && state['0$ - 100$'])
    || (originalPrice >= 100 && originalPrice < 200 && state['100$ - 200$'])
    || (originalPrice >= 200 && originalPrice < 300 && state['200$ - 300$'])
    || (originalPrice >= 300 && state['greater than 300$'])
}

const isColorMatching = (state, colors) => {
  
  return (state['Red'] && indexOf(colors, 'red') !== -1)
   || (state['Green'] && indexOf(colors, 'green') !== -1)
   || (state['Blue'] && indexOf(colors, 'blue') !== -1);
}

class MenCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'Red': false,
      'Green': false,
      'Blue': false,
      '0$ - 100$': false,
      '100$ - 200$': false,
      '200$ - 300$': false,
      'greater than 300$': false,
      'Metal': false,
      'Leather': false,
      'Ceramic': false,
    };

    this.onClickFilter = this.onClickFilter.bind(this);
  }

  onClickFilter = (criteria, value) => {
    this.setState({
      [value]: !this.state[value],
    });
  }

  render() {
    const {
      data
    } = this.props;

    let filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Men');
    if (indexOf(values(this.state), true) !== -1) {
      filteredProducts = filteredProducts.filter((data) => {
        const price = data.node.priceRange.minVariantPrice;
        const colors = data.node.variants.map((variant) => variant.selectedOptions[0].value);
        const isFiltered = isColorMatching(this.state, colors) || 
        isPriceInRange(this.state, price);
        return isFiltered;
      })
    }
    
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
            <Sidebar 
              onClickFilter={this.onClickFilter}
            />
            <div
              id="content-wrapper"
              className="left-column col-xs-12 col-sm-12 col-md-9 col-lg-10"
            >
              <section id="main">
                <ProductList
                  products={products}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MenCategory;

export const query = graphql`
  query menProductQuery {
    allShopifyProduct {
      edges {
        node {
          images {
            originalSrc
          }
          id
          title
          tags
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
