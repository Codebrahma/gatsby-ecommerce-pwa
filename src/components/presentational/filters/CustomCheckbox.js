import React from 'react'
import PropTypes from 'prop-types'

const CustomCheckbox = props => (
  <div className="custom-checkbox">
    <input
      type="checkbox"
      value={props.filter}
      id={props.id}
      name={props.name}
      onChange={props.handleChange}
    />
    <label htmlFor={props.id} />
  </div>
)

CustomCheckbox.propTypes = {
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

CustomCheckbox.defaultProps = {
  filter: 'NA',
  name: 'Default Name',
  id: 'Default Id',
  handleChange: () => {},
}

export default CustomCheckbox
