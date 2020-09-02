import React from 'react'
import Select from 'react-select'

import './styles.css'

const SelectButton = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option>Selecione uma Opção</option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectButton
