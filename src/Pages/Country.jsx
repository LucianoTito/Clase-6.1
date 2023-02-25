import React from 'react'
import '../Styles/country.css'

const Country = ({country}) => {
  return (
    <div className='card__country'>
        <div className='img__container'>
        <img className='country__flag' src={country?.flags.svg} alt="counry flag" />
        </div>
        <div className='card__text'>
            <h1 className='country__name'>{country?.name.common}</h1>
            <h2 className='country__capital'>{country?.capital}</h2>
        </div>
    </div>
  )
}

export default Country