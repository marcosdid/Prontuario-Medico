import React from 'react'

import Select from '../../components/Select'
import Button from '../../components/Button'

import './styles.css'
import Textarea from '../../components/Textarea'

const Form = () => {
  return (
    <div className='container'>
      <div className='main'>
        <header>
          <h1>Anamnese</h1>
        </header>

        <form className='formulario'>
          <Select
            name='Queixa'
            label='Queixa Principal'
            options={[
              { value: 1, label: 'Dor de cabeça' },
              { value: 2, label: 'Dor nas costas' },
            ]}
          />

          <Select
            name='Doenças'
            label='Doenças Adulto'
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
