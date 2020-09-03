import React from 'react'

import timeIcon from '../../assets/icons/clock.svg'

import './styles.css'

const Pront = ({ date, queixa, doencas, historico }) => {
  const data = date.split(':')[0].split('-')
  const day = data[2].split('T')[0]
  const hour = date.split(':')[1]
  const minutes = date.split(':')[2].split('.')[0]

  return (
    <div className='block-pront'>
      <div className='date'>
        <p className='day'>{day}</p>
        <p className='month'>{data[1]}</p>
        <p className='year'>{data[0]}</p>
      </div>
      <div className='content'>
        <header>
          <p>
            <img src={timeIcon} alt='time' /> {`${hour}:${minutes}`}
          </p>
          <h1>Anamnese</h1>
        </header>

        <div className='main-block'>
          <div className='block'>
            <h1>Queixa Principal</h1>
            <p>{queixa.label}</p>
          </div>

          <div className='doencas'>
            <h1>Doenças Adulto</h1>
            <div className='options-block'>
              {doencas.map((item) => {
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
            <p>{historico}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pront
