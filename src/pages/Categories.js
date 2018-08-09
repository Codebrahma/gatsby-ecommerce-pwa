import React from "react";
import ProductList from "../components/ProductList";
import '../components/products-list.scss';

const Categories = (props) => {

    const { pathContext } = props;
    return (
        <div className="container demo-container">
            <div className="row">
                <div className="demo-product-collection">
                    <div className="demo-product-collection-header">
                        <p>{`${pathContext.productType} collection`}</p>
                    </div>
                    <ProductList products={props.pathContext.products} addCardToCart={props.addItemToCart} />
                </div>
            </div>
        </div>
    )
}

export default Categories