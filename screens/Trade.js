import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  Modal,
} from "react-native";
import { Entypo, MaterialIcons, FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { useSelector, } from "react-redux"
import TopMovers from "../component/HomeTopMovers"
import WatchList from '../component/HomeWatchList'

const Trades = () => {
  let [text, setText] = useState('')
  let [focus, setFocus] = useState(false)
  let [coinsState, setCoinsState] = useState([])
  let { coins } = useSelector(state => state.userAuth)
  const [modalVisible, setModalVisible] = useState(false);
  const [status, seStatus] = useState(false)


  let modalHandler = () => {
    setModalVisible(prev => !prev)
  }
  let changeTradeBasic = () => {
    seStatus(false)

  }
  let changeTradeAdvance = () => {
    seStatus(true)

  }



  const changeText = useCallback((e) => {
    setText(e)
    setCoinsState([])
    let arr = []
    coins.map(data => {
      var regex = new RegExp(e, "g")
      if (data.name.match(regex)) {
        arr.push(data)
      }
    })
    setCoinsState(arr)

  }, [coins])
  return (<>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalTop}>
        </View>

        <View style={styles.modalView}>

          <Text style={styles.modalHeader}>Choose a trading method</Text>

          <TouchableOpacity style={{...styles.modalButtonContainer,backgroundColor:status === false ?'rgb(240,240,240)':'#fff'}} onPress={changeTradeBasic}>
            <View>
              <Feather name="trending-up" size={18} color="#1652f0" />

            </View>
            <View>
              <Text style={styles.modalButtonHead}> Trade</Text>
              <Text style={styles.modalButtonText}> Simple buying and selli..</Text>

            </View>
            <View>
              {status ? <></> : <AntDesign name="check" size={24} color="#1652f0" />
              }

            </View>




          </TouchableOpacity>

          <TouchableOpacity style={{...styles.modalButtonContainer,backgroundColor:status === false ?'#fff':'rgb(240,240,240)'}} onPress={changeTradeAdvance}>
            <View style={styles.icon}>
              <Entypo name="bar-graph" size={18} color="#1652f0" />

            </View>
            <View  style={styles.content}>
              <Text style={styles.modalButtonHead}> Advance Trade</Text>
              <Text style={styles.modalButtonText}>Advanced markets and cha..</Text>

            </View>
            <View  style={styles.mark}>
              {status ? 
                <AntDesign name="check" size={24} color="#1652f0" /> : <></>}

            </View>



          </TouchableOpacity>


        </View>

      </View>



    </Modal>

    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.scrollContainer} stickyHeaderIndices={[0]}>
        <View style={{ display: 'flex', width: '100%' }}>
          <View style={{ ...styles.headerContainer, backgroundColor: '#fff', }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Entypo name="menu" size={24} color="black" />

            </TouchableOpacity>

            <TouchableOpacity onPress={modalHandler} style={styles.giftContainer}>

              <Text style={styles.giftText}>Trade </Text>

              <MaterialIcons name="keyboard-arrow-down" size={28} color="black" />


            </TouchableOpacity>


            <TouchableOpacity onPress={modalHandler}>
              <MaterialIcons name="notifications-none" size={30} color="black" />
              <View style={styles.notification}>
                <View style={styles.notificationTextContainer}>
                  <Text style={styles.notificationText}>1</Text>

                </View>

              </View>

            </TouchableOpacity>


          </View>
        </View>

        <View style={focus ? { ...styles.inputContainer, borderColor: '#1652f0' } : { ...styles.inputContainer }}>
          <FontAwesome name="search" size={18} color={"grey"} style={{ marginBottom: 10 }} />
          <TextInput
            style={{ ...styles.input }}
            onChangeText={changeText}
            value={text}
            placeholder="Search for an asset"
            onFocus={() => {
              setFocus(true);
            }}

            onBlur={() => {
              setFocus(false);
            }}

          />
        </View>

        <View style={styles.moversection}>
          <View style={styles.moversectionheading}>
            <Text
              style={styles.moverlefttext}
            >
              New on Coinbase
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.moverrighttext}
              >
                See all
              </Text>

            </TouchableOpacity>


          </View>


          <TopMovers />

        </View>
        <View style={styles.moversection}>
          <View style={styles.moversectionheading}>
            <Text
              style={styles.moverlefttext}
            >
              Top movers
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.moverrighttext}
              >
                See all
              </Text>

            </TouchableOpacity>

          </View>
          <TopMovers />
        </View>

        <View style={styles.assetsection}>
          <View style={styles.assetsectionheading}>
            <Text
              style={styles.assetlefttext}
            >
              Top assets
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.assetrighttext}
              >
                See all
              </Text>

            </TouchableOpacity>

          </View>

          <WatchList />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>

  );
};

const styles = StyleSheet.create({

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'

  },
  modalTop: {
    height: 4,
    width: '20%',
    backgroundColor: 'rgb(225,225,225)',
    position: 'absolute',
    top: '57%',
    alignSelf: 'center',
    borderRadius: 5

  },
  modalView: {
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    top: '60%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    borderTopColor: 'rgb(240,240,240)',
    borderTopWidth: 1,
    paddingTop: 20

  },
  modalHeader: {
    fontSize: 20,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    marginBottom: 10

  },
  modalButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25
  },
  modalButtonHead: {
    fontSize: 18,
    fontFamily: 'Poppins',

  },
  modalButtonText: {
    fontSize: 16,
    fontFamily: 'ABeeZee',
    color: 'grey'
  },
  icon:{
    width:'15%'

  },
  content:{
    width:'80%'

  },
  mark:{
    width:'5%'

  },

  /*end of modal styles */
  scrollContainer: {
    paddingBottom: 300,

  },
  headerContainer: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    position: 'relative',
    paddingHorizontal: 15

  },
  giftContainer: {
    display: "flex",
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: "center",
    height: 40,
    paddingHorizontal: 30,
  },
  giftText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    marginLeft: 10,
    alignSelf: 'center'
  },
  notification: {
    width: 20,
    height: 20,
    position: 'relative',
    padding: 10,
    marginRight: 20
  },
  notificationTextContainer: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 35,
    left: 15,
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20
  },
  notificationText: {
    color: 'white',
    fontFamily: 'Poppins',
  },


  inputContainer: {
    width: '95%',
    borderRadius: 25,
    borderWidth: .5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderColor: 'black',
    paddingVertical: 5,
    alignSelf: 'center'


  },
  input: {
    height: 45,
    paddingHorizontal: 10,
    fontFamily: 'Poppins',
    alignSelf: 'stretch',
    width: '90%',
    fontSize: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  moversection: {
    paddingLeft: 0,
    paddingTop: 15,
    borderColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
  moversectionheading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  moverlefttext: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: "rgb(44, 44, 44)",
    paddingTop: 10,
    paddingBottom: 10
  },
  moverrighttext: {
    fontSize: 20,
    fontFamily: 'ABeeZee',
    color: "#1652f0",
    paddingTop: 10,
    paddingBottom: 10
  },


  assetsection: {
    paddingLeft: 0,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 15
  },
  assetsectionheading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  assetlefttext: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: "rgb(44, 44, 44)",
    paddingTop: 10,
    paddingBottom: 10
  },
  assetrighttext: {
    fontSize: 20,
    fontFamily: 'ABeeZee',
    color: "#1652f0",
    paddingTop: 10,
    paddingBottom: 10
  },


})

export default Trades;