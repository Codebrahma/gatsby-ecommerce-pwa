import React from "react";
import ProductList from "../components/ProductList";
import '../components/products-list.scss';

const Categories = (props) => {

    function addCardToCart(product) {
      let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {}
      const toBeAddedProduct = Object.assign({}, product)
      currentCartItems[toBeAddedProduct.productId] = toBeAddedProduct
      currentCartItems[toBeAddedProduct.productId].purchaseQuantity = 7
      localStorage.setItem('cart',JSON.stringify(currentCartItems))
      props.eventedLocalStorage()
    }
    const { pathContext } = props;
    return (
        <div className="container demo-container">
            <div className="row">
                <div className="demo-product-collection">
                    <div className="demo-product-collection-header">
                        <p>{`${pathContext.productType} collection`}</p>
                    </div>
                    <ProductList products={props.pathContext.products} addCardToCart={addCardToCart} />
                </div>
            </div>
        </div>
    )
}

export default Categories