import React from 'react'

import './styles.css'

const Button = ({ type, children, ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  )
}

export default Button
