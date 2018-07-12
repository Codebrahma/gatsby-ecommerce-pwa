import React from 'react';
import SideBarItem from './SideBarItem';
import SideBarHeader from './SidebarHeader';
import './styles.scss';

const SideBar = () => (
  <div id="left-column" className="col-xs-12 col-sm-4 col-md-3">
    <div id="search_filters_wrapper" className="hidden-sm-down">
      <div id="search_filters">
        <h4 className="text-uppercase h6 hidden-sm-down">Filter By</h4>
        <div
          id="_desktop_search_filters_clear_all"
          className="hidden-sm-down clear-all-wrapper"
        >
          <button       
            className="btn btn-tertiary js-search-filters-clear-all"
          >
            <i className="material-icons"></i>
            Clear all
          </button>
        </div>

        <div className="facet-content">
          <section className="facet clearfix">
            <SideBarHeader 
              title="Categories"
            />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem title="Category 1"/>
              <SideBarItem title="Category 2"/>
              <SideBarItem title="Category 3"/>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>  
)

export default SideBar
