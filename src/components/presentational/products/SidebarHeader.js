import React from 'react'

const SidebarItem = ({ title }) => (
  <React.Fragment>
    <h1 className="h6 facet-title hidden-sm-down">{title}</h1>
    <div className="title hidden-md-up">
      <h1 className="h6 facet-title">{title}</h1>
    </div>
  </React.Fragment>
)

export default SidebarItem
