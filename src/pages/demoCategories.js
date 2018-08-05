import React, { Component } from "react";
import DemoProductList from "../components/DemoProductList";
import '../components/demo-products-list.scss';
import _ from 'lodash';

class DemoCategories extends Component {

    render() {
        const { pathContext } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="demo-product-collection">
                        <div className="demo-product-collection-header">
                            <h3>{`${pathContext.productType} collection`}</h3>
                        </div>
                        <DemoProductList products={this.props.pathContext.products} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoCategories