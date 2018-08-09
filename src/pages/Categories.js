import React, { Component } from "react";

export default ({pathContext, renderPage}) => (
  <React.Fragment>
    {
      renderPage({
        categoryName: pathContext.productType,
        productsInCategory: pathContext.products,
      })
    }
  </React.Fragment>
)
