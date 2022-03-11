import React, { useState, useEffect } from 'react'
import Cryptocurrency from './Cryptocurrency'
import Spinner from './Spinner'
import Labels from './Labels'
import './styles/BoxCryptos.css'

import getCryptos from '../Funcs/getCryptos'

const BoxCryptos = () => {

  const [cryptos, setCryptos] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getCryptos()
        .then( response => setCryptos(response))
    }, 1000)
  }, [])

  useEffect(() => {
    console.log(cryptos)
  },[cryptos])

  return !cryptos[0]
  ? <Spinner />
  : (<>
  <Labels />
  <div className='box-cryptos'>
    {
      cryptos.map( crypto => <Cryptocurrency 
        key={crypto.symbol}
        name={crypto.name}
        symbol={crypto.symbol}
        price={crypto.price} 
        img={crypto.img}
        />)
    }
  </div>
  </>
  
  )
}

export default BoxCryptos