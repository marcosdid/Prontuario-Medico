import React from 'react'
import Select from 'react-select'

import './styles.css'

const SelectButton = ({ options, name, label }) => {
  const stylesSelect = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '7rem',
      padding: '0 0.5rem',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1.5rem',
      backgroundColor: 'rgba(220,220,220, .3)',
      color: 'rgba(169,169,169)',
    }),

    option: (provided, state) => ({
      ...provided,
      padding: 20,
      fontSize: '1.4rem',
    }),
  }

  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <Select
        styles={stylesSelect}
        className='select'
        options={options}
      ></Select>
    </div>
  )
}

export default SelectButton
