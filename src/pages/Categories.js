import React, { Component } from "react";
import ProductList from "../components/ProductList";
import '../components/products-list.scss';

class Categories extends Component {

    render() {
        const { pathContext } = this.props;
        return (
            <div className="container demo-container">
                <div className="row">
                    <div className="demo-product-collection">
                        <div className="demo-product-collection-header">
                            <p>{`${pathContext.productType} collection`}</p>
                        </div>
                        <ProductList products={this.props.pathContext.products} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories