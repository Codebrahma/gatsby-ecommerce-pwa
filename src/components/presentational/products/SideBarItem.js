import React from 'react'

const SideBarItem = ({ title }) => (
  <li>
    <label className="facet-label" htmlFor="facet_input_16268_0">
      <label>
        <input type="checkbox" class="option-input checkbox"/>
      </label>
      <a className="_gray-darker search-link js-search-link" rel="nofollow">
        {title}
        <span className="magnitude" />
      </a>
    </label>
  </li>
)

export default SideBarItem
