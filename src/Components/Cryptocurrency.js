import React from 'react'
import './styles/Cryptocurrency.css'

const Cryptocurrency = ({ name, symbol, price, img }) => {
  return (
    <div className='box-cryptocurrency'>
      <span className='name'><img src={img} alt=""/>{name}</span>
      <span className='symbol'>{symbol}</span>
      <span className='price'>{price}</span>
    </div>
  )
}

export default Cryptocurrency