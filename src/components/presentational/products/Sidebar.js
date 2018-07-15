import React from 'react'
import SideBarItem from './SideBarItem'
import SideBarHeader from './SidebarHeader'

import './styles.scss'

const SideBar = () => (
  <div id="left-column" className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
    <div id="search_filters_wrapper" className="hidden-sm-down">
      <div id="search_filters">
        <div className="facet-content">
          <section className="facet clearfix">
            <SideBarHeader title="Categories" />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem title="Red" />
              <SideBarItem title="Green" />
              <SideBarItem title="Blue" />
            </ul>
          </section>
          <section className="facet clearfix">
            <SideBarHeader title="Price Range" />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem title="0$ - 100$" />
              <SideBarItem title="100$ - 200$" />
              <SideBarItem title="200$ - 300$" />
            </ul>
          </section>
          <section className="facet clearfix">
            <SideBarHeader title="Strap Type" />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem title="Metal" />
              <SideBarItem title="Leather" />
              <SideBarItem title="Ceramic" />
            </ul>
        </section>
        </div>
      </div>
    </div>
  </div>
)

export default SideBar
