import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { AntDesign, MaterialCommunityIcons, Feather, Octicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
//redux config
//configuring redux store
import ReduxThunk from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import { userAuthReducer } from "./store/reducer/appStorage"

import Home from "./screens/Home";
import Pay from "./screens/Pay";
import Assets from "./screens/Asset";
import Trades from "./screens/Trade";
import ProfileSetting from "./screens/ProfileSetting";
import LearnEarn from "./screens/LearnEarn";
import InviteFriend from "./screens/InviteFriend"
import Earn from "./screens/Earnyield"
import EarnAsset from "./screens/EarnOption"
import WalletAsset from "./screens/WalletAssets"
import RecieveCrypto from "./screens/Recieve"
import SendInfo from "./screens/SendGift"
import Calculator from './screens/CryptoCalculator'
import Card from './screens/Card'
import TransferFund from "./screens/TransferFunds"
import Ust from "./screens/Ust"
import GetWallet from "./screens/Wallet"

//auth screen
import Splash_1 from "./auth/splash";
import Splash_2 from "./auth/splash2";

import Login from "./auth/login";
import Signup from "./auth/signup";
import PriceChart from "./auth/priceChart";
import Verification from "./auth/verification";
import Secure from "./auth/secure";
import Number from "./auth/number";
import VerifyNumber from "./auth/verifyNumber";
import Authenticate from "./auth/authenticate";
import VerifySuccess from "./auth/verifySuccess";
import SearchSplash from "./auth/searchSplash";

//importing component
import CustomDrawerContent from "./component/DrawerContent";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const TabNavigator = () => {
  return <Tab.Navigator
    initialRouteName='Pay'
    tabBarOptions={{
      showLabel: false,
      style: {
        position: "absolute",
        elevation: 0,
        backgroundColor: "white",
        borderRadius: 15,
        height: 70,
      },
    }}
  >

    <Tab.Screen
      name="HomeApp"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>

            <Octicons name="home" size={24} color={focused ? "#1652f0" : "black"} />
            <Text
              style={{ color: focused ? "#1652f0" : "grey", fontSize: 10, fontFamily: 'Poppins' }}
            >
              Home
            </Text>
          </View>
        ),
      }}
    />



    <Tab.Screen
      name="Assets"
      component={Assets}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons name="clock-time-three-outline" size={24} color={focused ? "#1652f0" : "black"} />
            <Text style={{ color: focused ? "#1652f0" : "grey", fontSize: 10, fontFamily: 'Poppins' }}>Assets</Text>
          </View>
        ),
      }}
    />



    <Tab.Screen
      name="Trade"
      component={Trades}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Feather name="trending-up" size={24} color={focused ? "#1652f0" : "black"} />
            <Text
              style={{ color: focused ? "#1652f0" : "grey", fontSize: 10, fontFamily: 'Poppins' }}
            >
              Trade
            </Text>
          </View>
        ),
      }}
    />


    <Tab.Screen
      name="Pay"
      component={Pay}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AntDesign name="man" size={24} color={focused ? "#1652f0" : "black"} />
            <Text
              style={{ color: focused ? "#1652f0" : "grey", fontSize: 10, fontFamily: 'Poppins' }}
            >
              Pay
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
}
const DrawerNavigator = () => {
  return <Drawer.Navigator
    drawerContent={CustomDrawerContent}
  >
    <Drawer.Screen name='Home' component={TabNavigator} />
  </Drawer.Navigator>
}
const HomeStackNavigator = () => {
  return <Stack.Navigator initialRouteName="Splash_1">
    <Stack.Screen
      name="Home"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Splash_1"
      component={Splash_1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Splash_2"
      component={Splash_2}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PriceChart"
      component={PriceChart}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Verification"
      component={Verification}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Secure"
      component={Secure}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VerifyNumber"
      component={VerifyNumber}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Authenticate"
      component={Authenticate}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VerifySuccess"
      component={VerifySuccess}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Number"
      component={Number}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfileSetting"
      component={ProfileSetting}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchSplash"
      component={SearchSplash}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LearnEarn"
      component={LearnEarn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="InviteFriend"
      component={InviteFriend}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Trade"
      component={Trades}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="WalletAsset"
      component={WalletAsset}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='Recieve'
      component={RecieveCrypto}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name='Send'
      component={SendInfo}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='CryptoCalculator'
      component={Calculator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CardForm"
      component={Card}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="TransferOptions"
      component={TransferFund}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="UstScreen"
      component={Ust}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EarnYield"
      component={Earn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EarnAssets"
      component={EarnAsset}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Wallet"
      component={GetWallet}
      options={{ headerShown: false }}
    />




  </Stack.Navigator>
}



export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  //redux store setup
  const rootReducer = combineReducers({
    userAuth: userAuthReducer,
  })
  //creating store
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

  let loadFonts = async () => {
    try {
      await Font.loadAsync({
        'ABeeZee': require('./assets/fonts/ABeeZee-Regular.ttf'),
        'Poppins': require('./assets/fonts/Poppins-Medium.ttf'),
      });
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadFonts()
    
  }, [loadFonts])

  if (isLoading) {
    return (<View style={{
      flex: 1,
      backgroundColor: "#1652f0",
      zIndex: 10
    }}>
      <View style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 35,

        }}>coinbase</Text>
      </View></View>)
  }



  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer >

    </Provider >

  );
}

