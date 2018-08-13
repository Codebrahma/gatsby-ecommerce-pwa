import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import FormInputField from '../components/Form';
import CheckoutDetails from '../components/CheckoutDetails';
import CheckoutButton from '../components/CheckoutButton';

import './checkout.scss';

const Checkout = ({ eventedLocalStorage }) => {
  const personalInfoFormFields = [
    {
      id: 1, label: 'Title', type: 'radio', optional: '',
    },
    {
      id: 2,
      label: 'First Name',
      type: 'text',
      optional: '',
      name: 'firstname',
      value: 'John',
    },
    {
      id: 3,
      label: 'Last Name',
      type: 'text',
      optional: '',
      name: 'lastname',
      value: 'Doe',
    },
    {
      id: 4,
      label: 'Email address',
      type: 'email',
      optional: '',
      name: 'email',
      value: 'john@doe.com',
    },
  ];
  const addressFormFields = [
    {
      id: 1,
      label: 'First Name',
      type: 'text',
      optional: '',
      name: 'firstname',
      value: 'John',
    },
    {
      id: 2,
      label: 'Last Name',
      type: 'text',
      optional: '',
      name: 'lastname',
      value: 'Doe',
    },
    {
      id: 3,
      label: 'Company',
      type: 'text',
      optional: 'Optional',
      name: 'company',
      value: 'John Company',
    },
    {
      id: 4,
      label: 'Address',
      type: 'text',
      optional: '',
      name: 'address',
      value: '123, XYZ colony',
    },
    {
      id: 5,
      label: 'Address Complement',
      type: 'text',
      optional: 'Optional',
      name: 'address-line2',
      value: 'ABC',
    },
    {
      id: 6,
      label: 'City',
      type: 'text',
      optional: '',
      name: 'city',
      value: 'Some City',
    },
    {
      id: 7, label: 'State', type: 'select', optional: '',
    },
    {
      id: 8,
      label: 'Zip Code',
      type: 'number',
      optional: '',
      name: 'zipcode',
      value: '12345',
    },
    {
      id: 9, label: 'Country', type: 'select', optional: '',
    },
    {
      id: 10,
      label: 'Phone',
      type: 'number',
      optional: 'Optional',
      name: 'mobile',
      value: 1234567890,
    },
  ];
  return (
    <div className="container py-4 px-2">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-2">
          <div className="form-container container mb-3">
            <h4 className="lead mb-4">
Personal Info
            </h4>
            {_.map(personalInfoFormFields, field => (
              <FormInputField
                key={field.id}
                label={field.label}
                type={field.type}
                name={field.name}
                value={field.value}
                optional={field.Optional}
              />
            ))}
          </div>
          <div className="form-container container mb-3">
            <h4 className="lead mb-4">
Address Info
            </h4>
            {_.map(addressFormFields, field => (
              <FormInputField
                key={field.id}
                label={field.label}
                type={field.type}
                name={field.name}
                value={field.value}
                optional={field.Optional}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <CheckoutDetails />
          <CheckoutButton
            eventedLocalStorage={eventedLocalStorage}
          />
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default Checkout;
