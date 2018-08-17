import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Flex } from 'rebass';

import VariantItem from './VariantItem';

class ProductVariants extends Component {
  state = {
    currentItem: '',
  }

  componentDidMount() {
    const { variantItems } = this.props;
    this.setState({
      currentItem: variantItems[0],
    });
  }

  isActive = (item) => {
    const { currentItem } = this.state;
    return currentItem === item;
  }

  activeVariant = (item) => {
    this.setState({
      currentItem: item,
    });
  }

  render() {
    const { children, variantItems } = this.props;
    return (
      <div>
        {children}
        <Flex flexWrap="wrap" my={2}>
          {_.map(variantItems, (option, index) => (
            <VariantItem
              key={`${option}-${index}`}
              variantItem={option}
              activeVariant={() => this.activeVariant(option)}
              isActive={this.isActive(option)}
            />
          ))}
        </Flex>
      </div>
    );
  }
}

ProductVariants.propTypes = {
  variantItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ProductVariants;
