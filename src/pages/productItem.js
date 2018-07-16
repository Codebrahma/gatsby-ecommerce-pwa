import React from 'react';

const ProductItem = (props) => (
  <div className="product-item">
    <div className="container">
      <div className="row">
        <div id="content-wrapper" className="col-xs-12">
          <div className="row">
            <div className="col-md-2">
              <section className="page-content" id="content">
                <div className="images-container">
                  <div className="js-qv-mask mask pos_content">
                    <div className="product-images js-qv-product-images owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage" >
                          <div className="owl-item cloned" style={{ width: '98px' }}>
                            <div className="thumb-container hidden-sm">
                              {
                                props.pathContext.images && props.pathContext.images.map((img) => (
                                  <img
                                    key={img.originalSrc}
                                    className="thumb js-thumb  selected "
                                    data-image-medium-src="http://demo.posthemes.com/pos_nevara/197-medium_default/compete-track-tote.jpg" data-image-large-src="http://demo.posthemes.com/pos_nevara/197-large_default/compete-track-tote.jpg"
                                    src={img.originalSrc}
                                    alt=""
                                    title=""
                                    width="100"
                                    itemProp="image"
                                  />
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="colxs-12 col-md-4">
              <img
                className="thumb js-thumb  selected "
                data-image-medium-src="http://demo.posthemes.com/pos_nevara/197-medium_default/compete-track-tote.jpg" data-image-large-src="http://demo.posthemes.com/pos_nevara/197-large_default/compete-track-tote.jpg"
                src={props.pathContext.images && props.pathContext.images[0].originalSrc}
                alt=""
                title=""
                width="200"
                itemProp="image"
                style={{ width: "100%" }}
              />
            </div>


            <div className="col-md-6 item-info">
              <h1 className="h1 namne_details" itemProp="name">{props.pathContext.productName}</h1>
              <p className="reference">Reference: demo_15</p>
              <div id="product_comments_block_extra" className="no-print" itemProp="aggregateRating" itemScope="" itemType="https://schema.org/AggregateRating">
                <ul className="comments_advices">
                  <li>
                    <a className="open-comment-form">
                      Write a review
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-prices">
                <div className="product-price h5 " itemProp="offers" itemScope="" itemType="https://schema.org/Offer">
                  <link itemProp="availability" />
                    <meta itemProp="priceCurrency" content="USD" />
                    <div className="current-price">
                      <span itemProp="price" content="76.8">${props.pathContext.productPrice}</span>
                    </div>
                </div>
                <div className="tax-shipping-delivery-label">
                </div>
              </div>
              <div className="product-information">
                <div id="product-description-short-25" className="product-desc" itemProp="description">
                  <p><span >{props.productDescription}</span></p>
                </div>
                <div className="product-actions">
                  <form id="add-to-cart-or-refresh">
                    <input type="hidden" name="token" value="2e4ad0eed781d60ec07b010a09cbed5a" />
                    <input type="hidden" name="id_product" value="25" id="product_page_product_id" />
                    <input type="hidden" name="id_customization" value="0" id="product_customization_id" />
                    <div className="product-variants">
                </div>
                <section className="product-discounts">
                </section>
                <div className="product-add-to-cart">
                  <span className="control-label">Quantity</span>
                    <div className="product-quantity clearfix">
                    <div className="qty">
                    <div className="input-group bootstrap-touchspin">
                      <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }}>
                      </span>
                      <input type="text" name="qty" id="quantity_wanted" value="1" className="input-group form-control" min="1" aria-label="Quantity" />
                      <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }}>
                      </span>
                      <span className="input-group-btn-vertical">
                      <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button">
                      <i className="material-icons touchspin-up"></i></button>
                      <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button">
                      <i className="material-icons touchspin-down"></i></button></span>
                    </div>
                </div>
                <div className="add">
                  <button className="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit">
                    <i className="fa fa-shopping-cart"></i>
                    Add to cart
                  </button>
                </div>
              </div>
              <span id="product-availability">
              </span>
              <p className="product-minimal-quantity">
              </p>
            </div>
            <div className="product-additional-info">
              <div className="social-sharing">
                <span>Share</span>
                  <ul>
                    <li className="facebook"><a href="http://www.facebook.com/sharer.php?u=http://demo.posthemes.com/pos_nevara/en/home/25-compete-track-tote.html" title="Share" target="_blank">Share</a></li>
                    <li className="twitter"><a href="https://twitter.com/intent/tweet?text=Compete Track Tote http://demo.posthemes.com/pos_nevara/en/home/25-compete-track-tote.html" title="Tweet" target="_blank">Tweet</a></li>
                    <li className="googleplus"><a href="https://plus.google.com/share?url=http://demo.posthemes.com/pos_nevara/en/home/25-compete-track-tote.html" title="Google+" target="_blank">Google+</a></li>
                    <li className="pinterest"><a href="http://www.pinterest.com/pin/create/button/?media=http://demo.posthemes.com/pos_nevara/197/compete-track-tote.jpg&amp;url=http://demo.posthemes.com/pos_nevara/en/home/25-compete-track-tote.html" title="Pinterest" target="_blank">Pinterest</a></li>
                </ul>
              </div>
            </div>
            <input className="product-refresh ps-hidden-by-js" name="refresh" type="submit" value="Refresh" style={{ display: 'none' }} />
            </form>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>


);

export default ProductItem;
