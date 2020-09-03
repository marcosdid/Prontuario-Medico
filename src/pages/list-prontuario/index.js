import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button'

import deleteIcon from '../../assets/icons/x.svg'
import timeIcon from '../../assets/icons/clock.svg'

import './styles.css'
import UserSelect from '../../components/userSelect'

const List = () => {
  const history = useHistory()

  const [prontuarios, setProntua] = useState([])

  function getProntuByLocalStorage() {
    const indices = Object.keys(localStorage)
    const pronts = indices.map((key) => {
      return JSON.parse(localStorage.getItem(key))
    })

    return pronts
  }

  useEffect(() => {
    const prontuarios = getProntuByLocalStorage()
    setProntua(prontuarios)
  }, [])

  function handleDeleteProntuario(id) {
    localStorage.removeItem(id)
    const newProntuarios = getProntuByLocalStorage()

    setProntua(newProntuarios)
  }

  return (
    <div id='container'>
      <div className='block-prontuarios'>
        {prontuarios[0] ? (
          prontuarios.map((item) => {
            const data = item.created_at
            const dayMonthYear = data.split('T')[0].split('-')
            const hourMinutes = data.split('T')[1].split('.')[0].split(':')
            return (
              <div className='block-pront' key={item._id}>
                <div className='date'>
                  <p className='day'>{dayMonthYear[2]}</p>
                  <p className='month'>{dayMonthYear[1]}</p>
                  <p className='year'>{dayMonthYear[0]}</p>
                </div>
                <div className='content'>
                  <header>
                    <div className='time'>
                      <p>
                        <img src={timeIcon} alt='time' />
                        {`${hourMinutes[0]}:${hourMinutes[1]}`}
                      </p>

                      <img
                        src={deleteIcon}
                        alt='delete Prontuario'
                        onClick={() => handleDeleteProntuario(item._id)}
                      />
                    </div>
                    <h1>Anamnese</h1>
                  </header>

                  <div className='main-block'>
                    <div className='block'>
                      <h1>Queixa Principal</h1>
                      <p>{item.queixa.label}</p>
                    </div>

                    <div className='doencas'>
                      <h1>Doenças Adulto</h1>
                      <div className='options-block'>
                        {item.doencas.map((item) => {
                          return (
                            <UserSelect key={item.key} label={item.label} />
                          )
                        })}
                      </div>
                    </div>

                    <div className='block'>
                      <h1>Historico de moléstia</h1>
                      <p>{item.historico}</p>
                    </div>
                  </div>
                </div>
              </div>
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
