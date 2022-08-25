import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons'
import {
  getDetailedCoinData,
  getCoinMarketChart,
  getCandleChartData,
} from "../store/action/appStorage";
import { useRoute } from "@react-navigation/native";
import Error from '../component/errorComponent'
import FilterComponent from './filterComponent'
import { useDispatch, } from "react-redux"

const filterDaysArray = [
  { filterDay: "1", filterText: "24h" },
  { filterDay: "7", filterText: "7d" },
  { filterDay: "30", filterText: "30d" },
  { filterDay: "365", filterText: "1y" },
  { filterDay: "max", filterText: "All" },
];

const PriceChart = ({ navigation }) => {
  let dispatch = useDispatch()
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [coinCandleChartData, setCoinCandleChartData] = useState(null);
  const [header, setHeader] = useState(false);

  const route = useRoute();
  //destructuring

  const {
    name: coinId,
  } = route.params

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1");
  const [isCandleChartVisible, setIsCandleChartVisible] = useState(false);

  const fetchCoinData = async () => {

    setIsLoading(true)
    const fetchedCoinData = await dispatch(getDetailedCoinData(coinId));
    if (!fetchedCoinData.bool) {
      //throw error screen
      setIsError(true)
      setIsLoading(false)
      return
    }

    setCoin(fetchedCoinData.message);
    setIsLoading(false)

  };

  const fetchMarketCoinData = async (selectedRangeValue) => {
    setIsLoading(true)
    const fetchedCoinMarketData = await dispatch(getCoinMarketChart(
      coinId,
      selectedRangeValue
    ));
    if (!fetchedCoinMarketData.bool) {
      //throw error screen
      setIsError(true)
      setIsLoading(false)
      return
    }

    setCoinMarketData(fetchedCoinMarketData.message);
    setIsLoading(false)
  };

  const fetchCandleStickChartData = async (selectedRangeValue) => {

    setIsLoading(true)
    const fetchedSelectedCandleChartData = await dispatch(getCandleChartData(
      coinId,
      selectedRangeValue
    ));
    if (!fetchedSelectedCandleChartData.bool) {
      //throw error screen
      setIsError(true)
      setIsLoading(false)
      return
    }

    setCoinCandleChartData(fetchedSelectedCandleChartData.message);

    setIsLoading(false)
  };
  const scrollHandler = (e) => {
    if (e.nativeEvent.contentOffset.y > 210) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }


  const truncate = (str, len) => {
    if (str.length > len) {
      if (len <= 3) {
        return str.slice(0, len - 3) + "...";
      }
      else {
        return str.slice(0, len) + "...";
      };
    }
    else {
      return str;
    };
  };

  useEffect(() => {
    fetchCoinData();
    fetchMarketCoinData(1);
    fetchCandleStickChartData();
  }, []);


  const onSelectedRangeChange = (selectedRangeValue) => {
    setSelectedRange(selectedRangeValue);
    fetchMarketCoinData(selectedRangeValue);
    fetchCandleStickChartData(selectedRangeValue);
  };

  const memoOnSelectedRangeChange = React.useCallback(
    (range) => onSelectedRangeChange(range), []);

  if (isLoading || !coin || !coinMarketData || !coinCandleChartData) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#1652f0" />
    </View>
  }
  let reload = () => {
    setIsError(false)
    fetchCoinData()
    fetchMarketCoinData(1)
    fetchCandleStickChartData();

  }
  if (isError) {
    return <Error tryAgain={reload} />;
  }

  const {
    name,
    market_data: {
      current_price,
      price_change_percentage_24h,
    },
  } = coin;

  const { prices } = coinMarketData;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "green";

  const chartColor = current_price.usd > prices[0][1] ? "green" : "#ea3943";

  const screenWidth = Dimensions.get("window").width;

  const formatCurrency = ({ value }) => {
    "worklet";
    if (value === "") {
      if (current_price.usd < 1) {
        return `$${current_price.usd}`;
      }
      return `$${current_price.usd.toFixed(2)}`;
    }
    if (current_price.usd < 1) {
      return `$${parseFloat(value)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };



  return (
    <SafeAreaView style={{ paddingHorizontal: 10, backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={styles.chartCon} showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} onScroll={scrollHandler}>

        {header ? <View >
          <View style={{ ...styles.scrollNavigationHeader }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...styles.goback }} >
              <Feather name="arrow-left" size={24} color="rgb(44, 44, 44)" />
            </TouchableOpacity>

            <Text style={{ ...styles.headerName }}>{name}</Text>

            <View style={{ display: 'flex', flexDirection: 'row', width: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

              <MaterialIcons name="star" size={22} fontWeight='Poppins' color="rgb(44, 44, 44)" />

              <AntDesign name="download" size={22} fontWeight='Poppins' color="rgb(44, 44, 44)" />
            </View>

          </View>

        </View> : <></>}


        <LineChart.Provider
          data={prices.map(([timestamp, value]) => ({ timestamp, value }))}
        >

          <View style={{ ...styles.priceContainer, opacity: header ? 0 : 1 }}>
            <View style={styles.navigationHeader}>
              <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={22} fontWeight='Poppins' color="rgb(44, 44, 44)" />
              </TouchableOpacity>



            </View>


            <View>
              <Text style={styles.name}>{name}</Text>
              <View style={styles.favoriteContainer}>
                <LineChart.PriceText
                  format={formatCurrency}
                  style={styles.currentPrice}
                />


                <View style={styles.favorite}>
                  <TouchableOpacity style={styles.favoriteIcon} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="star" size={22} fontWeight='Poppins' color="rgb(44, 44, 44)" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.favoriteIcon} onPress={() => navigation.goBack()}>
                    <AntDesign name="download" size={22} fontWeight='Poppins' color="rgb(44, 44, 44)" />
                  </TouchableOpacity>
                </View>

              </View>

            </View>

            <View
              style={{
                paddingHorizontal: 3,
                paddingVertical: 8,
                borderRadius: 5,
                flexDirection: "row",
                color: percentageColor
              }}
            >
              <Feather
                name={price_change_percentage_24h < 0 ? "arrow-down-right" : "arrow-up-right"}
                size={24}
                color={percentageColor}
                style={{ alignSelf: "center", marginRight: 5 }}
              />
              <Text style={{ ...styles.priceChange, color: percentageColor }}>
                {Math.abs(price_change_percentage_24h)?.toFixed(2)}%
              </Text>
            </View>


          </View>

          <View style={styles.chartContainer}>
            {isCandleChartVisible ? (
              <CandlestickChart.Provider
                data={coinCandleChartData.map(
                  ([timestamp, open, high, low, close]) => ({
                    timestamp,
                    open,
                    high,
                    low,
                    close,
                  })
                )}
              >
                <CandlestickChart height={screenWidth / 1} width={screenWidth / 1.5}>
                  <CandlestickChart.Candles />
                  <CandlestickChart.Crosshair>
                    <CandlestickChart.Tooltip />
                  </CandlestickChart.Crosshair>
                </CandlestickChart>
                <View style={styles.candleStickDataContainer}>
                  <View>
                    <Text style={styles.candleStickTextLabel}>Open</Text>
                    <CandlestickChart.PriceText
                      style={styles.candleStickText}
                      type="open"
                    />
                  </View>
                  <View>
                    <Text style={styles.candleStickTextLabel}>High</Text>
                    <CandlestickChart.PriceText
                      style={styles.candleStickText}
                      type="high"
                    />
                  </View>
                  <View>
                    <Text style={styles.candleStickTextLabel}>Low</Text>
                    <CandlestickChart.PriceText
                      style={styles.candleStickText}
                      type="low"
                    />
                  </View>
                  <View>
                    <Text style={styles.candleStickTextLabel}>Close</Text>
                    <CandlestickChart.PriceText
                      style={styles.candleStickText}
                      type="close"
                    />
                  </View>
                </View>
                <CandlestickChart.DatetimeText
                  style={{ color: "white", fontWeight: "700", margin: 10 }}
                />
              </CandlestickChart.Provider>
            ) : (
              <LineChart height={screenWidth / 1.1} width={screenWidth / 1.2}>
                <LineChart.Path color={chartColor} />
                <LineChart.CursorCrosshair color={chartColor} />
              </LineChart>
            )}

          </View>
          <View style={styles.filtersContainer}>
            {filterDaysArray.map((day) => (
              <FilterComponent
                filterDay={day.filterDay}
                filterText={day.filterText}
                selectedRange={selectedRange}
                setSelectedRange={memoOnSelectedRangeChange}
                key={day.filterText}
              />
            ))}

          </View>
        </LineChart.Provider>

        <View style={styles.aboutContainer}>
          <Text style={styles.aboutHead}>About {name}</Text>
          <Text style={styles.aboutText}>{truncate(coin.description.en, 400)}</Text>
        </View>

        <View style={styles.marketStatContainer}>
          <Text style={styles.marketStatHead}>Market stats</Text>

          <View style={styles.marketStatistics}>
            <View>

            </View>

            <View>
              
            </View>

          </View>
        </View>

      </ScrollView>



      <View style={styles.buttonCon} >
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>buy</Text>
        </TouchableOpacity>

      </View>



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollNavigationHeader: {
    paddingBottom: 10,
    backgroundColor: '#fff',
    zIndex: 10,
    width: '100%',
    borderBottomColor: 'rgb(197, 197, 197)',
    borderBottomWidth: .5,
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',


  },
  headerName: {
    fontFamily: 'ABeeZee',
    fontSize: 20,
    fontFamily: 'Poppins'

  },
  goback: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },

  chartCon: {
    height: Dimensions.get('window').height / 1,
    marginTop: 10

  },
  navigationHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    zIndex: 5,
    paddingTop: 30

  },
  currentPrice: {
    color: "black",
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 1,
    flex: 2
  },
  name: {
    color: "grey",
    fontSize: 20,
    fontFamily: 'Poppins'
  },
  priceContainer: {
    padding: 15,
    flexDirection: "column",
  },
  favoriteContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  favorite: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    flex: 1
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: 'Poppins'
  },
  favoriteIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgb(240,240,240)',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"

  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  candleStickText: {
    color: "white",
    fontWeight: "700",
  },
  candleStickDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 30,
  },
  candleStickTextLabel: {
    color: 'grey',
    fontSize: 13
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  aboutContainer: {
    paddingVertical: 20,
    borderTopWidth: .5,
    borderTopColor: 'rgb(200,200,200)',
    borderBottomWidth: .5,
    borderBottomColor: 'rgb(200,200,200)',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15
  },
  aboutHead: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Poppins'
  },
  aboutText: {
    fontSize: 17,
    fontFamily: 'ABeeZee',
    color: 'rgb(100,100,100)'

  },
  marketStatContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 15
  },
  marketStatHead: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Poppins'
  },
  buttonCon: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Poppins'
  },
  button: {
    width: '100%',
    backgroundColor: '#1652f0',
    paddingVertical: 14,
    marginHorizontal: '5%',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins'
  }
});


export default PriceChart;