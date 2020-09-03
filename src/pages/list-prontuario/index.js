import React from 'react'

import Button from '../../components/Button'
import Pront from '../../components/prontuario'

import './styles.css'

const List = () => {
  return (
    <div id='container'>
      <p className='para'>Nenhum prontuário cadastrado.</p>
      <Pront />
      <Button type='button'>Adicionar novo prontuário</Button>
    </div>
  )
}

export default List
