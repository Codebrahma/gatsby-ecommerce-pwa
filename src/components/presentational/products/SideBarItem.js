import React from 'react';

const SideBarItem = ({ title }) => (
  <li>
    <label className="facet-label" for="facet_input_16268_0">
      <span className="custom-checkbox">
        <input
          id="facet_input_20275_1"
          type="checkbox"
        />
      </span>

      <a
        className="_gray-darker search-link js-search-link"
        rel="nofollow"
      >
        {title}
        <span className="magnitude"></span>
      </a>
    </label>
  </li>
);

export default SideBarItem;