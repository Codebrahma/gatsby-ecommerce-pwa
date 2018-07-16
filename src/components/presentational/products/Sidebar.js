import React from 'react'
import SideBarItem from './SideBarItem'
import SideBarHeader from './SidebarHeader'

import './styles.scss'

const SideBar = ({ onClickFilter }) => (
  <div id="left-column" className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
    <div id="search_filters_wrapper" className="hidden-sm-down">
      <div id="search_filters">
        <div className="facet-content">
          <section className="facet clearfix">
            <SideBarHeader title="Categories" />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem 
                onClickFilter={onClickFilter}
                type="color"
                title="Red" 
              />
              <SideBarItem 
                onClickFilter={onClickFilter}
                type="color"
                title="Green"
              />
              <SideBarItem
                onClickFilter={onClickFilter}
                type="color"
                title="Blue"
              />
            </ul>
          </section>
          <section className="facet clearfix">
            <SideBarHeader title="Price Range" />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem
                onClickFilter={onClickFilter}
                title="0$ - 100$"
                type="price"
              />
              <SideBarItem
                onClickFilter={onClickFilter}
                title="100$ - 200$"
                type="price"
              />
              <SideBarItem
                onClickFilter={onClickFilter}
                title="200$ - 300$"
                type="price"
              />
              <SideBarItem
                onClickFilter={onClickFilter}
                title="greater than 300$"
                type="price"
              />
            </ul>
          </section>
          <section className="facet clearfix">
            <SideBarHeader title="Strap Type" />
            <ul id="facet_20275" className="collapse in">
              <SideBarItem
                onClickFilter={onClickFilter}
                title="Metal"
                type="strap"
              />
              <SideBarItem
                onClickFilter={onClickFilter}
                title="Leather"
                type="strap"
              />
              <SideBarItem
                onClickFilter={onClickFilter}
                title="Ceramic"
                type="strap"
              />
            </ul>
        </section>
        </div>
      </div>
    </div>
  </div>
)

export default SideBar
