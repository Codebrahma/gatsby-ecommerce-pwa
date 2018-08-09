import React from 'react'
import PropTypes from 'prop-types'

const FormInputField = (props) => {

  const renderTextField = (type, name, value) => (
    <input className="form-control" name={name} type={type} defaultValue={value} required=""  />
  )

  const renderSelectField = () => (
    <select className="form-control form-control-select" name="id_state" required >
      <option defaultValue="" disabled>--Please Select One--</option>
      <option value="1">Option-1</option>
      <option value="2">Option-2</option>
    </select>
  )

  const renderRadioButton = (type) => {
    const radioTitle = (title,checked) => (
      <label className="d-inline">
        <span className="custom-radio">
          <input name="id_gender" type={type} value="1" defaultChecked={checked}/>
          <span></span>
        </span>
        {title}
      </label>
    )
    return (
      <div className="form-control d-flex">
        { radioTitle("Mr.",true) }
        { radioTitle("Mrs.") }
      </div>
    )
  }


  const renderInputElement = (type, name, value) => {
    switch(type) {
      case "text":
      case "email":
      case "number":
        return renderTextField(type, name, value)
      case "select":
        return renderSelectField()
      case "radio":
        return renderRadioButton(type)
      default:
        return (
          <span></span>
        )
    }
  }

  return (
    <div className="form-group row">
      <label className="col-md-3 form-control-label required">
        {props.label}
      </label>
      <div className="col-md-6">
        { renderInputElement(props.type, props.name, props.value) }
      </div>
      <div className="col-md-3 form-control-comment">
        {props.optional}
      </div>
    </div>
  )
}

FormInputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  placeholder: PropTypes.string,
}

FormInputField.defaultProps = {
  type: "text",
  label: "HEAD",
}

export default FormInputField
