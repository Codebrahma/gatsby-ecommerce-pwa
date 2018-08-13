import React from 'react';
import PropTypes from 'prop-types';

const FormInputField = ({
  label,
  optional,
  type,
  name,
  value,
}) => {
  const renderTextField = (inputType, inputName, inputValue) => (
    <input
      className="form-control"
      id="form-control"
      name={inputName}
      type={inputType}
      defaultValue={inputValue}
      required=""
    />
  );

  const renderSelectField = () => (
    <select
      className="form-control form-control-select"
      id="form-control"
      name="id_state"
      required
    >
      <option defaultValue="" disabled>
        --Please Select One--
      </option>
      <option value="1">
Option-1
      </option>
      <option value="2">
Option-2
      </option>
    </select>
  );

  const renderRadioButton = (inputType) => {
    const radioTitle = (title, checked) => (
      <label htmlFor="radio" className="d-inline">
        <span className="custom-radio" id="radio">
          <input
            name="id_gender"
            type={inputType}
            value="1"
            defaultChecked={checked}
          />
          <span />
        </span>
        {title}
      </label>
    );
    return (
      <div className="form-control d-flex">
        {radioTitle('Mr.', true)}
        {radioTitle('Mrs.')}
      </div>
    );
  };

  const renderInputElement = (inputType, inputName, inputValue) => {
    switch (type) {
      case 'text':
      case 'email':
      case 'number':
        return renderTextField(inputType, inputName, inputValue);
      case 'select':
        return renderSelectField();
      case 'radio':
        return renderRadioButton(inputType);
      default:
        return <span />;
    }
  };

  return (
    <div className="form-group row">
      <label className="col-md-3 form-control-label required">
        {label}
      </label>
      <div className="col-md-6">
        {renderInputElement(type, name, value)}
      </div>
      <div className="col-md-3 form-control-comment">
        {optional}
      </div>
    </div>
  );
};

FormInputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optional: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

FormInputField.defaultProps = {
  optional: '',
  name: 'name',
  value: '',
};

export default FormInputField;
