const link = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

const getCryptos = () => {
  return fetch(link)
    .then( res => res.json())
    .then( result => {
      return result.Data.map( el => {
        return {
          name: el.CoinInfo.FullName,
          symbol: el.CoinInfo.Name,
          price: el.DISPLAY.USD.PRICE,
          img: `https://www.cryptocompare.com/${el.CoinInfo.ImageUrl}`
        }
      })
    })
}

export default getCryptos