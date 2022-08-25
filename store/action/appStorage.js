import IO from 'socket.io-client'
import axios from 'axios'
export const SIGNUP_USER = "SIGNUP_USER";
export const FORCEUSERIN = "FORCEUSERIN";
export const COINS = "COINS";
export const WALLETASSET = 'WALLETASSET'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorModal from '../../component/errorModal';
/* Admin actions*/
//let username = await AsyncStorage.getItem('username');
//AsyncStorage.setItem('username',username);

let socket = IO(`/`)
let timer
//utility function for calculating if token expires
let calculateRemainingTime = (expiryDate) => {
  //getting current time in milliseconds
  const currentTime = new Date().getMilliseconds()

  //getting expiration time in milliseconds
  const adjustExpirationTime = (expiryDate * 60 * 60 * 1000)
  const timeLeft = adjustExpirationTime - currentTime

  return timeLeft
}
let retrievedStoredToken = async () => {
  let tokenFromStorage = await AsyncStorage.getItem('token');

  let expiryDate = await AsyncStorage.getItem('expiry');

  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {

    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('expiry')
    await AsyncStorage.removeItem('userId')

    return {
      token: "",
      expiresIn: ""
    }
  }
  return {
    token: tokenFromStorage,
    expiresIn: timeLeft


  }

}
export const checkIfIsLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      let response
      //check if token is expired

      let { token, expiresIn } = retrievedStoredToken()

      if (!token) {
        return false
      }

      //convert expiresIN backt to hours
      expiresIn = expiresIn / (60 * 60 * 1000)

      await AsyncStorage.setItem('tokenExpiry', expiresIn);
      await AsyncStorage.setItem('token', token);


      let userId = await AsyncStorage.getItem('userId')

      if (!userId) {
        return false
      }

      response = await fetch(`/userByTokens`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        }


      })
      if (response.status == 200) {
        let data = await response.json()
        data.response.token = token
        data.response.expiresIn = expiresIn
        dispatch({ type: FORCEUSERIN, payload: data.response })
      }

    } catch (err) {
      console.log(err)

    }

  }
}

export const signup = (data) => {
  return async (dispatch, getState) => {

    try {
      const response = await fetch(`localhost:8080/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 200) {
        let data = await response.json()

        dispatch({ type: SIGNUP_USER, payload: data })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}
export const login = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()


        localStorage.setItem("token", data.response.token)
        localStorage.setItem("expiry", data.response.expiresIn)
        localStorage.setItem("user", JSON.stringify(data.response.user))

        dispatch({ type: LOGIN_USER, payload: data.response })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}
export const loadCoins = (pageNumber = 1) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)

      dispatch({ type: COINS, payload: response.data })
      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}

export const getDetailedCoinData = (coinId) => {

  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
  
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`)
      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}

export const getCoinMarketChart = (coinId, selectedRange) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`)
      console.log(response.data)
      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(ErrorModal)
      return {
        bool: false,
        message: err
      }

    }

  }
}

export const getCandleChartData = (coinId, days = 1) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    console.log(coinId)
    console.log(days)
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}/ohlc?vs_currency=usd&days=${days}`)
      console.log(response.data)

      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}

export const changeWalletAsset = (item) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      dispatch({ type: WALLETASSET, payload:item })
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}
