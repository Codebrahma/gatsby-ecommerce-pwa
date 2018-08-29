import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Box, Label, Input, Select, Text,
} from 'rebass';

const FormInputField = ({
  label,
  optional,
  type,
  name,
  value,
}) => {
  const renderTextField = (inputName, inputValue) => (
    <Input
      name={inputName}
      defaultValue={inputValue}
      required=""
    />
  );

  const renderSelectField = () => (
    <Select
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
    </Select>
  );

  const renderRadioButton = (inputType) => {
    const radioTitle = (title, margin, checked) => (
      <Box ml={margin}>
        <Label>
          <input
            name="id_gender"
            type={inputType}
            value="1"
            defaultChecked={checked}
          />
          <span />
          {title}
        </Label>
      </Box>
    );
    return (
      <Flex>
        {radioTitle('Mr.', 0, true)}
        {radioTitle('Mrs.', 4)}
      </Flex>
    );
  };

  const renderInputElement = (inputType, inputName, inputValue) => {
    switch (type) {
      case 'text':
      case 'email':
      case 'number':
        return renderTextField(inputName, inputValue);
      case 'select':
        return renderSelectField();
      case 'radio':
        return renderRadioButton(inputType);
      default:
        return <span />;
    }
  };

  return (
    <Flex mb={2}>
      <Box p={2} width={[1 / 3]}>
        <Text>
          {label}
        </Text>
      </Box>
      <Box width={[2 / 3]}>
        {renderInputElement(type, name, value)}
        <div>
          {optional}
        </div>
      </Box>
    </Flex>
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
