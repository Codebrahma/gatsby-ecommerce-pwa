import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CustomCheckbox from './CustomCheckbox'
import map from 'lodash'
import './filter.scss'


class FilterBy extends Component {
  state={
    label: this.props.label,
    filterWhat: this.props.filterWhat,
  }

  handleChange = e => {
    console.log(e.target)
  }
  render() {
    const { label, filterWhat } = this.state
    return  (
      <div className="filterBy ">
      <h4>{label.toUpperCase()}</h4>
      {_.map(filterWhat,i => (
        <div key={i}>
          <CustomCheckbox
            filter={`${i}`}
            id={`filterBy${label}${i}`}
            name={`${i}`}
            handleChange={this.handleChange}
          />
          {
            label==="size"
                ? <div className="color-box">{i}</div>
                : label==="color"
                      ? <div className={`color-box ${i}`}>{i.slice(0,1).toUpperCase()}</div>
                      : <div className="color-box">NA</div>
          }
        </div>
      ))}
      </div>
    )
  }
}

FilterBy.propTypes = {
  label: PropTypes.string.isRequired,
  filterWhat: PropTypes.array.isRequired,
}

FilterBy.defaultProps = {
  label: "NA",
  filterWhat: [],
}

export default FilterBy
