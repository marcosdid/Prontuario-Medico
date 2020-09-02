import React, { useState, useEffect } from 'react'

import Select from '../../components/Select'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea'

import api from '../../services/api'

import deleteIcon from '../../assets/icons/x.svg'

import './styles.css'

const Form = () => {
  const [queixas, setQueixas] = useState([])
  const [doencas, setDoencas] = useState([])

  const [userQueixa, setUserQueixa] = useState({})
  const [userDoenca, setUserDoenca] = useState({})
  const [historico, setHistorico] = useState('')

  const [selects, setSelects] = useState([])

  function test(e) {
    e.preventDefault()

    console.log({ userQueixa, userDoenca, historico })
  }

  function handleDeleteSelectedItem(id) {
    const selecionados = selects.filter((item, index) => {
      return index !== id
    })
    setSelects(selecionados)
  }

  useEffect(() => {
    async function getApi() {
      const queixas = await api.get('/queixas')
      const doencas = await api.get('/doencas')
      setQueixas(queixas.data.data)
      setDoencas(doencas.data.data)
    }

    getApi()
  }, [])

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
            value={userQueixa}
            onChange={(e) => {
              setUserQueixa(e.target.value)
            }}
            options={queixas}
          />

          <Select
            name='Doenças'
            label='Doenças Adulto'
            value={userDoenca}
            onChange={(e) => {
              setUserDoenca(e.target.value)
              setSelects([...selects, { id: e.target.value - 1 }])
            }}
            options={doencas}
          />

          <div className='selecionados'>
            <label>Selecionados:</label>
            <div className='options'>
              {selects.map((select, index) => {
                return (
                  <div key={select.id} className='select'>
                    <p>{doencas[select.id].label}</p>
                    <img
                      src={deleteIcon}
                      alt='delete'
                      onClick={() => {
                        handleDeleteSelectedItem(index)
                      }}
                    />
                  </div>
                )
              })}
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
