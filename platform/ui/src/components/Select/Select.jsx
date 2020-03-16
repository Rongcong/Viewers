import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSelect from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '30px',
    borderRadius: '4px',
    backgroundColor: 'black',
    border: '1px solid #0944b3',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const Select = ({
  autoFocus,
  className,
  classNamePrefix,
  isDisabled,
  isMulti,
  isSearchable,
  name,
  onChange,
  options,
  placeholder,
  noOptionsMessage,
  value,
}) => {
  return (
    <ReactSelect
      styles={customStyles}
      autoFocus={autoFocus}
      className={classnames(
        className,
        'flex flex-col flex-1 hover:cursor-pointer'
      )}
      classNamePrefix={classnames(classNamePrefix)}
      isDisabled={isDisabled}
      isMulti={isMulti}
      isSearchable={isSearchable}
      name={name}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      value={value}
    ></ReactSelect>
  );
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  placeholder: PropTypes.any,
  noOptionsMessage: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
