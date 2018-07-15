import React from 'react';

const ProductItem = () => (
  <div className="product-item">
    <div className="container">
      <div className="row">
        <div id="content-wrapper" className="col-xs-12">
          <div className="row">
            <div className="col-md-5">
              <section className="page-content" id="content">
                <div className="images-container">
                  <div className="js-qv-mask mask pos_content">
                    <div className="product-images js-qv-product-images owl-carousel owl-loaded owl-drag">                       
                      <div className="owl-stage-outer">
                        <div className="owl-stage" >
                          <div className="owl-item cloned" style={{ width: '98px' }}>
                            <div className="thumb-container">
                              <img className="thumb js-thumb  selected " data-image-medium-src="http://demo.posthemes.com/pos_nevara/197-medium_default/compete-track-tote.jpg" data-image-large-src="http://demo.posthemes.com/pos_nevara/197-large_default/compete-track-tote.jpg" src="http://demo.posthemes.com/pos_nevara/197-cart_default/compete-track-tote.jpg" alt="" title="" width="100" itemprop="image" />
                              <img className="thumb js-thumb " data-image-medium-src="http://demo.posthemes.com/pos_nevara/198-medium_default/compete-track-tote.jpg" data-image-large-src="http://demo.posthemes.com/pos_nevara/198-large_default/compete-track-tote.jpg" src="http://demo.posthemes.com/pos_nevara/198-cart_default/compete-track-tote.jpg" alt="" title="" width="100" itemprop="image" />
                              <img className="thumb js-thumb " data-image-medium-src="http://demo.posthemes.com/pos_nevara/199-medium_default/compete-track-tote.jpg" data-image-large-src="http://demo.posthemes.com/pos_nevara/199-large_default/compete-track-tote.jpg" src="http://demo.posthemes.com/pos_nevara/199-cart_default/compete-track-tote.jpg" alt="" title="" width="100" itemprop="image"/>
                            </div>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


);

export default ProductItem;