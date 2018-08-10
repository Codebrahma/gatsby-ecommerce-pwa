import React from "react";
import ProductList from "../../components/ProductList";
import '../../components/ProductList/products-list.scss';

const Categories = (props) => {
  const { pathContext } = props;
  return (
    <div className="container demo-container">
      <div className="row">
        <div className="demo-product-collection">
          <div className="demo-product-collection-header">
            <p>{`${pathContext.productType} collection`}</p>
          </div>
          <ProductList products={pathContext.products} addItemToCart={props.addItemToCart} />
        </div>
      </div>
    </div>
  )
}

export default Categories