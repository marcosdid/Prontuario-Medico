import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Pront from '../../components/prontuario'

import './styles.css'

const List = () => {
  const history = useHistory()

  return (
    <div id='container'>
      <div className='block-prontuarios'>
        <Pront />

        <Button
          type='button'
          onClick={() => {
            history.push('/cadastro')
          }}
        >
          Adicionar novo prontuário
        </Button>
      </div>
    </div>
  )
}

export default List
