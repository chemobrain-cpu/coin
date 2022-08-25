import React, { useState, useEffect } from 'react'
import { View, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import CryptoCard from '../component/currencyContainer'

const HomeWatchList = () => {
  const [coins, setCoins] = useState([
    {
      id: 1,
      name: "Ethereum",
      image:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/eth.png",
      symbol: "Eth",
      current_price: 123,
      price_change_percentage_24h: 12,
    },
    {
      id: 2,
      name: "Ripple",
      image:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xrp.png",
      symbol: "xrp",
      current_price: 123,
      price_change_percentage_24h: 12,
    },
    {
      id: 3,
      name: "Bitcoin Cash",
      image:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/bch.png",
      symbol: "Bch",
      current_price: 123,
      price_change_percentage_24h: 12,
    },
    {
      id: 4,
      name: "Litecoin",
      image:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/ltc.png",
      symbol: "Ltc",
      current_price: 123,
      price_change_percentage_24h: 12,
    },
    {
      id: 5,
      name: "Stellar Lumens",
      image:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
      symbol: "Xlm",
      current_price: 123,
      price_change_percentage_24h: 12,
    },
    {
      id: 6,
      name: "Bitcoin",
      image:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/btc.png",
      symbol: "Btc",
      current_price: 123,
      price_change_percentage_24h: 12,
    },
  ]);

  let { watchList } = useSelector(state => state.userAuth)

  return (
      <View style={styles.watchContainer}>
        <View>
          {coins.map((coin) => (
            <CryptoCard key={coin.id} coin={coin}
              navigationHandler={() => navigationHandler(item)} />
          ))}
        </View>
      </View>
  )
}

let styles = StyleSheet.create({
  watchContainer:{
     height: 420, 
     width: "100%", 
    },
  coinName: {
    fontSize: 17,
    fontFamily: 'Poppins'
  },
  symbol: {
    fontSize: 20,
    color: "#5d616d",
    fontFamily: 'ABeeZee'
  },
  current_price: {
    fontSize: 20,
    fontFamily: 'ABeeZee',
    color: 'green'

  }


})

export default HomeWatchList
