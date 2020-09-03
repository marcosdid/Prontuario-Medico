import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Select from '../../components/Select'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea'
import UserSelect from '../../components/userSelect'

import missingErrorValidator from '../../helpers/errors/MissingErrorValidator'
import api from '../../services/api'

import deleteIcon from '../../assets/icons/x.svg'

import './styles.css'

const Form = () => {
  const [queixas, setQueixas] = useState([])
  const [doencas, setDoencas] = useState([])

  const [userQueixa, setUserQueixa] = useState()
  const [historico, setHistorico] = useState()
  const [userDoencaSelects, setUserDoencaSelects] = useState([])

  const [selects, setSelects] = useState([])

  const history = useHistory()

  async function handleFormSubmit(e) {
    e.preventDefault()

    if (!userQueixa) {
      return missingErrorValidator('*Queixa Principal*')
    }

    if (!historico) {
      return missingErrorValidator('*Doenças Adulto*')
    }

    try {
      const userProntuario = await api.post('/prontuario', {
        queixa: userQueixa,
        doencas: userDoencaSelects,
        historico,
      })

      localStorage.setItem(
        String(userProntuario.data._id),
        JSON.stringify(userProntuario.data)
      )

      history.push('/')
    } catch (error) {
      alert('Algo deu errado, tente novamente mais tarde!!')
    }
  }

  function handleDeleteSelectedItem(select) {
    const newDoencaSelects = userDoencaSelects.filter((item) => {
      return item != select + 1
    })
    const newSelects = selects.filter((item) => {
      return item !== select
    })
    setUserDoencaSelects(newDoencaSelects)
    setSelects(newSelects)
  }

  function handleNewSelectUserItem(e) {
    const doencas = userDoencaSelects
    if (doencas.length > 0 && doencas.indexOf(e.target.value) > -1) {
      return alert('Não é permitido Doenças repetidas')
    }
    setUserDoencaSelects([...doencas, e.target.value])
    setSelects([...selects, e.target.value - 1])
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

        <form onSubmit={handleFormSubmit} className='formulario'>
          <Select
            name='Queixa'
            required
            label='Queixa Principal *'
            value={userQueixa}
            onChange={(e) => {
              setUserQueixa(e.target.value)
            }}
            options={queixas}
          />

          <Select
            name='Doenças'
            label='Doenças Adulto'
            onChange={(e) => handleNewSelectUserItem(e)}
            options={doencas}
          />

          <div className='selecionados'>
            <label>Selecionados:</label>
            <div className='options'>
              {selects.map((select) => {
                return (
                  <UserSelect key={select} label={doencas[select].label}>
                    <img
                      src={deleteIcon}
                      alt='delete'
                      onClick={() => {
                        handleDeleteSelectedItem(select)
                      }}
                    />
                  </UserSelect>
                )
              })}
            </div>
          </div>

          <Textarea
            value={historico}
            onChange={(e) => {
              setHistorico(e.target.value)
            }}
            required
            name='historico'
            label='Histórico de Moléstia *'
            placeholder='Digite...'
            maxLength='1000'
            minLength='10'
          />

          <Button type='submit'>Salvar</Button>
        </form>
      </div>
    </div>
  )
}

export default Form
