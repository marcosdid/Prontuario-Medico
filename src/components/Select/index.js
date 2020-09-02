import React from 'react'

import './styles.css'

const SelectButton = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select value='' id={name} {...rest}>
        <option value='' hidden>
          Selecione uma opção
        </option>

        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectButton
