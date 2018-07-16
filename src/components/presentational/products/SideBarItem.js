import React from 'react'

const SideBarItem = ({ title, type, onClickFilter }) => (
  <li>
    <label className="facet-label" htmlFor="facet_input_16268_0">
      <label>
        <input
          type="checkbox"
          className="option-input checkbox"
          onChange={() => onClickFilter(type, title)}
        />
      </label>
      <a className="_gray-darker search-link js-search-link" rel="nofollow">
        {title}
        <span className="magnitude" />
      </a>
    </label>
  </li>
)

export default SideBarItem
