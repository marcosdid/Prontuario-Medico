import React, { useEffect, useState } from 'react'

import timeIcon from '../../assets/icons/clock.svg'

import './styles.css'

import deleteIcon from '../../assets/icons/x.svg'

const Pront = () => {
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
    <>
      {prontuarios[0] ? (
        prontuarios.map((item) => {
          const data = item.created_at
          const dayMonthYear = data.split(':')[0].split('-')
          const day = dayMonthYear[2].split('T')[0]
          const hour = data.split(':')[1]
          const minutes = data.split(':')[2].split('.')[0]
          return (
            <div className='block-pront'>
              <div className='date'>
                <p className='day'>{day}</p>
                <p className='month'>{dayMonthYear[1]}</p>
                <p className='year'>{dayMonthYear[0]}</p>
              </div>
              <div className='content'>
                <header>
                  <div className='time'>
                    <p>
                      <img src={timeIcon} alt='time' /> {`${hour}:${minutes}`}
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
                          <div key={item.id} className='select-block'>
                            <p>{item.label}</p>
                          </div>
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
    </>
  )
}

export default Pront
