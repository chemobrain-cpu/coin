import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import CryptoCard from './cryptoMover'

const HomeTopMovers = () => {
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
      price_change_percentage_24h: 2,
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

  ]);
  
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerstyle={styles.scrollContainer}
      >
        {coins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)}
      </ScrollView>
    </View>
  );
};
let styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 0
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: "rgb(44, 44, 44)",
    paddingTop: 10,
    paddingBottom: 10
  },


})

export default HomeTopMovers;


