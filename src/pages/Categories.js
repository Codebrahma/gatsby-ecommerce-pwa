import React, { Component } from "react";

class Categories extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allProductsInCurrentCategory: [],
        productsToDisplay: [],
      }
    }

    componentDidMount(nextProps) {
      console.log('Compnent did mount')
      const { pathContext } = this.props;
      this.setState({
        allProductsInCurrentCategory: pathContext.products,
        productsToDisplay: pathContext.products, 
      });
    }

    applyFilter  = () => {
      const { allProductsInCurrentCategory } = this.state;
      const filteredProducts = [allProductsInCurrentCategory[0], allProductsInCurrentCategory[1], allProductsInCurrentCategory[2]];
      this.setState({
        productsToDisplay: filteredProducts
      });
    }

    render() {
        const { pathContext } = this.props;
        return (
          <React.Fragment>
            {
              this.props.renderCategoriesListPage({
                categoryName: pathContext.productType,
                productsInCategory: this.state.productsToDisplay,
                applyFilter: this.applyFilter
              })
            }
          </React.Fragment>
        )
    }
}

export default Categories