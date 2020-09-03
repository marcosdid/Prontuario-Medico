import React from 'react'

import './styles.css'

const UserSelect = ({ label, children, ...rest }) => {
  return (
    <div className='select-block' {...rest}>
      <p>{label}</p>
      {children}
    </div>
  )
}

export default UserSelect
