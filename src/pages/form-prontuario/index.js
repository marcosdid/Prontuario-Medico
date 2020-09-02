import React, { useState } from 'react'

import Select from '../../components/Select'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea'

import './styles.css'

const Form = () => {
  const [queixa, setQueixa] = useState({})
  const [doenca, setDoenca] = useState({})
  const [historico, setHistorico] = useState('')

  function test(e) {
    e.preventDefault()

    console.log({ queixa, doenca, historico })
  }

  return (
    <div className='container'>
      <div className='main'>
        <header>
          <h1>Anamnese</h1>
        </header>

        <form onSubmit={test} className='formulario'>
          <Select
            name='Queixa'
            label='Queixa Principal'
            inputValue={queixa}
            onChange={(e) => {
              setQueixa(e.target.value)
            }}
            options={[
              { value: 1, label: 'Dor de cabeça' },
              { value: 2, label: 'Dor nas costas' },
            ]}
          />

          <Select
            name='Doenças'
            label='Doenças Adulto'
            inputValue={doenca}
            onChange={(e) => {
              setDoenca(e.target.value)
            }}
            options={[
              { value: 1, label: 'Diabetes' },
              { value: 2, label: 'Câncer' },
            ]}
          />

          <div className='selecionados'>
            <label>Selecionados:</label>
            <div className='options'>
              <div>Câncer X</div>
              <div>Diabetes X</div>
            </div>
          </div>

          <Textarea
            value={historico}
            onChange={(e) => {
              setHistorico(e.target.value)
            }}
            name='historico'
            label='Histórico de Moléstia'
            placeholder='Digite...'
          />

          <Button type='submit'>Salvar</Button>
        </form>
      </div>
    </div>
  )
}

export default Form
