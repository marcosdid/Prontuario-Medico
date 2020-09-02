import React from 'react'

import Button from '../../components/Button'

import './styles.css'

const List = () => {
  return (
    <div id='container'>
      <p>Nenhum prontuário cadastrado.</p>

      <Button type='button'>Adicionar novo prontuário</Button>
    </div>
  )
}

export default List
