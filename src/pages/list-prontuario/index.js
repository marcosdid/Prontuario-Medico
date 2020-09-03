import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Pront from '../../components/prontuario'

import './styles.css'

const List = () => {
  const [prontuarios, setProntua] = useState([])

  const history = useHistory()

  const indices = Object.keys(localStorage)

  useEffect(() => {
    const pronts = indices.map((key) => {
      return JSON.parse(localStorage.getItem(key))
    })

    setProntua(pronts)
  }, [])

  return (
    <div id='container'>
      <div className='block-prontuarios'>
        {indices[0] ? (
          prontuarios.map((item) => {
            return (
              <Pront
                date={item.created_at}
                queixa={item.queixa}
                doencas={item.doencas}
                historico={item.historico}
              />
            )
          })
        ) : (
          <p className='para'>Nenhum prontuário cadastrado.</p>
        )}

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
