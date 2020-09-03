import React, { useEffect, useState } from 'react'

import './styles.css'

const Pront = () => {
  const [prontuarios, setProntua] = useState([])
  useEffect(() => {
    const indices = Object.keys(localStorage)

    const pronts = indices.map((key) => {
      return JSON.parse(localStorage.getItem(key))
    })

    setProntua(pronts)
  }, [])

  return (
    <>
      {prontuarios.map((item) => {
        return (
          <div className='block-pront' key={item}>
            <div className='date'>
              <p>{item.created_at}</p>
            </div>
            <div className='content'>
              <header>
                <h1>{item.created_at}</h1>
                <h2>Anamnese</h2>
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
      })}
    </>
  )
}

export default Pront
