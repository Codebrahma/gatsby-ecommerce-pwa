import React from 'react'

const CustomCheckbox = (props) => (
  <div className="custom-checkbox">
    <input type="checkbox" value={props.filter} id={props.id} name={props.name} onChange={props.handleChange}/>
    <label htmlFor={props.id}></label>
  </div>
)

export default CustomCheckbox
